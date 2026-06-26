// scripts/migrate-to-supabase.js
//
// One-time migration: copy every piece of people data into Supabase
// without modifying any of it. Run from the project root:
//
//   node scripts/migrate-to-supabase.js
//
// Requires .env.local with:
//   NEXT_PUBLIC_SUPABASE_URL=...
//   SUPABASE_SERVICE_ROLE_KEY=...
//
// The service role key bypasses RLS so we can insert. NEVER ship this
// key to the browser; only this script (run locally) uses it.
//
// What it does, per table:
//   1. TRUNCATEs the target table (idempotent — safe to re-run).
//   2. Reads the original source (JSON file or live published Sheet CSV)
//      with the exact same transformation logic the live components use.
//   3. Inserts rows preserving order via sort_order.
//
// NOTHING is reworded, reformatted, or "cleaned." The values that go
// into Supabase are byte-for-byte the values the live site currently
// renders.

const path = require('path');
const fs   = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env.local') });

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
    console.error(
        '\nMissing env vars. Add NEXT_PUBLIC_SUPABASE_URL and ' +
        'SUPABASE_SERVICE_ROLE_KEY to .env.local before running.\n'
    );
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: { persistSession: false },
});

// ============================================================
// CSV parsing — copied verbatim from lib/googleSheets.js so the
// migration sees rows exactly the way the live components do.
// ============================================================

const SHEETS_CONFIG = require(path.resolve(__dirname, '..', 'lib', 'sheets.config.json'));

async function fetchSheetCSV(gid) {
    const cacheBuster = Date.now();
    const url = `https://docs.google.com/spreadsheets/d/e/${SHEETS_CONFIG.publishedId}` +
                `/pub?gid=${gid}&single=true&output=csv&_=${cacheBuster}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Sheet fetch failed (${gid}): ${res.status}`);
    return res.text();
}

function parseCSV(csvText) {
    return csvText.split('\n').map(parseCSVLine);
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result;
}

const sheetGid = (name) => SHEETS_CONFIG.sheets[name];

// ============================================================
// Helpers
// ============================================================

const readJSON = (relPath) =>
    JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', relPath), 'utf8'));

// Supabase doesn't allow plain TRUNCATE via REST; delete-all is the
// equivalent. We filter on id >= 0 to satisfy supabase-js requiring a
// filter on .delete().
async function clearTable(name) {
    const { error } = await supabase.from(name).delete().gte('id', 0);
    if (error) throw new Error(`Failed to clear ${name}: ${error.message}`);
}

async function insertRows(table, rows) {
    if (rows.length === 0) {
        console.log(`  [${table}] no rows`);
        return;
    }
    // Insert in chunks of 200 to stay well under Supabase's payload limits.
    for (let i = 0; i < rows.length; i += 200) {
        const chunk = rows.slice(i, i + 200);
        const { error } = await supabase.from(table).insert(chunk);
        if (error) throw new Error(`Insert into ${table} failed: ${error.message}`);
    }
    console.log(`  [${table}] inserted ${rows.length} rows`);
}

// ============================================================
// Per-table migrations
// ============================================================

// ----- mcteam (from data/people/mcteam.json) -----
// The College Coordinator row used to be followed by a hardcoded list
// of "things you can do in my office" in the React component. We move
// that list into the body array (one bullet per element) so all the
// data lives in Supabase and the component stays generic.
const COORDINATOR_OFFICE_LIST = [
    'Pick up mail and packages',
    'Buy stamps and get envelopes',
    'Catch up with Jackie!',
    'Borrow an extra room key',
    'Do homework',
    'Use the staplers, packing tape, scissors, shredder, etc.',
    'Take a study break',
    'Relax with other Murts',
    'Solve puzzles',
];

async function migrateMcteam() {
    const data = readJSON('data/people/mcteam.json');
    const rows = (data.mcteam_positions || []).map((p, i) => {
        let body = Array.isArray(p.body) ? [...p.body] : [];
        if (p.position === 'College Coordinator') {
            // Tag each list item with a leading bullet so the component
            // can render them as a list without an extra schema column.
            body = body.concat(COORDINATOR_OFFICE_LIST.map(item => `• ${item}`));
        }
        return {
            position:   p.position,
            names:      p.names,
            body,
            image:      p.image || null,
            sort_order: i,
        };
    });
    await clearTable('mcteam');
    await insertRows('mcteam', rows);
}

