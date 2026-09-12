# SEO

Everything that controls how mcmurtry.rice.edu appears in Google (and in link previews) lives in this folder.

| File | What it does |
| --- | --- |
| `pages.js` | Title, description, and structured data for every page. `components/Header` reads it on every page. |
| `generate.js` | Runs on deploy. Writes `sitemap.xml`, `robots.txt`, `social-card.jpg`, and old-URL redirects into `docs/`. |
| `social-card.jpg` | 1200x630 preview image shown when a link is shared (iMessage, GroupMe, Slack, Facebook). |

## What each page gets

- **`<title>`**: `"<page title> | McMurtry College"`. This is the blue link in search results. The homepage is just "McMurtry College at Rice University".
- **Meta description**: the grey text under the link. Aim for 120-160 characters that say what's on the page.
- **Canonical URL**: tells Google the one official address for the page. `/home/index` renders the homepage too, so it points at `/`.
- **Open Graph tags**: title, description, and `social-card.jpg` for link previews.
- **Structured data (JSON-LD)**:
  - The homepage says the site is named "McMurtry College" and belongs to an organization at 1605 Rice Blvd that is part of Rice University. Google uses this for the site name above results.
  - Every other page gets a breadcrumb, e.g. *McMurtry College > O-Week 2026 > Move-In Day*, shown in place of the raw URL.

## Adding a page

1. Create the page under `pages/` as usual.
2. Add an entry to `PAGES` in `pages.js`, keyed by the URL with exact casing:

   ```js
   '/resources/new-thing': {
       title: 'New Thing',
       description: 'One or two sentences about what someone will find on this page.',
   },
   ```

3. Deploy. The new page is added to the sitemap automatically.

If you forget step 2, the page falls back to the generic homepage description. `npm run dev` logs a `[seo] No entry for ...` warning in the browser console, and `generate.js` prints one during deploy.

To remove a page, delete its folder under `pages/` and its entry in `pages.js`.

## Old URLs

When a page moves or is renamed, add its old URL to `REDIRECTS` in `pages.js` (`'/old-url': '/new/url'`). On deploy, `generate.js` writes a small page at the old address that forwards visitors to the new one, so old Google results and bookmarks keep working. GitHub Pages can't do real server redirects, so this is the standard workaround; Google treats it as a permanent move.

Optional fields: `crumb` (a shorter breadcrumb name), `image` (a page-specific preview image, same shape as `SITE.image`), and `noindex: true` (keeps the page out of Google and the sitemap).

## Deploying

`npm run deploy` runs `node SEO/generate.js` right after `next export`. That step is needed because the export wipes `docs/`. To regenerate by hand after an export, run `npm run seo`.

## Google Search Console (one-time setup)

This is how Google learns about the sitemap and how you see what's indexed. `rice.edu` DNS is run by Rice IT, so use the HTML tag method:

1. Go to <https://search.google.com/search-console> and add a **URL prefix** property for `https://mcmurtry.rice.edu/`.
2. Choose **HTML tag** and copy only the `content="..."` value.
3. Paste it into `googleSiteVerification` in `pages.js`, then deploy.
4. Click **Verify** in Search Console.
5. Under **Sitemaps**, submit `sitemap.xml`.
6. Optionally, use **URL Inspection** on the homepage and click **Request indexing**.

Changes to titles and descriptions usually show up in Google within a few days to a few weeks after Google recrawls the page. Google sometimes rewrites descriptions it thinks don't match the search.

## Checking your work

- Rich Results Test: <https://search.google.com/test/rich-results> (confirms the structured data parses)
- Link preview check: paste a URL into <https://www.opengraph.xyz/>
- Live files: <https://mcmurtry.rice.edu/sitemap.xml> and <https://mcmurtry.rice.edu/robots.txt>
