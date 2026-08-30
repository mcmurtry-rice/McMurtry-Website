// tools/database/useSiteLinks.js
//
// Lookup for public.site_links - every externally-hosted form, document,
// and calendar the site links to or embeds.
//
// Two things make this different from useSupabaseTable:
//
//   1. ONE FETCH PER PAGE LOAD, not one per call site. The Navbar needs a
//      link, so every page needs this table; Room Reservations needs three
//      keys from it. A module-level cache plus an in-flight promise
//      collapses all of that into a single request, and it survives
//      client-side route transitions. A full reload clears it, which is
//      what picks up dashboard edits.
//
//   2. FALLBACKS ARE REQUIRED. Every call site passes the URL it currently
//      ships with. That value renders on the very first paint (including in
//      the statically exported HTML, where there is no DB at all) and is
//      only replaced once the table loads. So: no flash of a dead button,
//      no hydration mismatch, and a blanked-out or deleted row degrades to
//      the last-deployed URL rather than to href="".
//
// Usage:
//   const links = useSiteLinks({ mcexpenses_form: MCEXPENSES_FORM_URL });
//   <a href={links.mcexpenses_form}>...</a>

import { useEffect, useMemo, useState } from 'react';
import { supabase } from './supabase_db';

const TABLE = 'site_links';

let cache = null;      // { key: url } once loaded
let inFlight = null;   // shared Promise so N mounts in one tick share one fetch

function fetchLinks() {
    if (cache) return Promise.resolve(cache);
    if (inFlight) return inFlight;

    inFlight = (async () => {
        const { data, error } = await supabase
            .from(TABLE)
            .select('key,url')
            .order('sort_order', { ascending: true });

        if (error) {
            // Don't cache a failure: every call site already has a working
            // fallback, and clearing inFlight lets a later mount retry.
            // eslint-disable-next-line no-console
            console.warn(`Supabase fetch ${TABLE} failed:`, error.message);
            inFlight = null;
            return {};
        }

        const map = {};
        for (const row of data || []) {
            if (row.key && row.url) map[row.key] = row.url;
        }
        cache = map;
        return map;
    })();

    return inFlight;
}

function resolve(defaults, map) {
    const out = {};
    for (const k of Object.keys(defaults)) out[k] = (map && map[k]) || defaults[k];
    return out;
}

/**
 * Resolve several links at once.
 *
 * @param {Object} defaults  { key: hardcodedFallbackUrl }
 * @returns {Object}         { key: resolvedUrl } - fallbacks until the DB loads
 */
export function useSiteLinks(defaults) {
    // Callers pass an object literal, whose identity changes every render.
    // Depending on it directly would loop forever, so depend on the key list
    // instead. Safe because every call site's fallbacks are module constants.
    const keys = Object.keys(defaults).sort().join('|');

    const [links, setLinks] = useState(() => resolve(defaults, cache));

    useEffect(() => {
        let cancelled = false;
        fetchLinks().then((map) => {
            if (cancelled) return;
            setLinks((prev) => {
                const next = resolve(defaults, map);
                // Bail out when the DB agrees with the fallbacks (the normal
                // case). Keeping the object identity stable stops memoised
                // children from re-rendering for nothing - notably the
                // FullCalendar grid, which refetches from Google and flickers
                // whenever calendarId changes.
                const same = Object.keys(next).every((k) => next[k] === prev[k]);
                return same ? prev : next;
            });
        });
        return () => { cancelled = true; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keys]);

    return links;
}

/** Single-key convenience wrapper around useSiteLinks. */
export function useSiteLink(key, fallback) {
    const defaults = useMemo(() => ({ [key]: fallback }), [key, fallback]);
    return useSiteLinks(defaults)[key];
}

/**
 * Google Forms only render chrome-free inside an <iframe> when the URL
 * carries ?embedded=true. Editors paste whatever Google's share dialog hands
 * them, so normalise here instead of trusting the stored value.
 */
export function asEmbeddedForm(url) {
    if (!url || url.indexOf('embedded=true') !== -1) return url;
    return url + (url.indexOf('?') !== -1 ? '&' : '?') + 'embedded=true';
}
