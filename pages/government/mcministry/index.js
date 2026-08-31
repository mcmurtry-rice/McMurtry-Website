import React, { useState, useEffect } from 'react';
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
 * Desktop shows full cards. Mobile keeps the same diagram SHAPE with
 * compact side-by-side nodes around a central spine; tapping a node
 * zooms into a modal with the role's full details (same interaction
 * as the committees diagram).
 *
 * People come from the `mcministry` table (Chief Justice from `mccourt`)
 * and committee lists from the `committees` table, so the chart stays in
 * sync with Supabase. Portraits ride along in `mcministry.img_url` /
 * `mccourt.image`. The whole chart uses PersonChips' portrait tiles so
 * every role reads the same whether or not that person has been
 * photographed yet - an unphotographed one shows a big initial. The config below only encodes structure: which
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
    <span className={`mcm-badge mcm-badge-${type}`}>
        <i className={`ph ${type === 'key' ? 'ph-key' : 'ph-credit-card'}`} aria-hidden="true" />
        <span className="mcm-badge-text">{type === 'key' ? 'Key Holder' : 'P-Card Holder'}</span>
    </span>
);

const toChips = (rows, showPositions) =>
    rows.map(({ name, email, position, img_url, image }) => ({
        name,
        email,
        position: showPositions ? position : undefined,
        // `mcministry` stores portraits in img_url; the Chief Justice comes
        // from `mccourt`, which calls the same column `image`.
        photo: img_url || image,
    }));

const TierLabel = ({ children }) => (
    <span className='mcm-tier-label'>
        <span className='mcm-tier-label-pill'>{children}</span>
    </span>
);

/* The .mcm-node wrapper is display:contents on desktop (invisible to the
 * flex tiers) and becomes the sized grid cell on mobile. */
const RoleCard = ({ role, onSelect }) => (
    <div className={`mcm-node${role.primary ? ' mcm-node-primary' : ''}`}>
        <article
            className={`mcm-role-card${role.primary ? ' mcm-role-card-primary' : ''}`}
            onClick={() => onSelect(role)}
        >
            <header className="mcm-role-head">
                <h3 className="mcm-role-title">
                    {role.primary ? <i className="ph ph-crown mcm-role-crown" aria-hidden="true" /> : null}
                    {role.title}
                </h3>
                {role.subtitle ? <p className="mcm-role-subtitle">{role.subtitle}</p> : null}
                {(role.badges || []).length > 0 && (
                    <div className="mcm-role-badges">
                        {role.badges.map((b) => <Badge key={b} type={b} />)}
                    </div>
                )}
            </header>
            <p className="mcm-role-blurb">{role.blurb}</p>
            {(role.people || []).length > 0 && (
                <div onClick={(e) => e.stopPropagation()}>
                    <PersonChips content={toChips(role.people, role.showPositions)} accent={role.accent} portrait />
                </div>
            )}
            {(role.committees || []).length > 0 && (
                <div className="mcm-role-committees">
                    <span className="mcm-role-committees-label">Committees</span>
                    <div className="mcm-committee-list">
                        {role.committees.map((c) => (
                            <a key={c} href={committeeHref(c)} className="mcm-committee-chip">{c}</a>
                        ))}
                    </div>
                </div>
            )}
            {role.link ? <a href={role.link.href} className="mcm-role-link">{role.link.label}</a> : null}
            <span className="mcm-role-more" aria-hidden="true">Details ›</span>
        </article>
    </div>
);

/* Mobile detail view: zoom-in modal, same interaction pattern as the
 * committees page. While `closing` the reverse animation plays before
 * the component unmounts. */
const RoleModal = ({ role, closing, onClose }) => (
    <div className={`mcm-modal-scrim${closing ? ' mcm-modal-scrim-closing' : ''}`} onClick={onClose}>
        <div
            className='mcm-modal'
            role='dialog'
            aria-modal='true'
            aria-label={role.title}
            onClick={(e) => e.stopPropagation()}
        >
            <button type='button' className='mcm-modal-close' onClick={onClose} aria-label='Close'>
                <i className='ph ph-x' aria-hidden='true' />
            </button>

            {role.subtitle ? <p className='mcm-modal-eyebrow'>{role.subtitle}</p> : null}
            <h2 className='mcm-modal-title'>
                {role.primary ? <i className="ph ph-crown mcm-role-crown" aria-hidden="true" /> : null}
                {role.title}
            </h2>

            {(role.badges || []).length > 0 && (
                <div className='mcm-role-badges mcm-modal-badges'>
                    {role.badges.map((b) => <Badge key={b} type={b} />)}
                </div>
            )}

            <p className='mcm-modal-blurb'>{role.blurb}</p>

            {(role.people || []).length > 0 && (
                <PersonChips content={toChips(role.people, true)} accent={role.accent} portrait />
            )}

            {(role.committees || []).length > 0 && (
                <div className='mcm-role-committees mcm-modal-committees'>
                    <span className='mcm-role-committees-label'>Committees</span>
                    <div className='mcm-committee-list'>
                        {role.committees.map((c) => (
                            <a key={c} href={committeeHref(c)} className='mcm-committee-chip'>{c}</a>
                        ))}
                    </div>
                </div>
            )}
            {role.link ? <a href={role.link.href} className='mcm-role-link' onClick={onClose}>{role.link.label}</a> : null}
        </div>
    </div>
);

