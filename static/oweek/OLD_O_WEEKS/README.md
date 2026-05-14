# OLD_O_WEEKS — O-Week Archive

This folder preserves snapshots of past O-Weeks. Each subfolder is named by year (e.g. `2025/`) and mirrors the structure of `static/oweek/current/`.

## How to roll over to a new year

When a new O-Week year begins (typically each summer):

1. **Archive the year that just ended:**
   - Create `OLD_O_WEEKS/<year-just-ended>/`
   - Copy the entire contents of `static/oweek/current/` into it.
2. **Drop in the new year's content:**
   - Replace files inside `static/oweek/current/` with the new year's content.
   - Keep the same filenames and folder structure (`config.json`, `coordinators.json`, `groups.json`, `theme.json`, `oweekbook.pdf`, `images/coords/*`, `images/groups/*`, `images/hero/*`).
   - Update the values in each JSON file (year, theme name, move-in date, coord names/emails/phones/bios, group names/images, theme paragraphs, carousel order, etc.).
3. **Build & deploy.** No JavaScript changes are required. The website auto-updates.

## What each year folder contains

A complete year snapshot has the same shape as `current/`:

```
<year>/
├── config.json           ← theme name, move-in date, PDF filename, carousel
├── coordinators.json     ← coord list (names, bios, contact info) + college leadership
├── groups.json           ← O-Week groups list
├── theme.json            ← theme subtitle, hero image, paragraphs
├── oweekbook.pdf         ← that year's O-Week book
└── images/
    ├── coords/
    ├── groups/
    └── hero/
```

Older archives may be partial — see each year's `README.md` for what is and is not preserved.
