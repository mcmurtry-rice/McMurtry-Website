// lib/supabase.js
//
// Browser-side Supabase client. Used by the people pages to read their
// roster data from the public.* tables. Values come from
// .env.local (and are baked into the client bundle at build time by
// next.config.js).
//
// All reads use the anon key + the public read-only RLS policies set up
// in ./schema.sql. The anon key is safe to ship to the browser.

import { createClient } from '@supabase/supabase-js';

const url     = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
    // Fail loudly in dev so a missing env var doesn't silently render empty
    // pages. In production this branch won't fire because next.config.js
    // bakes the values in at build time.
    // eslint-disable-next-line no-console
    console.error(
        'Supabase env vars missing. Expected NEXT_PUBLIC_SUPABASE_URL and ' +
        'NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.'
    );
}

export const supabase = createClient(url || '', anonKey || '', {
    auth: { persistSession: false },
});
