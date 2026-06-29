# components/

This folder is for **reusable UI pieces** — things that appear in multiple places across the site (navbar, footer, image carousels, etc.).

**Do not put page-specific content here.** If something only exists on one page or within one section of the site, it belongs in `pages/` alongside the route file that uses it.

## Rule of thumb

- Used in more than one place → `components/`
- Only used by one page → keep it next to that page in `pages/`
