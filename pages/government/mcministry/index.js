import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import PersonChips from '../../../components/PersonChip/PersonChip';
import { useSupabaseTable } from '../../../tools/database/useSupabaseTable';
import './index.css';

/*
 * McMinistry - org-chart layout of McMurtry's student government,
 * mirroring the Executive Council & Committee Structure spread in the
 * O-Week Book (pp. 129-130):
 *
 *   row 1: Treasurers | McPresident | Chief Justice
 *   row 2: External VP | Internal VP | Prime Minister | At-Large Rep
 *   row 3: Secretaries | (RSA Senator) | Parliamentarian
 *
 * People come from the `mcministry` table (Chief Justice from `mccourt`)
 * and committee lists from the `committees` table, so the chart stays in
 * sync with Supabase. The config below only encodes structure: which
 * positions sit in which row, role blurbs, and key/P-Card badges.
 * Roles with no people in the table (e.g. RSA Senator) simply don't render.
 */

const lc = (r) => (r.position || '').toLowerCase();

const TREASURERS = {
    title: 'Treasurers',
    badges: ['pcard'],
    blurb: 'Handle budget allocations and approve all college purchases.',
    match: (p) => p.includes('treasurer'),
    showPositions: true,
};

const BOTTOM_ROLES = [
    {
        title: 'Secretaries',
        blurb: 'Keep meeting minutes, manage room reservations, and send out the weekly listserv.',
        match: (p) => p.includes('secretary'),
    },
    {
        title: 'RSA Senator',
        blurb: 'Represents McMurtry at the RSA Senate and brings campus-wide updates back to the college.',
        match: (p) => p.includes('senator'),
    },
    {
        title: 'Parliamentarian',
        blurb: 'Upholds accountability in government, holds votes, and passes changes to McLegislation.',
        match: (p) => p.includes('parliament'),
    },
];

const DIVISION_ROLES = [
    {
        title: 'External Vice President',
        badges: ['key'],
        blurb: 'Executes longstanding traditions and preserves McMurtry’s legacy.',
        match: (p) => p.includes('external vice'),
        committeeDivision: 'External Committees',
    },
    {
        title: 'Internal Vice President',
        badges: ['key'],
        blurb: 'Maintains and improves internal amenities and services within the college.',
        match: (p) => p.includes('internal vice'),
        committeeDivision: 'Internal Committees',
    },
    {
        title: 'Prime Minister',
        subtitle: 'Socials Vice President',
        badges: ['key', 'pcard'],
        blurb: 'Plans McMurtry’s large social gatherings and acts as liaison to student activities.',
        match: (p) => p.includes('prime minister'),
        committeeDivision: 'Social Committees',
    },
    {
        title: 'At-Large Representative',
        badges: ['key'],
        blurb: 'Leads the People’s Council and maintains hall and commons culture.',
        match: (p) => p.includes('at-large'),
        committeeDivision: 'At-Large Committees',
        link: { href: '#peoples-council', label: 'People’s Council ↓' },
    },
];

const PC_GROUPS = [
    { title: 'Hall Reps', match: (p) => p.includes('hall rep') },
    { title: 'Class Reps', match: (p) => p.includes('class rep') || p.includes('off campus') || p.includes('off-campus') },
];

const committeeHref = (name) => `/government/committees#${encodeURIComponent(name)}`;

const Badge = ({ type }) => (
    <span className="mcm-badge">
        <i className={`ph ${type === 'key' ? 'ph-key' : 'ph-credit-card'}`} aria-hidden="true" />
        {type === 'key' ? 'Key Holder' : 'P-Card Holder'}
    </span>
);

const toChips = (rows, showPositions) =>
    rows.map(({ name, email, position }) => ({
        name,
        email,
        position: showPositions ? position : undefined,
    }));

/* The .mcm-node wrapper is display:contents on desktop (invisible to the
 * flex tiers) and becomes the anchor for the tree-connector pseudo-elements
 * on mobile, since the card itself clips overflow for its cap bar. */
const RoleCard = ({ title, subtitle, badges = [], blurb, people = [], committees = [], showPositions, accent, link, primary }) => (
    <div className={`mcm-node${primary ? ' mcm-node-primary' : ''}`}>
    <article className={`mcm-role-card${primary ? ' mcm-role-card-primary' : ''}`}>
        <header className="mcm-role-head">
            <h3 className="mcm-role-title">
                {primary ? <i className="ph ph-crown mcm-role-crown" aria-hidden="true" /> : null}
                {title}
            </h3>
            {subtitle ? <p className="mcm-role-subtitle">{subtitle}</p> : null}
            {badges.length > 0 && (
                <div className="mcm-role-badges">
                    {badges.map((b) => <Badge key={b} type={b} />)}
                </div>
            )}
        </header>
        <p className="mcm-role-blurb">{blurb}</p>
        {people.length > 0 && (
            <PersonChips content={toChips(people, showPositions)} accent={accent} />
        )}
        {committees.length > 0 && (
            <div className="mcm-role-committees">
                <span className="mcm-role-committees-label">Committees</span>
                <div className="mcm-committee-list">
                    {committees.map((c) => (
                        <a key={c} href={committeeHref(c)} className="mcm-committee-chip">{c}</a>
                    ))}
                </div>
            </div>
        )}
        {link ? <a href={link.href} className="mcm-role-link">{link.label}</a> : null}
    </article>
    </div>
);

