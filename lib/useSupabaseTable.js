// lib/useSupabaseTable.js
//
// Tiny hook: fetch one Supabase table on mount, ordered by sort_order.
// Returns { rows, isLoading, error } so each people page can render a
// loading state without re-implementing the boilerplate.
//
// Usage:
//   const { rows, isLoading } = useSupabaseTable('mcteam');

import { useEffect, useState } from 'react';
import { supabase } from './supabase';

/**
 * Collect distinct values of a given field from a list of rows, preserving
 * the order of first appearance. The rows are assumed to already be sorted
 * (e.g. by sort_order). Useful for deriving tab labels from data.
 */
export function distinctInOrder(rows, field) {
    const seen = new Set();
    const out = [];
    for (const r of rows) {
        const v = r[field];
        if (v && !seen.has(v)) {
            seen.add(v);
            out.push(v);
        }
    }
    return out;
}

export function useSupabaseTable(table, { orderBy = 'sort_order' } = {}) {
    const [rows, setRows]           = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]         = useState(null);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const { data, error } = await supabase
                .from(table)
                .select('*')
                .order(orderBy, { ascending: true });

            if (cancelled) return;
            if (error) {
                console.warn(`Supabase fetch ${table} failed:`, error.message);
                setError(error);
            } else {
                setRows(data || []);
            }
            setIsLoading(false);
        })();
        return () => { cancelled = true; };
    }, [table, orderBy]);

    return { rows, isLoading, error };
}
