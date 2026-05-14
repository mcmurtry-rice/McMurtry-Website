# `lib/googleSheets.js` — Live Google Sheets data utility

This utility lets the McMurtry website pull live roster data (committees, court members, McMinistry officers, PAAs, Academic Fellows, affinity groups) from a single Google Spreadsheet without redeploying the site. The College Coordinator updates the sheet; the site picks up changes within minutes.

## TL;DR

```js
import { fetchSheetCSV, parseCSV, sheetGid } from '../../../lib/googleSheets';

async fetchData() {
  const csv = await fetchSheetCSV(sheetGid('committees'));
  const rows = parseCSV(csv);
  // ... your own transform from rows -> domain objects
}
```

That's the whole API. The rest of this README explains why it works, how to set up a new sheet, and how to debug when it doesn't.

---

## Why this exists

The McMurtry site is a fully static export (Next.js `next export` → `docs/` → GitHub Pages). There's no backend, no database, no admin UI. But the roster of who's on each committee changes constantly — far too often to redeploy.

The trick: Google Sheets has a built-in feature called **"Publish to the web"** that exposes a single sheet (or tab) as CSV at a stable URL. The site fetches that CSV at page load and renders it.

Before this utility existed, the same ~25 lines of fetch-and-CSV-parse boilerplate were copy-pasted across six different components, each with its own copy of:

- The same long `publishedId` string
- The same URL-construction code
- The same hand-rolled CSV parser

If the published sheet ever rotated (e.g. someone re-publishes from a new Google Account), six files had to change. If a CSV parsing edge case had to be fixed, six files had to change.

This utility centralizes that into one place.

---

## How the "publish as CSV" pattern works

When a Google Sheet is published to the web, Google assigns the WHOLE SPREADSHEET a single long ID (the `publishedId`). Each individual TAB inside that spreadsheet has its own numeric `gid` (visible in the sheet's URL while editing — `...#gid=1832339805`).

To fetch one tab as CSV, you GET this URL:

```
https://docs.google.com/spreadsheets/d/e/{publishedId}/pub?gid={gid}&single=true&output=csv
```

That's it. No authentication, no API key. The data is fetched directly from the user's browser, so there are no CORS issues.

Notes:
- The published version is a **cached snapshot**. Google refreshes it on its own schedule — typically within ~5 minutes of an edit, sometimes faster.
- The site adds a `&_=<timestamp>` cache-buster query string so the browser never serves a stale response from its own cache. The Google-side cache is unaffected by this — only the browser cache is.
- The CSV is public to anyone who has the URL. Don't put anything sensitive in published sheets.

---

## API reference

All exports live in [`lib/googleSheets.js`](./googleSheets.js). Configuration lives in [`lib/sheets.config.json`](./sheets.config.json).

### `publishedId` (string)

The long ID of the spreadsheet being published. Read from `sheets.config.json`. You generally don't need to touch this — it's exported so debugging tools can log it.

### `sheetGid(name)` → string

Look up a tab's `gid` by friendly name. Names are defined in `sheets.config.json` under `sheets`. Throws if the name is unknown.

```js
sheetGid('committees')        // '1832339805'
sheetGid('court')             // '1699321769'
sheetGid('does-not-exist')    // throws Error
```

### `fetchSheetCSV(gid)` → `Promise<string>`

Fetches a tab as raw CSV text. Always cache-busts. Resolves with the response body. Does not catch errors — let your component decide how to handle a failure (the existing pattern is `try { fetch } catch { log + setState({isLoading: false}) }`).

```js
const csv = await fetchSheetCSV(sheetGid('mcministry'));
```

### `parseCSV(csvText)` → `string[][]`

Parse CSV text into a 2D array. Each row is an array of trimmed cell strings. Quoted fields with embedded commas are handled — `"foo, bar"` becomes one cell `foo, bar`.

```js
const lines = parseCSV(csv);
const firstCell = lines[0][0];
```

**Caveat:** quote escaping inside fields is NOT supported. If a cell contains a literal `"`, the parser will get confused. Google's CSV export from the data we use does not produce escaped quotes, so this hasn't been a problem in practice. If it becomes one, replace `parseCSV` with a real CSV library.

---

## Adding a new sheet-backed page

Say you want to add a "Murtchandise Team" page that reads from a new tab.

### Step 1 — Publish the tab

Open the spreadsheet in Google Sheets. **File → Share → Publish to web.**

- "Link" tab → choose the specific tab from the dropdown → **Comma-separated values (.csv)** → click "Publish".
- Copy the resulting URL. It looks like:
  ```
  https://docs.google.com/spreadsheets/d/e/2PACX-...long-id.../pub?gid=99887766&single=true&output=csv
  ```

### Step 2 — Confirm the `publishedId` matches

Check that the `2PACX-...` portion of the URL matches the `publishedId` in `lib/sheets.config.json`. It will if the spreadsheet was already published as a whole — every tab in the same spreadsheet shares one `publishedId`. (If you're publishing a NEW spreadsheet, you'll need to update `publishedId` AND every other sheet entry, since the IDs are per-spreadsheet.)

### Step 3 — Get the `gid`

The `gid=99887766` portion of the URL is the tab's ID. Alternatively, open the tab in the editor — the URL changes to `...#gid=99887766` for the active tab.

### Step 4 — Register it in `sheets.config.json`

```json
{
  "publishedId": "2PACX-...",
  "sheets": {
    "committees": "1832339805",
    "murtchandise": "99887766"   // ← add this line
  }
}
```

Use lowercase camelCase for the key — that's the convention.

### Step 5 — Write the component

```js
import { fetchSheetCSV, parseCSV, sheetGid } from '../../../lib/googleSheets';

class Murtchandise extends React.Component {
  state = { rows: [], isLoading: true };

  async componentDidMount() {
    try {
      const csv = await fetchSheetCSV(sheetGid('murtchandise'));
      const lines = parseCSV(csv);
      // Each line is an array of strings. Transform into your domain shape:
      const rows = lines
        .slice(1)                                  // skip header
        .filter(r => r[0])                         // skip empty rows
        .map(r => ({ name: r[0], email: r[1] })); // bespoke column mapping
      this.setState({ rows, isLoading: false });
    } catch (err) {
      console.warn('Failed to fetch murtchandise data:', err);
      this.setState({ isLoading: false });
    }
  }

  render() {
    // ... render this.state.rows
  }
}
```

That's the whole pattern. The transform from `parseCSV` rows into your domain shape is bespoke per page (because every sheet has a different column layout), so the utility deliberately doesn't try to abstract that.

---

## Troubleshooting

### Page shows "Loading..." forever

Open browser DevTools → Network tab → reload. Look for the request to `docs.google.com/spreadsheets/...`.

- **Status 404 or "redirect to login":** The sheet isn't published. Re-publish via File → Share → Publish to web.
- **Status 200 but empty body:** The tab might be empty, or `gid` is wrong. Verify the `gid` matches the one in the published URL.
- **Request never fires:** Check the browser console for a thrown `Unknown sheet name` error — your `sheetGid('xxx')` argument doesn't match a key in `sheets.config.json`.

### Data shows but is missing recent edits

Google's publish-to-web cache holds for up to ~5 minutes after each edit. There's nothing the site can do about this — only the publisher can. To force an immediate refresh, the sheet owner can go to File → Share → Publish to web → **Stop publishing**, then publish again. This invalidates Google's cache.

### Some rows are missing / split incorrectly

The hand-rolled CSV parser doesn't handle escaped quotes (`""` inside a quoted field). If a cell legitimately contains a `"`, the parser will misread it. Either remove the offending characters from the sheet, or replace `parseCSV` with a real library (e.g. PapaParse).

### CORS error in console

Google's published-CSV endpoint allows cross-origin requests. If you see CORS errors, the request is hitting the wrong URL. Confirm the URL starts with `https://docs.google.com/spreadsheets/d/e/...` (note `/d/e/` — that's the published form). A URL with `/d/<short-id>/` is the editor URL and will fail CORS.