const McMinistryPage = () => {
    const { rows, isLoading } = useSupabaseTable('mcministry');
    const { rows: committees } = useSupabaseTable('committees');
    const { rows: court } = useSupabaseTable('mccourt');

    const pcRows = rows.filter((r) => r.tab === "People's Council");
    const ecRows = rows.filter((r) => r.tab !== "People's Council");

    const president = ecRows.filter((r) => /^(mc)?president/.test(lc(r)));
    const treasurers = ecRows.filter((r) => TREASURERS.match(lc(r)));
    const chiefJustice = court.filter((r) => lc(r).includes('chief justice'));

    const committeesByDivision = committees.reduce((acc, c) => {
        (acc[c.division] = acc[c.division] || []).push(c.name);
        return acc;
    }, {});

    const divisionCards = DIVISION_ROLES.map((role) => ({
        ...role,
        people: ecRows.filter((r) => role.match(lc(r))),
        committees: committeesByDivision[role.committeeDivision] || [],
    }));

    const bottomCards = BOTTOM_ROLES
        .map((role) => ({ ...role, people: ecRows.filter((r) => role.match(lc(r))) }))
        .filter((role) => role.people.length > 0);

    const pcLead = pcRows.filter((r) => lc(r).includes('at-large'));
    const isOffCampus = (r) => lc(r).includes('off campus') || lc(r).includes('off-campus');
    const pcGrouped = PC_GROUPS
        .map((g) => ({
            ...g,
            // stable sort: off-campus reps sink below the class-year reps
            people: pcRows
                .filter((r) => g.match(lc(r)))
                .sort((a, b) => (isOffCampus(a) ? 1 : 0) - (isOffCampus(b) ? 1 : 0)),
        }))
        .filter((g) => g.people.length > 0);
    const pcOther = pcRows.filter(
        (r) => !lc(r).includes('at-large') && !PC_GROUPS.some((g) => g.match(lc(r)))
    );

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='mcministry-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>McMinistry</h1>
                </header>

                <div className='mcm-intro'>
                    <p className='mcm-intro-text'>
                        McMurtry&rsquo;s government is made up of the <strong>Executive Council</strong> and
                        the <strong>People&rsquo;s Council</strong>. The chart below shows the hierarchy of
                        responsibility at the college: who leads what, and which committees live under
                        each division.
                    </p>
                    <div className='mcm-legend'>
                        <div className='mcm-legend-row'>
                            <Badge type='key' />
                            <span className='mcm-legend-hint'>oversees committees and the committee closet</span>
                        </div>
                        <div className='mcm-legend-row'>
                            <Badge type='pcard' />
                            <span className='mcm-legend-hint'>makes purchases on behalf of the college</span>
                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : (
                    <div className='fade-in'>
                        <h2 className='division-title'>Executive Council</h2>

                        <div className='mcm-chart'>
                            <div className='mcm-tier mcm-tier-top'>
                                <span className='mcm-tier-label'>Leadership</span>
                                {treasurers.length > 0 && (
                                    <RoleCard {...TREASURERS} people={treasurers} />
                                )}
                                {president.length > 0 && (
                                    <RoleCard
                                        title='McPresident'
                                        badges={['key', 'pcard']}
                                        blurb={'Leader of the Executive Council, steering McMurtry’s yearly operations, long-term goals, and initiatives.'}
                                        people={president}
                                        accent
                                        primary
                                    />
                                )}
                                <RoleCard
                                    title='Chief Justice'
                                    blurb={'Critical authority on wellbeing, conduct, and alcohol policies college-wide, leading the court of Associate Justices.'}
                                    people={chiefJustice}
                                    link={{ href: '/government/court', label: 'Meet McCourt →' }}
                                />
                            </div>

                            <div className='mcm-connector' aria-hidden='true' />

                            <div className='mcm-tier mcm-tier-divisions'>
                                <span className='mcm-tier-label'>Division Leads</span>
                                {divisionCards.map((role) => (
                                    <RoleCard key={role.title} {...role} accent />
                                ))}
                            </div>

                            {bottomCards.length > 0 && (
                                <React.Fragment>
                                    <div className='mcm-connector' aria-hidden='true' />
                                    <div className='mcm-tier mcm-tier-bottom'>
                                        <span className='mcm-tier-label'>Support Roles</span>
                                        {bottomCards.map((role) => (
                                            <RoleCard key={role.title} {...role} />
                                        ))}
                                    </div>
                                </React.Fragment>
                            )}
                        </div>

                        <h2 className='division-title mcm-pc-title' id='peoples-council'>People&rsquo;s Council</h2>
                        <div className='mcm-intro mcm-intro-tight'>
                            <p className='mcm-intro-text'>
                                Every floor, class, and off-campus Murt gets a voice (and a vote),
                                led by the At-Large Representative.
                            </p>
                        </div>

                        {pcLead.length > 0 && (
                            <div className='mcm-pc-lead'>
                                <PersonChips content={toChips(pcLead, true)} accent />
                            </div>
                        )}

                        <div className='mcm-pc-groups'>
                            {pcGrouped.map((g) => (
                                <section key={g.title} className='mcm-pc-group'>
                                    <h3 className='mcm-pc-group-title'>{g.title}</h3>
                                    <PersonChips content={toChips(g.people, true)} />
                                </section>
                            ))}
                            {pcOther.length > 0 && (
                                <section className='mcm-pc-group'>
                                    <h3 className='mcm-pc-group-title'>More Representatives</h3>
                                    <PersonChips content={toChips(pcOther, true)} />
                                </section>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <SiteFooter />
        </div>
    );
};

export default McMinistryPage;
