// Writes the crawler files into the exported site. Runs in `npm run deploy`
// right after `next export -o docs` (which wipes docs/), or on its own with
// `npm run seo`. Pass a different output folder as the first argument.
//
//   docs/sitemap.xml      every indexable page in SEO/pages.js
//   docs/robots.txt       allows all crawlers, points at the sitemap
//   docs/social-card.jpg  the link-preview image (copied from SEO/)
//   docs/<old url>.html   forwarding pages for REDIRECTS in SEO/pages.js
//
// Also warns about routes under pages/ that have no entry in SEO/pages.js, so
// a new page can't silently ship with the generic title and description.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { SITE, PAGES, ALIASES, REDIRECTS, absoluteUrl } = require('./pages');

const ROOT = path.join(__dirname, '..');
const OUT = path.resolve(ROOT, process.argv[2] || 'docs');

// '/' is served by pages/index.js, which re-exports the /home/index page.
const sourceFile = (route) => (route === '/' ? 'pages/home/index/index.js' : `pages${route}/index.js`);

// Date of the last commit touching the page's source file. Pages whose content
// lives in Supabase change without a commit, so this is a lower bound.
const lastModified = (file) => {
    try {
        const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { cwd: ROOT })
            .toString()
            .trim();
        if (date) return date;
    } catch (e) {
        // not a git checkout, or git missing: fall through
    }
    return new Date().toISOString().slice(0, 10);
};

// Every routable page file under pages/, as a URL path.
const listRoutes = (dir, prefix = '') =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        if (entry.isDirectory()) return listRoutes(path.join(dir, entry.name), `${prefix}/${entry.name}`);
        return entry.name === 'index.js' ? [prefix || '/'] : [];
    });

if (!fs.existsSync(OUT)) {
    console.error(`[seo] ${OUT} does not exist - run next export first`);
    process.exit(1);
}

const routes = listRoutes(path.join(ROOT, 'pages'));
const missing = routes.filter((r) => !PAGES[r] && !ALIASES[r]);
const stale = Object.keys(PAGES).filter((r) => !fs.existsSync(path.join(ROOT, sourceFile(r))));
missing.forEach((r) => console.warn(`[seo] ${r} has no entry in SEO/pages.js`));
stale.forEach((r) => console.warn(`[seo] SEO/pages.js lists ${r}, but ${sourceFile(r)} does not exist`));

const entries = Object.keys(PAGES)
    .filter((r) => !PAGES[r].noindex && !stale.includes(r))
    .map((r) => `  <url>\n    <loc>${absoluteUrl(r)}</loc>\n    <lastmod>${lastModified(sourceFile(r))}</lastmod>\n  </url>`);

fs.writeFileSync(
    path.join(OUT, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`
);
fs.writeFileSync(
    path.join(OUT, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`
);
fs.copyFileSync(path.join(__dirname, 'social-card.jpg'), path.join(OUT, SITE.image.path.slice(1)));

// GitHub Pages can't send real redirects, so each old URL gets a page that
// forwards instantly. Google treats a zero-second meta refresh as a permanent
// redirect; the canonical link points it at the new page too. /about is served
// from about.html, which can sit next to an about/ folder.
const redirectPage = (target) => {
    const url = absoluteUrl(target);
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved - ${SITE.name}</title>
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0; url=${url}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash);</script>
</head>
<body>
<p>This page has moved to <a href="${url}">${url}</a>.</p>
</body>
</html>
`;
};

let redirects = 0;
Object.entries(REDIRECTS).forEach(([from, to]) => {
    const file = path.join(OUT, `${from}.html`);
    if (PAGES[from] || ALIASES[from]) {
        console.warn(`[seo] Redirect ${from} skipped: it is a current page`);
    } else if (!PAGES[to]) {
        console.warn(`[seo] Redirect ${from} skipped: target ${to} is not in PAGES`);
    } else if (fs.existsSync(file)) {
        console.warn(`[seo] Redirect ${from} skipped: ${path.relative(ROOT, file)} already exists`);
    } else {
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, redirectPage(to));
        redirects++;
    }
});

console.log(`[seo] Wrote sitemap.xml (${entries.length} URLs), robots.txt, social-card.jpg, and ${redirects} redirects to ${path.relative(ROOT, OUT)}/`);
