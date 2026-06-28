![McMurtry College](https://github.com/mcmurtry-rice/McMurtry-Website/blob/master/static/YurtTrees.svg)

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
git commit -m "deploy: your message"
git push
```

The live site is GitHub Pages serving the `docs/` folder from `master`. Pushing publishes immediately.

> **Don't edit `docs/` directly** — it's overwritten on every deploy.

## Repository structure

```
MurtWebsite/
├── pages/                  Next.js routes — every index.js here is a URL
│   ├── home/               Home page, About, Calendar
│   ├── people/             People pages (associates, fellows, court, etc.)
│   ├── government/         Government pages (committees, court, mcministry)
│   ├── resources/          Resource pages (p-card, room reservations, etc.)
│   └── oweek/              O-Week pages, one folder per year
│       └── 2025-2026/      Current year (index.js + index.css, self-contained)
├── components/             Shared React components
├── styles/                 global.css — design tokens + site-wide base styles
├── static/                 Images, PDFs, SVGs, icons
├── google-apps-scripts/    Google Apps Scripts for P-Card automation
├── tools/                  Database schema and Supabase utilities
├── docs/            Build output (auto-generated, don't edit)
├── next.config.js
└── package.json
```

## Pages

Each `index.js` under `pages/` is a URL. File path → URL:

| File | URL |
| --- | --- |
| `pages/home/index/index.js` | `/home/index` |
| `pages/home/about/index.js` | `/home/about` |
| `pages/home/calendar/index.js` | `/home/calendar` |
| `pages/people/associates/index.js` | `/people/associates` |
| `pages/people/mcteam/index.js` | `/people/mcteam` |
| `pages/government/committees/index.js` | `/government/committees` |
| `pages/resources/pcard-requests/index.js` | `/resources/pcard-requests` |
| `pages/resources/room-reservations/index.js` | `/resources/room-reservations` |
| `pages/oweek/2025-2026/index.js` | `/oweek/2025-2026` |

**Casing matters on the live site.** GitHub Pages is case-sensitive — a link to `/people/PAAs` will 404 if the file is `paas/`. Match folder casing exactly.

Each page is self-contained: `index.js` and `index.css` live together in the same folder.

## Components

Only truly shared components live in `components/`:

```
components/
├── Header/         <head> meta tags
├── navbar/         Site navigation
├── Footer/         Site footer
├── ContactCard/    Reusable people card
├── CustomCalendar/ Google Calendar embed
├── ImageCarousel/  Auto-scrolling image carousel
│                   NOTE: mobile scroll speed is set via AUTO_SPEED in
│                   pages/home/index/index.js (not a prop) — see comment there
├── PDFViewer/      PDF embed wrapper
└── Title/          Section title component
```

## O-Week rollover

Each year's O-Week is fully self-contained in `pages/oweek/<year>/`. To roll over to a new year:

1. Copy `pages/oweek/<prev-year>/` to `pages/oweek/<new-year>/`
2. Copy `static/oweek/<prev-year>/` to `static/oweek/<new-year>/` and replace:
   - Coordinator photos in `images/coords/`
   - Group photos in `images/groups/`
   - Hero images in `images/hero/`
   - `oweekbook.pdf`
3. In `pages/oweek/<new-year>/index.js`, update the inline data at the top:
   - `themeData` — theme name, paragraphs
   - `groupsData` — group names and images
   - `coordinatorsData` — coordinator info, bios, contact details
   - `config` — year, move-in date, PDF filename, general email
4. Update the navbar to point to the new year's route.

## Google Apps Scripts

`google-apps-scripts/` contains automation scripts for the P-Card system:

- **`pcard-email-notification.gs`** — Email notifications for P-Card checkout/return/online purchases
- **`pcard-calendar-automation.gs`** — Calendar automation for P-Card bookings
- **`mcitems-email-notification.gs`** — Email notifications for MC items checkout

See `google-apps-scripts/README.md` for setup and semester rollover instructions.

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
