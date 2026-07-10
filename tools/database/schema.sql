-- ============================================================
-- McMurtry Website - Supabase schema for people pages
--
-- One table per people page. Field shapes mirror the data that
-- already exists (mix of JSON files in data/people/ and the
-- published Google Sheets tabs). Display order is preserved via
-- sort_order on every table.
--
-- All tables are READ-ONLY from the client (anon role). Inserts/
-- updates/deletes can only be done via the service_role key (e.g.
-- by the one-time migration script or the Supabase dashboard).
-- ============================================================

-- ---------- mcteam ----------
-- Source: data/people/mcteam.json
-- Original fields: position, names, body[], image
create table if not exists public.mcteam (
    id            bigserial primary key,
    position      text not null,
    names         text not null,
    body          jsonb not null default '[]'::jsonb,   -- array of paragraphs
    image         text,
    sort_order    int not null default 0
);

-- ---------- mcministry ----------
-- Source: Google Sheet (gid 405858748) - 3 tabs in component:
--   Executive Council, McCabinet, People's Council
-- Fields per row: position, name, email, year
create table if not exists public.mcministry (
    id            bigserial primary key,
    tab           text not null,
    position      text,
    name          text not null,
    email         text,
    year          text,
    img_url       text,
    sort_order    int not null default 0
);

-- ---------- mccourt ----------
-- Source: Google Sheet (gid 1699321769)
-- Original component splits by position (Chief Justice / Associate Justice).
-- Fields: position, name, email, room, phone
create table if not exists public.mccourt (
    id            bigserial primary key,
    position      text,
    name          text not null,
    email         text,
    room          text,
    phone         text,
    sort_order    int not null default 0
);

-- ---------- affinity_groups ----------
-- Source: Google Sheet (gid 521639587)
-- Component groups rows by title (Black Caucus, East Asian, FGLI, Jewish,
-- Latine, LGBTQ+, South Asian). Fields per member: name, email.
create table if not exists public.affinity_groups (
    id            bigserial primary key,
    title         text not null,                       -- group name (Black Caucus, ...)
    name          text not null,
    email         text,
    sort_order    int not null default 0
);

-- ---------- associates ----------
-- Source: data/people/associates.json
-- Fields: name, career, bio, movie_tv, hobbies, fact, image
create table if not exists public.associates (
    id            bigserial primary key,
    name          text not null,
    career        text,
    bio           text,
    movie_tv      text,
    hobbies       text,
    fact          text,
    image         text,
    sort_order    int not null default 0
);

-- ---------- paas ----------
-- Source: Google Sheet (gid 519315703) - 3 tabs in component:
--   Head, O-Week, Year Long
-- Fields: name, major, minor, pre_prof_path, email, year
create table if not exists public.paas (
    id            bigserial primary key,
    tab           text not null,
    name          text not null,
    major         text,
    minor         text,
    pre_prof_path text,
    email         text,
    year          text,
    sort_order    int not null default 0
);

-- ---------- rhas ----------
-- Source: data/people/wellbeing.json (head_RHAs section + general RHAs).
-- Fields: name, pronouns, bio, phone, email, photo
create table if not exists public.rhas (
    id            bigserial primary key,
    tab           text not null default 'RHAs',        -- 'Head RHAs' for the head_RHAs group
    name          text not null,
    pronouns      text,
    bio           text,
    phone         text,
    email         text,
    photo         text,
    sort_order    int not null default 0
);

-- ---------- head_caregivers ----------
-- Source: data/people/wellbeing.json (head_caregivers section, if present).
-- Fields: name, email, description
create table if not exists public.head_caregivers (
    id            bigserial primary key,
    name          text not null,
    email         text,
    description   text,
    sort_order    int not null default 0
);

-- ---------- smr ----------
-- Source: data/people/smr.json
-- Fields: name, email, image, body
create table if not exists public.smr (
    id            bigserial primary key,
    name          text not null,
    email         text,
    image         text,
    body          text,
    sort_order    int not null default 0
);

-- ---------- committees ----------
-- Source: data/people/committees.json (division/name/description/image
-- structure) + Google Sheet gid 1832339805 (heads & members roster).
--
-- One row per committee. The `division` column groups committees ("External
-- Committees", "Internal Committees", etc.) and drives the top-level tabs
-- on the page. Heads & members live in the related `committee_members`
-- table below.
create table if not exists public.committees (
    id            bigserial primary key,
    division      text not null,
    name          text not null,
    description   text,
    image         text,
    sort_order    int not null default 0
);

-- ---------- academic_fellows ----------
-- Source: Google Sheet gid 519315703 (same sheet as PAAs but the Academic
-- Fellows section lives further to the right).
-- Fields: tab, name, email, major, subjects, pre_prof_path.
-- `tab` is 'Head Academic Fellows' or 'Academic Fellows' (heads were
-- marked with a trailing asterisk in the source sheet).
create table if not exists public.academic_fellows (
    id            bigserial primary key,
    tab           text not null,
    name          text not null,
    email         text,
    major         text,
    subjects      text,
    pre_prof_path text,
    sort_order    int not null default 0
);

-- ---------- divisionaladvisors ----------
-- Source: Rice Office of Academic Advising divisional advisors listing for
-- McMurtry (https://oaa.rice.edu), transcribed manually since it's not a
-- feed. `bio`/`image` are optional extras borrowed from the `associates`
-- table for advisors who are also associates; most rows leave them null.
create table if not exists public.divisionaladvisors (
    id            bigserial primary key,
    name          text not null,
    division      text,
    department    text,
    phone         text,
    email         text,
    office        text,
    bio           text,
    image         text,
    sort_order    int not null default 0
);

-- ---------- committee_members ----------
-- One row per person on a committee. `role` is 'head' or 'member' (heads
-- were marked with a trailing asterisk in the source sheet). Linked to
-- `committees` by name (denormalised so the page can render with one read).
create table if not exists public.committee_members (
    id             bigserial primary key,
    committee_name text not null,
    role           text not null default 'member', -- 'head' | 'member'
    name           text not null,
    email          text,
    sort_order     int not null default 0
);


-- ============================================================
-- Row-Level Security: read-only public access
-- ============================================================
do $$
declare
    t text;
begin
    foreach t in array array[
        'mcteam', 'mcministry', 'mccourt', 'affinity_groups',
        'associates', 'paas', 'rhas', 'head_caregivers', 'smr',
        'committees', 'committee_members', 'academic_fellows',
        'divisionaladvisors'
    ]
    loop
        execute format('alter table public.%I enable row level security;', t);
        execute format(
            'drop policy if exists "Public read %I" on public.%I;', t, t
        );
        execute format(
            'create policy "Public read %I" on public.%I for select to anon, authenticated using (true);',
            t, t
        );
    end loop;
end$$;
