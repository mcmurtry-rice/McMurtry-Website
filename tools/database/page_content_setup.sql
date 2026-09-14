-- page_content: long-form page copy (intros, blurbs) editable from the
-- Supabase Table Editor without a code change or redeploy.
--
-- Code looks rows up by `key`. DO NOT change `key` values.
-- `content` is HTML (<p>, <a>, <strong>...), rendered as-is.
--
-- Every call site hardcodes the last-deployed copy as a fallback, so a
-- blank or deleted row degrades to that text rather than an empty page.
--
-- Paste this whole file into the SQL Editor and run it. Safe to re-run:
-- the seed ends in `on conflict (key) do nothing`.

create table if not exists public.page_content (
    id            bigserial primary key,
    key           text not null unique,   -- stable lookup id used by the code. NEVER change.
    location      text not null,          -- where it appears on the site
    content       text not null           -- HTML
);

alter table public.page_content enable row level security;
drop policy if exists "Public read page_content" on public.page_content;
create policy "Public read page_content" on public.page_content
    for select to anon, authenticated using (true);

insert into public.page_content (key, location, content) values (
    'affinity_groups_intro',
    'People > Affinity Groups, intro above the group tiles',
    $html$<p><strong>Welcome to the Affinity Groups Page!!</strong></p><p>As you may know, the Affinity Groups at McMurtry are focused extensions of the Diversity Committee. Our biggest goals are to make sure that all Murts feel seen, represented, and supported while building a network of student connections within our college!</p><p>Our affinity groups include the Black Caucus, Latine Group, FGLI Group, Jewish Group, East Asian Group, South Asian Group, LGBTQIA+ Group, and Muslim Group. We’ll be hosting all kinds of events, socials, outings, and activities throughout the year to celebrate our communities, build connections, and create spaces where everyone can feel at home.</p><p>If you identify with one or more of these groups, we highly encourage you to join, come to our events, and have fun with us! Whether you’re looking to meet people with similar backgrounds and experiences or if you want to just enjoy our events, know that you’re welcome in our spaces!</p><p>Each affinity group has leader(s), aka Affinity Group Heads, who oversee the group, plan events, and organize outings. If you have any questions about a specific group, please feel free to reach out to the leaders listed below.</p><p>Interested in joining? Be on the lookout for each affinity group’s GroupMe link, or reach out to their leaders for more information. We can’t wait to see you around McMurtry! 💜🍌</p>$html$
) on conflict (key) do nothing;
