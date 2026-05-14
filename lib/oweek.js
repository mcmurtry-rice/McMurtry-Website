// lib/oweek.js — O-Week year-config loader.
//
// All year-specific O-Week content (theme, coords, groups, PDF, carousel)
// lives in JSON files under `static/oweek/current/`. This module reads those
// files at build time and exposes them to the React components.
//
// To roll the site to a new year:
//   1. Copy `static/oweek/current/` to `static/oweek/OLD_O_WEEKS/<prev-year>/`.
//   2. Replace files in `static/oweek/current/` with the new year's content.
//   3. Rebuild & deploy. No JavaScript changes needed.
//
// See `static/oweek/current/README.md` for the JSON schema.

import config from '../static/oweek/current/config.json';
import coordinatorsData from '../static/oweek/current/coordinators.json';
import groupsData from '../static/oweek/current/groups.json';
import theme from '../static/oweek/current/theme.json';

// Image / asset paths in the JSON files are relative to `static/oweek/current/`.
// Components render these via <Image src={...} />, where the browser resolves
// the URL relative to the page route (e.g. `/oweek/coords`). All O-Week pages
// live one directory deep under `/oweek/`, so a `../../../static/oweek/current/...`
// prefix resolves correctly to `/static/oweek/current/...`.
const STATIC_PREFIX = '../../../static/oweek/current/';

export const oweekImage = (relPath) => `${STATIC_PREFIX}${relPath}`;

export const oweekConfig = config;
export const oweekCoordinators = coordinatorsData.coordinators;
export const oweekLeadership = coordinatorsData.leadership;
export const oweekGroups = groupsData.oweek_groups;
export const oweekTheme = theme;

// Parse "YYYY-MM-DD" into a JS Date (month is zero-indexed in Date).
export const oweekMoveInDate = (() => {
    const [y, m, d] = config.moveInDate.split('-').map(Number);
    return new Date(y, m - 1, d);
})();

export const oweekPdfPath = oweekImage(config.pdfFilename);
export const oweekPdfDownloadName = config.pdfDownloadName;
