# Supabase migration - people pages

The people pages (McTeam, McMinistry, McCourt, Affinity Groups, Associates,
PAAs, RHAs, Head Caregivers, SMR) now read from Supabase instead of a mix
of JSON files and published Google Sheets.

## What to do once, in order

### 1. Create the tables

Open the Supabase dashboard → SQL Editor for the project and paste the entire
contents of [`schema.sql`](./schema.sql). Run it. It creates 9 tables and
sets up read-only public access policies (RLS).

Safe to re-run - every `create table` is `if not exists`.

### 2. Get your service-role key

From the Supabase dashboard:
**Settings → API → Project API keys → `service_role` (secret)**.

Copy it into `.env.local`:

```
SUPABASE_SERVICE_ROLE_KEY=eyJ…the-secret-key…
```

The `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` should
already be there.

> The service role bypasses RLS and lets the migration script insert.
> Never commit it. Never use it in browser code. `.env.local` is gitignored.

### 3. Seed the data

The one-time `scripts/migrate-to-supabase.js` that originally populated the
people tables has been deleted - those tables are live and are now edited
through the dashboard. Nothing to run here for them.

For `site_links`, paste [`seed_site_links.sql`](./seed_site_links.sql) into
the SQL Editor. It ends in `on conflict (key) do nothing`, so re-running it
will never overwrite an edit someone made in the dashboard.

### 4. Verify

```
npm run dev
```

Visit each people page and check the rendered output against what was live
before. The page chrome, copy, and ordering should be identical.

### 5. (Optional) Clean up old sources

Only after you've confirmed every page renders correctly - delete:

- `lib/googleSheets.js`
- `lib/googleSheets.README.md`
- `lib/sheets.config.json`
- `data/people/mcteam.json`
- `data/people/associates.json`
- `data/people/wellbeing.json`
- `data/people/smr.json`

(You can keep them around as a backup until you're certain - they're no
longer imported anywhere.)

## Editing data after migration

Open the Supabase dashboard → **Table Editor**. Each table is editable
through the UI. The `sort_order` column controls display order - keep
values unique-per-tab and ascending.

For the `body` column on `mcteam`: it's `jsonb` and must be a JSON array of
strings, e.g. `["First paragraph.", "Second paragraph."]`.

## How the pages fetch

Each page now uses [`lib/useSupabaseTable.js`](../lib/useSupabaseTable.js),
a tiny hook that selects all rows from one table on mount, ordered by
`sort_order`. Components filter client-side by `tab`/`title`/`position`
to split into sections (matching the original layout).

All reads use the public anon key + read-only RLS policies. The browser
never sees the service role key.


## Site links (forms, docs, calendars)

Every externally-hosted Google Form, Doc, Sheet, and Calendar the site links
to or embeds lives in the `site_links` table, so changing one is a dashboard
edit rather than a code change and a redeploy.

Each row records **where it is used** (`location`) in plain English, plus a
`name` and `description`, so you can tell what you are changing without
reading the code.

**The `key` column is what the code looks a row up by. Never change it.**
Everything else in the row is safe to edit. Renaming a page or rewording a
description can't break a link; renaming a key silently breaks one.

`url` holds whatever the call site needs, per `kind`:

| kind | what `url` holds |
|---|---|
| `form`, `document` | a normal `https://` link |
| `calendar_subscribe` | a Google "add to my calendar" URL |
| `calendar_id` | a raw calendar ID, **not** a URL (`abc@group.calendar.google.com`) |

A calendar has up to two rows - one `calendar_id` to embed it and one
`calendar_subscribe` for the button. They share a key prefix and sit next to
each other in the Table Editor. **Change a calendar, change both rows.**

Pages read the table through
[`useSiteLinks.js`](./useSiteLinks.js), which differs from
`useSupabaseTable` in two ways:

- **One fetch per page load**, not one per call site - a module-level cache
  plus an in-flight promise collapses them. Room Reservations needs three
  keys and still makes a single request.
- **Every call site passes its current URL as a fallback.** That value
  renders on first paint (including in the exported HTML, where there is no
  DB yet) and is replaced once the table loads. So a blank, broken, or
  deleted row degrades to the last-deployed URL instead of a dead link -
  which also means a deleted row keeps working until the next deploy.

The McFUNd form is embedded rather than linked. Store the plain `viewform`
link; `asEmbeddedForm()` appends `?embedded=true` at render time, so pasting
whatever Google's share dialog gives you still renders chrome-free.