// ----- mcministry (from Sheet gid 405858748) -----
// Replicates components/people/mcministry/mcministry.js transformCSVData.
async function migrateMcministry() {
    const csv   = await fetchSheetCSV(sheetGid('mcministry'));
    const lines = parseCSV(csv);

    const executive_council = [];
    const mccabinet         = [];
    const peoples_council   = [];

    const headerRow = lines[1] || [];
    const row1      = lines[0] || [];

    let mcCabinetHeaderCol = -1;
    let pcHeaderCol = -1;
    for (let i = 0; i < row1.length; i++) {
        if (row1[i] && row1[i].includes('McCabinet'))         mcCabinetHeaderCol = i;
        if (row1[i] && row1[i].includes("People's Council"))  pcHeaderCol = i;
    }

    let pcActualStartCol = pcHeaderCol;
    if (mcCabinetHeaderCol !== -1) {
        for (let col = mcCabinetHeaderCol + 3; col < headerRow.length; col++) {
            const h = headerRow[col];
            if (h && h !== 'Email' && h !== 'Year') { pcActualStartCol = col; break; }
        }
    }

    const ecPositions = [];
    const mcCabPositions = [];
    const pcPositions = [];
    for (let col = 0; col < headerRow.length; col++) {
        const header = headerRow[col];
        if (header && header !== 'Email' && header !== 'Year') {
            const info = { col, name: header.replace(/\s*\([^)]*\)\s*/g, '').trim() };
            if (col >= pcActualStartCol)                                  pcPositions.push(info);
            else if (mcCabinetHeaderCol !== -1 && col >= mcCabinetHeaderCol) mcCabPositions.push(info);
            else                                                          ecPositions.push(info);
        }
    }

    const collect = (positions, bucket) => {
        for (const pos of positions) {
            for (let r = 2; r < lines.length; r++) {
                const row  = lines[r];
                const name = (row[pos.col] || '').trim();
                if (name) {
                    bucket.push({
                        position: pos.name,
                        name,
                        email: (row[pos.col + 1] || '').trim(),
                        year:  (row[pos.col + 2] || '').trim(),
                    });
                }
            }
        }
    };
    collect(ecPositions,   executive_council);
    collect(mcCabPositions, mccabinet);
    collect(pcPositions,   peoples_council);

    const rows = [
        ...executive_council.map((r, i) => ({ tab: 'Executive Council', position: r.position, name: r.name, email: r.email, year: r.year, sort_order: i })),
        ...mccabinet.map((r, i)         => ({ tab: 'McCabinet',         position: r.position, name: r.name, email: r.email, year: r.year, sort_order: i })),
        ...peoples_council.map((r, i)   => ({ tab: "People's Council",  position: r.position, name: r.name, email: r.email, year: r.year, sort_order: i })),
    ];

    await clearTable('mcministry');
    await insertRows('mcministry', rows);
}

// ----- mccourt (from Sheet gid 1699321769) -----
// Replicates components/people/court/court.js transformCSVData.
async function migrateMccourt() {
    const csv   = await fetchSheetCSV(sheetGid('court'));
    const lines = parseCSV(csv);

    const rows = [];
    let order = 0;

    // Chief Justices: cols 0=name, 1=email, 2=room, 3=phone
    for (let r = 2; r < lines.length; r++) {
        const name = (lines[r][0] || '').trim();
        if (name) {
            rows.push({
                position:   'Chief Justice',
                name,
                email:      (lines[r][1] || '').trim(),
                room:       (lines[r][2] || '').trim(),
                phone:      (lines[r][3] || '').trim(),
                sort_order: order++,
            });
        }
    }

    // Associate Justices: cols 4=name, 5=email, 6=room
    for (let r = 2; r < lines.length; r++) {
        const name = (lines[r][4] || '').trim();
        if (name) {
            rows.push({
                position:   'Associate Justice',
                name,
                email:      (lines[r][5] || '').trim(),
                room:       (lines[r][6] || '').trim(),
                phone:      null,
                sort_order: order++,
            });
        }
    }

    await clearTable('mccourt');
    await insertRows('mccourt', rows);
}

