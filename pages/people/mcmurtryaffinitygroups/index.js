import React from 'react';
import { Box } from 'rebass';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { useSupabaseTable } from '../../../tools/database/useSupabaseTable';
import { mailHref, MAIL_TARGET } from '../../../tools/emailLink';
import './index.css';

// Alphabetical. A title missing from this list still renders - it just
// sorts to the end - so add new groups here when the roster gains one.
const GROUP_DISPLAY_ORDER = [
    'Black Caucus', 'East Asian', 'First Gen / Low Income',
    'Jewish', 'Latine', 'LGBTQ+', 'Muslim', 'South Asian',
];

const McMurtryAffinityGroupsPage = () => {
    const { rows, isLoading } = useSupabaseTable('affinity_groups');

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

                <Box width={[0.9, 0.7, 0.6]} ml='auto' mr='auto' className='affinity-description'>
                    <p>
                        Affinity Groups at McMurtry, as extensions of the Diversity Council,
                        aim to foster a sense of community among certain student populations
                        including LGBTQ+, Black, Latinx, Jewish, and First-Gen/Low Income.
                        These groups will be hosting movie nights, game nights, and other
                        events throughout the semester in order to support and encourage
                        connections in these groups. If you identify with one or more of
                        these groups, we highly encourage you to join the group chats, meet
                        new Murts and participate in any upcoming events!
                    </p>
                    <p>
                        Each Affinity group has a designated liaison who acts as a bridge
                        between the group and the Diversity Council. These are some really
                        cool Murts who will be hosting events and activities for you all to
                        enjoy. If you have any questions about a specific group, please feel
                        free to reach out to the associated liaison or any member in the
                        Diversity Council.
                    </p>
                    <p>
                        If you are interested in joining one of the affinity groups, please
                        reach out to the affinity group heads listed below.
                    </p>
                </Box>

                {isLoading ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : (
                    /* One tile per group rather than a full-width band each.
                     * Most groups have one or two heads, so a band apiece left
                     * the page mostly empty space. */
                    <div className='ag-grid'>
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