const McMinistryPage = () => {
    const { rows, isLoading } = useSupabaseTable('mcministry');
    const { rows: committees } = useSupabaseTable('committees');
    const { rows: court } = useSupabaseTable('mccourt');

    const [selectedRole, setSelectedRole] = useState(null);
    const [closingRole, setClosingRole] = useState(false);

    const pcRows = rows.filter((r) => r.tab === "People's Council");
    const ecRows = rows.filter((r) => r.tab !== "People's Council");

    const president = ecRows.filter((r) => /^(mc)?president/.test(lc(r)));
    const treasurers = ecRows.filter((r) => TREASURERS.match(lc(r)));
    const chiefJustice = court.filter((r) => lc(r).includes('chief justice'));

    const committeesByDivision = committees.reduce((acc, c) => {
        (acc[c.division] = acc[c.division] || []).push(c.name);
        return acc;
    }, {});

    const topCards = [
        treasurers.length > 0 ? { ...TREASURERS, people: treasurers } : null,
        president.length > 0
            ? {
                title: 'McPresident',
                badges: ['key', 'pcard'],
                blurb: 'Leader of the Executive Council, steering McMurtry’s yearly operations, long-term goals, and initiatives.',
                people: president,
                accent: true,
                primary: true,
            }
            : null,
        {
            title: 'Chief Justice',
            blurb: 'Critical authority on wellbeing, conduct, and alcohol policies college-wide, leading the court of Associate Justices.',
            people: chiefJustice,
            link: { href: '/government/court', label: 'Meet McCourt →' },
        },
    ].filter(Boolean);

    const divisionCards = DIVISION_ROLES.map((role) => ({
        ...role,
        accent: true,
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

    // the modal is a mobile affordance: on desktop the cards already show
    // everything, so clicks do nothing there
    const openRole = (role) => {
        if (window.matchMedia('(max-width: 640px)').matches) setSelectedRole(role);
    };

    // play the reverse animation, then unmount
    const closeRole = () => {
        if (closingRole) return;
        setClosingRole(true);
        setTimeout(() => {
            setSelectedRole(null);
            setClosingRole(false);
        }, 220);
    };

    // lock page scroll and close on Escape while the modal is open
    useEffect(() => {
        if (!selectedRole) return undefined;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e) => { if (e.key === 'Escape') closeRole(); };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [selectedRole, closingRole]);

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
                                <TierLabel>Legislative</TierLabel>
                                {topCards.map((role) => (
                                    <RoleCard key={role.title} role={role} onSelect={openRole} />
                                ))}
                            </div>

                            <div className='mcm-connector' aria-hidden='true' />

                            <div className='mcm-tier mcm-tier-divisions'>
                                <TierLabel>Vice Presidents</TierLabel>
                                {divisionCards.map((role) => (
                                    <RoleCard key={role.title} role={role} onSelect={openRole} />
                                ))}
                            </div>

                            {bottomCards.length > 0 && (
                                <React.Fragment>
                                    <div className='mcm-connector' aria-hidden='true' />
                                    <div className='mcm-tier mcm-tier-bottom'>
                                        <TierLabel>Administration</TierLabel>
                                        {bottomCards.map((role) => (
                                            <RoleCard key={role.title} role={role} onSelect={openRole} />
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
                                <PersonChips content={toChips(pcLead, true)} accent portrait />
                            </div>
                        )}

                        <div className='mcm-pc-groups'>
                            {pcGrouped.map((g) => (
                                <section key={g.title} className='mcm-pc-group'>
                                    <h3 className='mcm-pc-group-title'>{g.title}</h3>
                                    <PersonChips content={toChips(g.people, true)} portrait />
                                </section>
                            ))}
                            {pcOther.length > 0 && (
                                <section className='mcm-pc-group'>
                                    <h3 className='mcm-pc-group-title'>More Reps</h3>
                                    <PersonChips content={toChips(pcOther, true)} portrait />
                                </section>
                            )}
                        </div>
                    </div>
                )}

                {selectedRole ? (
                    <RoleModal role={selectedRole} closing={closingRole} onClose={closeRole} />
                ) : null}
            </div>

            <SiteFooter />
        </div>
    );
};

export default McMinistryPage;
