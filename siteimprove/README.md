# Siteimprove issue fetcher

Local script that pulls every Siteimprove finding for `mcmurtry.rice.edu`
(accessibility, QA, PDFs, SEO) into JSON files under `siteimprove/data/`.
Designed so issues can be reviewed and fixed offline rather than copy-pasting
from the Siteimprove UI.

## One-time setup

### 1. Generate a Siteimprove API key

You need to be an Account Owner or Administrator on the McMurtry/Rice
Siteimprove account.

1. Log in to Siteimprove.
2. Go to **Settings → Integrations → API → API Keys**.
3. Click **Create API Key**.
4. Give it a description (e.g. `mcmurtry-website fetcher`) and select your
   user.
5. Copy the generated key immediately — it's only shown once.

Reference: <https://help.siteimprove.com/support/solutions/articles/80000448206-how-to-connect-to-the-siteimprove-api>

### 2. Configure local credentials

```bash
cp siteimprove/.env.example siteimprove/.env
```

Edit `siteimprove/.env` and fill in:

- `SITEIMPROVE_USERNAME` — the email of the user the key is tied to
- `SITEIMPROVE_API_KEY` — the key from step 1

`siteimprove/.env` and `siteimprove/data/` are both gitignored, so credentials
and issue snapshots never get committed.

## Run

Requires Node 18+ (uses the built-in `fetch`).

```bash
npm run siteimprove:fetch
```

The script writes a file per category to `siteimprove/data/`, plus a
`_summary.json` with counts and any errors. Affected-page lists for each
accessibility issue go under `siteimprove/data/accessibility-issue-pages/`.

## What gets pulled

| File | Source |
| --- | --- |
| `accessibility-summary.json` | `/sites/{id}/accessibility/overview/summary` |
| `accessibility-issues.json` | `/sites/{id}/accessibility/issues` |
| `accessibility-pages.json` | `/sites/{id}/accessibility/pages` |
| `accessibility-issue-pages/*.json` | per-issue `/accessibility/issues/{sc}/{check_id}/pages` |
| `accessibility-pdf-validation.json` | `/sites/{id}/accessibility/validation/pdf` |
| `accessibility-html-validation.json` | `/sites/{id}/accessibility/validation/html` |
| `accessibility-css-validation.json` | `/sites/{id}/accessibility/validation/css` |
| `qa-broken-links.json` | `/sites/{id}/quality_assurance/links/broken_links` |
| `qa-broken-links-in-documents.json` | `/sites/{id}/quality_assurance/links/broken_links_in_documents` |
| `qa-pages-with-broken-links.json` | `/sites/{id}/quality_assurance/links/pages_with_broken_links` |
| `qa-documents-with-broken-links.json` | `/sites/{id}/quality_assurance/links/documents_with_broken_links` |
| `qa-misspellings.json` | `/sites/{id}/quality_assurance/spelling/misspellings` |
| `qa-potential-misspellings.json` | `/sites/{id}/quality_assurance/spelling/potential_misspellings` |
| `qa-words-to-review.json` | `/sites/{id}/quality_assurance/spelling/words_to_review` |
| `seo-summary.json` | `/sites/{id}/seo/overview/summary` |
| `seo-issues.json` | `/sites/{id}/seo/issues` |
| `seo-pages.json` | `/sites/{id}/seo/pages` |

## Notes

- The script is read-only — it never mutates anything in Siteimprove.
- Re-run any time to refresh the snapshot; old JSON files are overwritten.
- If your account lives in the EU region, set `SITEIMPROVE_REGION=eu`.
- If the site host doesn't resolve automatically, the script prints all
  sites your key can see — copy the right ID into `SITEIMPROVE_SITE_ID`.

---

# Fallback: dashboard scraper (no API key needed)

If your Siteimprove plan doesn't grant API access, use the Playwright-based
scraper to pull data straight from the dashboard UI by attaching to a Chrome
instance you're already logged into.

## Prerequisites

- Chrome launched with `--remote-debugging-port=9222`. On Windows:

  ```powershell
  & "C:\Program Files\Google\Chrome\Application\chrome.exe" `
      --remote-debugging-port=9222 `
      --user-data-dir="$env:TEMP\siteimprove-chrome"
  ```

  (Using a dedicated `--user-data-dir` keeps your normal Chrome profile
  separate.)
- Log in to Siteimprove via Rice SSO in that Chrome window.
- Open the dashboard you want to scrape (e.g. the McMurtry Content Author
  Accessibility dashboard) in a tab and let it finish loading.

## Run

```bash
npm run siteimprove:scrape
```

The script:

1. Connects to Chrome over CDP at `http://localhost:9222`.
2. Finds the open Siteimprove tab.
3. Walks every table on the page, bumps its page size to 200 (clicking the
   `Confirm` button in the popover), then paginates if more rows remain.
4. Writes one JSON file per section to `siteimprove/data/dashboard/` plus a
   `_summary.json`.

Each row preserves both the cell text and any `<a href>` values, so we can
recover the broken-link URLs, affected-page URLs, etc., even though the
dashboard doesn't expose them as a structured field.

To scrape a different Siteimprove report later, just navigate that Chrome
tab to the new dashboard URL and re-run `npm run siteimprove:scrape` — the
script keys on whatever tab is open, not a hardcoded URL.
