// scripts/verify-migration.js
// Quick read of each migrated table to confirm row counts. Uses the
// anon key (same as the browser) so this also verifies the RLS read
// policies are working.

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.local') });

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { auth: { persistSession: false } }
);

const tables = [
    'mcteam', 'mcministry', 'mccourt', 'affinity_groups',
    'associates', 'paas', 'rhas', 'head_caregivers', 'smr',
    'committees', 'committee_members', 'academic_fellows',
];

(async () => {
    for (const t of tables) {
        const { data, error, count } = await supabase
            .from(t)
            .select('*', { count: 'exact', head: false })
            .order('sort_order', { ascending: true })
            .limit(2);
        if (error) {
            console.log(`  [${t}] ERROR: ${error.message}`);
            continue;
        }
        console.log(`  [${t}] ${count} rows  (sample: ${JSON.stringify(data[0] || null).slice(0, 120)}…)`);
    }
})();
