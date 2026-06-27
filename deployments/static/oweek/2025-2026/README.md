# static/oweek/current — Active O-Week year

This folder holds the **active** O-Week year's content. The components in `components/oweek/` (via `lib/oweek.js`) read everything from here.

## To switch the site to a new year

1. Copy this entire folder to `../OLD_O_WEEKS/<year-just-ended>/` (e.g., `OLD_O_WEEKS/2025/`).
2. Replace the files in this folder with the new year's content. Keep the same filenames and folder layout.
3. Build (`npm run deploy`). No code changes needed.

## Files

| File | What it controls |
|---|---|
| `config.json` | Year number, theme name & subtitle, move-in date (countdown target), PDF filename, carousel slides |
| `theme.json` | Theme page subtitle, hero image, theme paragraphs |
| `coordinators.json` | List of coords (name, pronouns, year, major, hometown, photo, email, phone, bio, LinkedIn) + college leadership (president, college coordinator, magisters) + mailing address |
| `groups.json` | O-Week groups list (name + image) |
| `oweekbook.pdf` | The O-Week book — viewer/download/print |
| `images/coords/` | Coord headshots referenced by `coordinators.json` |
| `images/groups/` | Group photos referenced by `groups.json` |
| `images/hero/` | Carousel + theme hero images referenced by `config.json` and `theme.json` |

## Image paths in JSON

Image paths inside JSON files are **relative to `current/`**. For example: `"image": "images/coords/cara.JPG"`. The `oweekImage()` helper in `lib/oweek.js` resolves these to full static URLs at runtime.

## Schema gotchas

- `config.moveInDate` is `YYYY-MM-DD`. The countdown component parses month from this (zero-indexed in JS Date).
- `coordinators.bioImageAlign` is either `"left"` or `"right"` — controls which side the coord's photo floats on in their bio section.
- `coordinators.linkedin` can be empty string — the photo just won't be a link.
- `config.carousel[].src`, `coordinators[].image`, `groups[].image`, `theme.heroImage` all use the same `images/...` relative path convention.
