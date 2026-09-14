import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { useSupabaseTable } from '../../../tools/database/useSupabaseTable';
import { usePageContent } from '../../../tools/database/usePageContent';
import { mailHref, MAIL_TARGET } from '../../../tools/emailLink';
import './index.css';

// Alphabetical. A title missing from this list still renders - it just
// sorts to the end - so add new groups here when the roster gains one.
const GROUP_DISPLAY_ORDER = [
    'Black Caucus', 'East Asian', 'First Gen / Low Income',
    'Jewish', 'Latine', 'LGBTQ+', 'Muslim', 'South Asian',
];

// Intro copy lives in public.page_content (key affinity_groups_intro) so it
// can be edited without a redeploy. This is the fallback until it loads.
const INTRO_FALLBACK = '<p><strong>Welcome to the Affinity Groups Page!!</strong></p><p>As you may know, the Affinity Groups at McMurtry are focused extensions of the Diversity Committee. Our biggest goals are to make sure that all Murts feel seen, represented, and supported while building a network of student connections within our college!</p><p>Our affinity groups include the Black Caucus, Latine Group, FGLI Group, Jewish Group, East Asian Group, South Asian Group, LGBTQIA+ Group, and Muslim Group. We’ll be hosting all kinds of events, socials, outings, and activities throughout the year to celebrate our communities, build connections, and create spaces where everyone can feel at home.</p><p>If you identify with one or more of these groups, we highly encourage you to join, come to our events, and have fun with us! Whether you’re looking to meet people with similar backgrounds and experiences or if you want to just enjoy our events, know that you’re welcome in our spaces!</p><p>Each affinity group has leader(s), aka Affinity Group Heads, who oversee the group, plan events, and organize outings. If you have any questions about a specific group, please feel free to reach out to the leaders listed below.</p><p>Interested in joining? Be on the lookout for each affinity group’s GroupMe link, or reach out to their leaders for more information. We can’t wait to see you around McMurtry! 💜🍌</p>';

const McMurtryAffinityGroupsPage = () => {
    const { rows, isLoading } = useSupabaseTable('affinity_groups');
    const intro = usePageContent('affinity_groups_intro', INTRO_FALLBACK);

    const byTitle = new Map();
    for (const row of rows) {
        if (!byTitle.has(row.title)) {
            byTitle.set(row.title, { title: row.title, members: [] });
        }
        byTitle.get(row.title).members.push({ name: row.name, email: row.email || '' });
    }
    const affinityGroups = Array.from(byTitle.values())
        .filter(g => g.members.length > 0)
        .sort((a, b) => {
            const aIdx = GROUP_DISPLAY_ORDER.indexOf(a.title);
            const bIdx = GROUP_DISPLAY_ORDER.indexOf(b.title);
            if (aIdx === -1 && bIdx === -1) return a.title.localeCompare(b.title);
            if (aIdx === -1) return 1;
            if (bIdx === -1) return -1;
            return aIdx - bIdx;
        });

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='mcmurtry-affinity-groups-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Affinity Groups</h1>
                </header>

                <div
                    className='affinity-description'
                    dangerouslySetInnerHTML={{ __html: intro }}
                />

                {/* Distinct keys so React swaps in a new grid node instead of
                    restyling the spinner's div; Chrome counts a reused node
                    that changes size as a layout shift. */}
                {isLoading ? (
                    <div className='loading-container' key='loading'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : (
                    /* One tile per group rather than a full-width band each.
                     * Most groups have one or two heads, so a band apiece left
                     * the page mostly empty space. */
                    <div className='ag-grid' key='grid'>
                        {affinityGroups.map((group) => (
                            <section key={group.title} className='ag-tile'>
                                <h2 className='ag-tile-title'>{group.title}</h2>
                                <ul className='ag-people'>
                                    {group.members.map((m, i) => (
                                        <li key={`${m.name}-${i}`} className='ag-person'>
                                            {m.email ? (
                                                <a className='ag-person-link' href={mailHref(m.email)} {...MAIL_TARGET}>
                                                    <span className='ag-person-name'>{m.name}</span>
                                                    <span className='ag-person-email'>{m.email}</span>
                                                </a>
                                            ) : (
                                                <span className='ag-person-link ag-person-plain'>
                                                    <span className='ag-person-name'>{m.name}</span>
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                )}
            </div>

            <SiteFooter />
        </div>
    );
};

export default McMurtryAffinityGroupsPage;