// ----- affinity_groups (from Sheet gid 521639587) -----
// Replicates components/people/mcmurtryaffinitygroups/... transformCSVData.
async function migrateAffinityGroups() {
    const csv   = await fetchSheetCSV(sheetGid('affinityGroups'));
    const lines = parseCSV(csv);

    const headerRow = lines[1] || [];

    const groupTitleMapping = {
        'Black Caucus': 'Black Caucus',
        'East Asian':   'East Asian',
        'FGLI':         'First Gen / Low Income',
        'Jewish':       'Jewish',
        'Latine':       'Latine',
        'LGBTQ+':       'LGBTQ+',
        'South Asian':  'South Asian',
    };

    const groups = {};
    for (let col = 0; col < headerRow.length; col++) {
        const header = headerRow[col];
        if (header && header !== 'Email') {
            const title = groupTitleMapping[header] || header;
            groups[col] = { title, members: [] };
        }
    }

    for (let r = 2; r < lines.length; r++) {
        const row = lines[r];
        for (const [colStr, group] of Object.entries(groups)) {
            const col = parseInt(colStr);
            const name = (row[col] || '').trim();
            if (name) {
                const email = (row[col + 1] || '').trim();
                group.members.push({ name, email });
            }
        }
    }

    const groupOrder = [
        'Black Caucus', 'East Asian', 'First Gen / Low Income',
        'Jewish', 'Latine', 'LGBTQ+', 'South Asian',
    ];
    const ordered = Object.values(groups)
        .filter(g => g.members.length > 0)
        .sort((a, b) => {
            const aIdx = groupOrder.indexOf(a.title);
            const bIdx = groupOrder.indexOf(b.title);
            if (aIdx === -1 && bIdx === -1) return a.title.localeCompare(b.title);
            if (aIdx === -1) return 1;
            if (bIdx === -1) return -1;
            return aIdx - bIdx;
        });

    const rows = [];
    let order = 0;
    for (const group of ordered) {
        for (const member of group.members) {
            rows.push({
                title:      group.title,
                name:       member.name,
                email:      member.email || null,
                sort_order: order++,
            });
        }
    }

    await clearTable('affinity_groups');
    await insertRows('affinity_groups', rows);
}

// ----- associates (from data/people/associates.json) -----
async function migrateAssociates() {
    const data = readJSON('data/people/associates.json');
    const rows = (data.associates || []).map((a, i) => ({
        name:       a.name,
        career:     a.career || null,
        bio:        a.bio || null,
        movie_tv:   a.movie_tv || null,
        hobbies:    a.hobbies || null,
        fact:       a.fact || null,
        image:      a.image || null,
        sort_order: i,
    }));
    await clearTable('associates');
    await insertRows('associates', rows);
}

// ----- paas (from Sheet gid 519315703) -----
async function migratePaas() {
    const csv   = await fetchSheetCSV(sheetGid('paas'));
    const lines = parseCSV(csv);

    const head_paas = [];
    const o_week_paas = [];
    const year_long_paas = [];

    for (let r = 1; r < lines.length; r++) {
        const row = lines[r];

        const headName = (row[0] || '').trim();
        if (headName) {
            head_paas.push({
                name: headName,
                major: (row[1] || '').trim(),
                minor: (row[2] || '').trim(),
                pre_prof_path: (row[3] || '').trim(),
                email: (row[4] || '').trim(),
                year:  (row[5] || '').trim(),
            });
        }

        const oweekName = (row[6] || '').trim();
        if (oweekName) {
            o_week_paas.push({
                name: oweekName,
                major: (row[7] || '').trim(),
                minor: (row[8] || '').trim(),
                pre_prof_path: (row[9] || '').trim(),
                email: (row[10] || '').trim(),
                year:  (row[11] || '').trim(),
            });
        }

        const ylName = (row[12] || '').trim();
        if (ylName) {
            year_long_paas.push({
                name: ylName,
                major: (row[13] || '').trim(),
                minor: (row[14] || '').trim(),
                pre_prof_path: (row[15] || '').trim(),
                email: (row[16] || '').trim(),
                year:  (row[17] || '').trim(),
            });
        }
    }

    const rows = [
        ...head_paas.map((r, i)      => ({ tab: 'Head PAAs',      ...r, sort_order: i })),
        ...o_week_paas.map((r, i)    => ({ tab: 'O-Week PAAs',    ...r, sort_order: i })),
        ...year_long_paas.map((r, i) => ({ tab: 'Year Long PAAs', ...r, sort_order: i })),
    ];

    await clearTable('paas');
    await insertRows('paas', rows);
}

