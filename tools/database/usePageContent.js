// tools/database/usePageContent.js
//
// Lookup for public.page_content - long-form page copy (HTML) editable in
// the Supabase Table Editor. See page_content_setup.sql.
//
// Like useSiteLinks, a fallback is required: it renders on first paint
// (and in the statically exported HTML) and is only replaced once the row
// loads, so a missing table or blank row shows the last-deployed copy.
//
// Usage:
//   const intro = usePageContent('affinity_groups_intro', INTRO_FALLBACK);
//   <div dangerouslySetInnerHTML={{ __html: intro }} />

import { useEffect, useState } from 'react';
import { supabase } from './supabase_db';

export function usePageContent(key, fallback) {
    const [content, setContent] = useState(fallback);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const { data, error } = await supabase
                .from('page_content')
                .select('content')
                .eq('key', key)
                .maybeSingle();

            if (cancelled) return;
            if (error) {
                console.warn(`Supabase fetch page_content/${key} failed:`, error.message);
            } else if (data && data.content) {
                setContent(data.content);
            }
        })();
        return () => { cancelled = true; };
    }, [key]);

    return content;
}