### Sheet schema changed and the page broke silently

This will happen. The transform in your component reads specific column indexes. If a sheet maintainer reorders columns, the transform reads the wrong column and produces garbage — usually without throwing, because the cells still contain strings.

There's no good automatic protection against this. Defensive options:

- Comment the expected column layout above your transform (existing components do this).
- Add a sanity check in the transform: if `headerRow[0] !== 'Expected Header Name'`, log a warning.
- Coordinate with whoever maintains the sheet before changing column order.

---

## Caveats

- **All published sheets are public.** Anyone with the URL can read the CSV. Don't include phone numbers, addresses, or anything else you wouldn't put on a public website. (The current sheets DO include emails and phones — that's intentional because they appear on the rendered page anyway.)
- **No authentication, no rate limits we've hit.** Google does eventually rate-limit if you abuse it, but a few thousand page-loads/day is fine.
- **Static export means the fetch happens client-side** at every page load. If the user's network blocks Google Sheets, the page shows the "Loading..." spinner and then falls back to whatever the component's `isLoading: false, data: []` render path looks like.

---

## Migration notes

This utility was introduced as Stage 2 of the website reorganization (2026-05). The following six components were converted from inline fetch + parse logic to the shared utility:

- [components/people/committees/committees.js](../components/people/committees/committees.js)
- [components/people/court/court.js](../components/people/court/court.js)
- [components/people/mcministry/mcministry.js](../components/people/mcministry/mcministry.js)
- [components/people/paas/paas.js](../components/people/paas/paas.js)
- [components/people/fellows/fellows.js](../components/people/fellows/fellows.js)
- [components/people/mcmurtryaffinitygroups/mcmurtryaffinitygroups.js](../components/people/mcmurtryaffinitygroups/mcmurtryaffinitygroups.js)

Each component kept its own page-specific `transformCSVData()` method (the bespoke column→object mapping). Only the fetch + parse boilerplate was extracted. Total lines saved across the 6 files: ~150.
