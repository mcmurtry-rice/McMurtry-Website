![](https://github.com/mcmurtry-rice/McMurtry-Website/blob/master/static/YurtTrees.svg)

# McMurtry Website

The official McMurtry College website, built with Next.js and hosted on GitHub Pages.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server on `:3000` with hot reload |
| `npm run build` | Production build into `.next/` — sanity-check before deploying |
| `npm run deploy` | Build, export to `docs/`, set CNAME, stage for git |

After `npm run deploy`, commit and push to publish:

```bash
git commit -m "your message"
git push
```

The live site is GitHub Pages serving the `docs/` folder from `master`. Pushing publishes immediately.

> **Don't edit `docs/` directly** — it's overwritten on every deploy.

## Repository structure

```
MurtWebsite/
├── pages/          Next.js routes — every .js file here is a URL
│   ├── people/     co-located page JS + CSS (e.g. associates.js / associates.css)
│   ├── resources/  co-located page JS + CSS
│   └── oweek/2025-2026/
├── components/     Shared React components (navbar, header, footer, etc.)
├── data/           ALL site content as JSON — separated from code
├── lib/            Shared utilities (Supabase hook, O-Week loader)
├── styles/         global.css — design tokens + site-wide base styles
├── static/         Images, PDFs, SVGs, icons
├── supabase/       DB schema
├── docs/           Build output (auto-generated, don't edit)
├── next.config.js
└── package.json
```

## Pages

Each `.js` file under `pages/` is a URL. File path → URL:

| File | URL |
| --- | --- |
| `pages/index.js` | `/` |
| `pages/about.js` | `/about` |
| `pages/calendar.js` | `/calendar` |
| `pages/financialinclusivity.js` | `/financialinclusivity` |
| `pages/people/associates.js` | `/people/associates` |
| `pages/people/RHAs.js` | `/people/RHAs` |
| `pages/resources/roomreservations.js` | `/resources/roomreservations` |
| `pages/oweek/2025-2026/index.js` | `/oweek/2025-2026` |

**Casing matters on the live site.** GitHub Pages is case-sensitive — a navbar link to `/people/PAAs` will 404 if the file is `paas.js`. Match filename casing exactly.

Pages are self-contained: JS and CSS live together in the same folder. No separate component file needed.

## Components

Only truly shared components live in `components/`:

```
components/
├── Header/         <head> meta tags
├── navbar/         Site navigation (StaggeredMenu)
├── Footer/         Site footer
├── ContactCard/    Reusable people card grid
├── CustomCalendar/ Google Calendar embed
├── PDFViewer/      PDF embed wrapper
├── Title/          Section title component
└── oweek/2025-2026/ O-Week specific components
```

## Data

All site content lives in `data/` as JSON — not hardcoded in components.

```
data/
├── navigation/     main-navbar.json
├── people/         associates, committees, court, divisionaladvisors,
│                   fellows, mcministry, mcmurtryaffinitygroups, mcteam,
│                   paas, smr, wellbeing
└── resources/      blm, diversityResources, mis
```

To update content, edit the JSON. To add a new page, add a JSON file here and import it from the page.

## O-Week rollover

Each year's O-Week lives under `static/oweek/<year>/` and `pages/oweek/<year>/`. To roll over:

1. The previous year's pages and assets are already under their year folder — leave them.
2. Create `pages/oweek/<new-year>/` by copying the previous year's folder.
3. Create `static/oweek/<new-year>/` with the new JSON data files and images:
   - `config.json` — countdown date, theme name
   - `coordinators.json` — coord list
   - `groups.json` — O-Week groups
   - `theme.json` — theme text
   - `oweekbook.pdf`
   - `images/coords/`, `images/groups/`, `images/hero/`
4. Update the navbar to point to the new year's routes.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

`.env.local` is gitignored — never commit it.

## Contributors

- Nicholas Meisburger ([nmeisburger0](https://github.com/nmeisburger0))
- Antony Saleh ([antonysa23-meet](https://github.com/antonysa23-meet))