// ----- rhas (from data/people/wellbeing.json: head_RHAs + RHAs) -----
async function migrateRhas() {
    const data = readJSON('data/people/wellbeing.json');

    const rows = [];
    let order = 0;

    for (const m of ((data.head_RHAs && data.head_RHAs.members) || [])) {
        rows.push({
            tab:        'Head RHAs',
            name:       m.name,
            pronouns:   m.pronouns || null,
            bio:        m.bio || null,
            phone:      m.phone || null,
            email:      m.email || null,
            photo:      m.photo || null,
            sort_order: order++,
        });
    }
    for (const m of ((data.RHAs && data.RHAs.members) || [])) {
        rows.push({
            tab:        'RHAs',
            name:       m.name,
            pronouns:   m.pronouns || null,
            bio:        m.bio || null,
            phone:      m.phone || null,
            email:      m.email || null,
            photo:      m.photo || null,
            sort_order: order++,
        });
    }

    await clearTable('rhas');
    await insertRows('rhas', rows);
}

// ----- head_caregivers (from data/people/wellbeing.json: head_caregivers) -----
async function migrateHeadCaregivers() {
    const data = readJSON('data/people/wellbeing.json');
    const members = (data.head_caregivers && data.head_caregivers.members) || [];
    const rows = members.map((m, i) => ({
        name:        m.name,
        email:       m.email || null,
        description: m.description || null,
        sort_order:  i,
    }));
    await clearTable('head_caregivers');
    await insertRows('head_caregivers', rows);
}

// ----- academic_fellows (from Sheet gid 519315703, fellows section) -----
// Replicates components/people/fellows/fellows.js transformCSVData.
async function migrateAcademicFellows() {
    const csv = await fetchSheetCSV(sheetGid('fellows'));
    const lines = parseCSV(csv);

    const headerRow = lines[0] || [];
    let fellowsStartCol = -1;
    for (let i = 0; i < headerRow.length; i++) {
        const header = (headerRow[i] || '').toLowerCase().trim();
        if (header.includes('academic fellow') || header.includes('fellows')) {
            fellowsStartCol = i;
            break;
        }
    }

    const headFellows = [];
    const fellows = [];

    if (fellowsStartCol < 0) {
        console.log('  [academic_fellows] header column not found, skipping');
    } else {
        for (let rowIdx = 1; rowIdx < lines.length; rowIdx++) {
            const row = lines[rowIdx];
            let name = (row[fellowsStartCol] || '').trim();
            if (!name) continue;
            const nameLower = name.toLowerCase();
            if (['name', 'email', 'major', 'course', 'track'].includes(nameLower)) continue;

            const isHead = name.includes('*');
            name = name.replace(/\*/g, '').trim();

            const email = (row[fellowsStartCol + 1] || '').trim();
            const major = (row[fellowsStartCol + 2] || '').trim();
            const subjects = (row[fellowsStartCol + 3] || '').trim();
            const preProf = (row[fellowsStartCol + 4] || '').trim();

            // Skip "header label" values that occasionally end up as data.
            const emailClean    = email.toLowerCase() === 'email' ? '' : email;
            const majorClean    = major.toLowerCase() === 'major' ? '' : major;
            const subjectsClean = subjects.toLowerCase() === 'course' ? '' : subjects;
            const trackClean    = preProf.toLowerCase() === 'track' ? '' : preProf;

            const person = {
                name,
                email:         emailClean    || null,
                major:         majorClean    || null,
                subjects:      subjectsClean || null,
                pre_prof_path: trackClean    || null,
            };

            (isHead ? headFellows : fellows).push(person);
        }
    }

    const rows = [
        ...headFellows.map((p, i) => ({ tab: 'Head Academic Fellows', ...p, sort_order: i })),
        ...fellows.map((p, i)     => ({ tab: 'Academic Fellows',      ...p, sort_order: i })),
    ];

    await clearTable('academic_fellows');
    await insertRows('academic_fellows', rows);
}

