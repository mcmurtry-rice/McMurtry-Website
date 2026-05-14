// lib/googleSheets.js
//
// Utility for reading published Google Sheets as CSV.
//
// The McMurtry website pulls live roster data (committees, court, McMinistry,
// PAAs, Academic Fellows, affinity groups) from a single published Google
// Spreadsheet. Each page reads a different tab of that spreadsheet via its
// `gid` (the numeric tab identifier in the sheet's URL).
//
// This file provides three things:
//   1. `publishedId` — the long ID of the published spreadsheet (single source
//      of truth; was previously duplicated across 6 components).
//   2. `sheetGid(name)` — look up a tab's gid by friendly name (committees,
//      court, mcministry, paas, fellows, affinityGroups). Configured in
//      `lib/sheets.config.json`.
//   3. `fetchSheetCSV(gid)` — fetch a tab as raw CSV text. Always cache-busts.
//   4. `parseCSV(text)` — turn CSV text into a 2D array of trimmed strings.
//      Handles quoted fields with embedded commas.
//
// Each consuming component still owns its own row->object transform, because
// the column layout per sheet is bespoke. See `lib/googleSheets.README.md`
// for full docs.

import sheetsConfig from './sheets.config.json';

export const publishedId = sheetsConfig.publishedId;

export const sheetGid = (name) => {
    const gid = sheetsConfig.sheets[name];
    if (!gid) {
        throw new Error(`Unknown sheet name: "${name}". Add it to lib/sheets.config.json.`);
    }
    return gid;
};

const buildSheetUrl = (gid) => {
    const cacheBuster = Date.now();
    return `https://docs.google.com/spreadsheets/d/e/${publishedId}/pub?gid=${gid}&single=true&output=csv&_=${cacheBuster}`;
};

export async function fetchSheetCSV(gid) {
    const response = await fetch(buildSheetUrl(gid));
    return response.text();
}

// Parse CSV text into a 2D array. Each line becomes an array of trimmed cell
// strings. Quoted fields with embedded commas are handled (e.g. `"foo, bar"`
// stays as one cell). Quote escaping inside fields is NOT handled — Google's
// CSV export does not produce escaped quotes for the data shapes we use.
export function parseCSV(csvText) {
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
