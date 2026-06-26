# Supabase migration — people pages

The people pages (McTeam, McMinistry, McCourt, Affinity Groups, Associates,
PAAs, RHAs, Head Caregivers, SMR) now read from Supabase instead of a mix
of JSON files and published Google Sheets.

## What to do once, in order

### 1. Create the tables

Open the Supabase dashboard → SQL Editor for the project and paste the entire
contents of [`schema.sql`](./schema.sql). Run it. It creates 9 tables and
sets up read-only public access policies (RLS).

Safe to re-run — every `create table` is `if not exists`.

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

### 3. Run the migration

```
node scripts/migrate-to-supabase.js
```

This script:
- Reads the original sources (`data/people/*.json` + the live published
  Google Sheets).
- Applies the exact same row-shaping logic the live components used to do.
- Clears each Supabase table, then inserts rows preserving order.

Re-runnable any time — each run truncates and replaces. No data is edited
or normalised; values go in byte-for-byte.

### 4. Verify

```
npm run dev
```

Visit each people page and check the rendered output against what was live
before. The page chrome, copy, and ordering should be identical.

### 5. (Optional) Clean up old sources

Only after you've confirmed every page renders correctly — delete:

- `lib/googleSheets.js`
- `lib/googleSheets.README.md`
- `lib/sheets.config.json`
- `data/people/mcteam.json`
- `data/people/associates.json`
- `data/people/wellbeing.json`
- `data/people/smr.json`

(You can keep them around as a backup until you're certain — they're no
longer imported anywhere.)

## Editing data after migration

Open the Supabase dashboard → **Table Editor**. Each table is editable
through the UI. The `sort_order` column controls display order — keep
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