// ----- committees -----
// Combines data/people/committees.json (division/name/description/image
// structure) with the live Sheet gid 1832339805 (heads + members).
// Logic mirrors components/people/committees/committees.js transformCSVData
// so the same names line up between JSON and Sheet.
async function migrateCommittees() {
    const data = readJSON('data/people/committees.json');

    // ----- Insert committees themselves -----
    const committeeRows = [];
    let order = 0;
    for (const div of (data.committee_divisions || [])) {
        for (const c of (div.committees || [])) {
            committeeRows.push({
                division:    div.division,
                name:        c.name,
                description: c.description || null,
                image:       c.image || null,
                sort_order:  order++,
            });
        }
    }
    await clearTable('committees');
    await insertRows('committees', committeeRows);

    // ----- Pull members from the Sheet -----
    const committeeNameMapping = {
        'Alumni and Family': 'Alumni',
        'Murtch':             'Murtchandise',
        'MIS':                'McMurtry Innovation Space (MIS)',
        'Website and App':    'Website',
        'Externals Socials':  'External Socials',
        'Internals Socials':  'Internal Socials',
        'Charity':            'Charity and Philanthropy',
    };

    const csv   = await fetchSheetCSV(sheetGid('committees'));
    const lines = parseCSV(csv);
    const committeeRow = lines[1] || [];

    const committees = {};
    for (let col = 0; col < committeeRow.length; col++) {
        const name = committeeRow[col];
        if (name && name !== 'Email') {
            let cleanName = name.replace(/[^\w\s()]/g, '').trim();
            if (committeeNameMapping[cleanName]) cleanName = committeeNameMapping[cleanName];
            const nextCol = committeeRow[col + 1];
            const hasEmailColumn = nextCol === 'Email' || nextCol === '' || nextCol === undefined;
            committees[col] = {
                name: cleanName,
                heads: [],
                members: [],
                emailCol: hasEmailColumn ? col + 1 : null,
            };
        }
    }

    for (let rowIdx = 2; rowIdx < lines.length; rowIdx++) {
        const row = lines[rowIdx];
        for (const [colStr, committee] of Object.entries(committees)) {
            const col = parseInt(colStr);
            const memberName = row[col];
            if (memberName) {
                const email = committee.emailCol !== null
                    ? (row[committee.emailCol] || '').trim()
                    : '';
                if (memberName.trim().endsWith('*')) {
                    const cleanName = memberName.trim().replace(/\*$/, '').trim();
                    committee.heads.push({ name: cleanName, email });
                } else {
                    committee.members.push({ name: memberName.trim(), email });
                }
            }
        }
    }

    const memberRows = [];
    let mOrder = 0;
    for (const c of Object.values(committees)) {
        for (const h of c.heads) {
            memberRows.push({
                committee_name: c.name,
                role:           'head',
                name:           h.name,
                email:          h.email || null,
                sort_order:     mOrder++,
            });
        }
        for (const m of c.members) {
            memberRows.push({
                committee_name: c.name,
                role:           'member',
                name:           m.name,
                email:          m.email || null,
                sort_order:     mOrder++,
            });
        }
    }

    await clearTable('committee_members');
    await insertRows('committee_members', memberRows);
}

// ----- smr (from data/people/smr.json) -----
async function migrateSmr() {
    const data = readJSON('data/people/smr.json');
    const rows = (data.smr || []).map((p, i) => ({
        name:       p.name,
        email:      p.email || null,
        image:      p.image || null,
        body:       p.body || null,
        sort_order: i,
    }));
    await clearTable('smr');
    await insertRows('smr', rows);
}

// ============================================================
// Runner
// ============================================================

async function main() {
    console.log('Migrating people data → Supabase…');
    console.log(`Project: ${SUPABASE_URL}\n`);

    const steps = [
        ['mcteam',          migrateMcteam],
        ['mcministry',      migrateMcministry],
        ['mccourt',         migrateMccourt],
        ['affinity_groups', migrateAffinityGroups],
        ['associates',      migrateAssociates],
        ['paas',            migratePaas],
        ['rhas',            migrateRhas],
        ['head_caregivers', migrateHeadCaregivers],
        ['smr',                migrateSmr],
        ['committees',         migrateCommittees],
        ['academic_fellows',   migrateAcademicFellows],
    ];

    for (const [label, fn] of steps) {
        console.log(`→ ${label}`);
        try {
            await fn();
        } catch (err) {
            console.error(`  ✗ ${label} failed:`, err.message);
            process.exit(1);
        }
    }

    console.log('\nDone.');
}

main();
