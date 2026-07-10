import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import PersonChips from '../../../components/PersonChip/PersonChip';
import { useSupabaseTable, distinctInOrder } from '../../../tools/database/useSupabaseTable';
import './index.css';

/*
 * Committees - diagram layout following the O-Week Book (p. 128):
 * a band per division lead with its committee boxes underneath, each
 * box showing the committee name and three quick bullets. Clicking a
 * box zooms into a modal with the full description, heads, and members.
 *
 * Committees and their people come from Supabase; the bullets below are
 * a static summary layer (new committees without bullets still render).
 */

// division value in the `committees` table -> band title (the book labels
// bands by the division lead)
const DIVISION_LEADS = {
    'External Committees': 'External Vice President',
    'Internal Committees': 'Internal Vice President',
    'Social Committees': 'Prime Minister',
    'At-Large Committees': 'At-Large Representative',
};

// three-line summaries per committee (book p. 128, adapted), keyed by
// lowercased committee name
const BULLETS = {
    'arts': ['Creative community engagement', 'Designs birthday banners and themed decorations', 'Connects the college through visual arts'],
    'alumni': ['Publishes the semiannual alumni newsletter', 'Maintains connections with graduates', 'Bridges past and present Murt communities'],
    'associates': ['Liaises between students and faculty/staff associates', 'Hosts Associates Nights twice a year', 'Builds mentorship and networking'],
    'social media and history': ['Documents traditions, events, and history', 'Manages the college social media presence', 'Captures and preserves campus life'],
    'murtchandise': ['Manages design and ordering of college gear', 'Handles logistics for merchandise', 'Connects creativity with college spirit'],
    'sports': ['Promotes Rice sporting events', 'Hosts the Super Bowl watch party', 'Organizes intramural activities'],
    'traditions': ['Plans McScottish, Murt-O-Ween, and Murty Holidays', 'Preserves and evolves Murt traditions', 'Strengthens college identity'],
    'charity and philanthropy': ['Organizes charitable initiatives', 'Connects Murt with community causes', 'Fosters a culture of giving back'],
    'amenities': ['Improves college spaces and interior design', 'Manages the budget for facility upgrades', 'Responds to student needs for spaces'],
    'culinary': ['Hosts food events including Sunday Sundaes', 'Caters to diverse tastes across the college', 'Builds community through shared food'],
    'website': ['Maintains and improves the online presence', 'Provides web development experience', 'Keeps the website current and user-friendly'],
    'environmental': ['Promotes sustainability at McMurtry', 'Plans Sustainable Sunday Sundaes', 'Combines eco-consciousness with college life'],
    'mcmakerspace': ['Manages the McMakerspace for all Rice students', 'Offers tools for building and creating', 'Fosters hands-on innovation'],
    'expeditions': ['Plans monthly Murts on the Move outings', 'Organizes McExpeditions trips each semester', 'Takes McMurtry on the road'],
    'internal socials': ['Plans FITQ every Friday in the Quad', 'Promotes week-to-week community', 'The most active social committee'],
    'external socials': ['Plans the Y2K party and Pub Night events', 'Organizes cross-college socials', 'Connects Murts with other colleges'],
    'beer bike': ['Coordinates Beer Bike participation', 'Plans the biggest event of the year', 'Manages team, chug, and race logistics'],
    'seniors': ['Plans champagne toasts and senior events', 'Organizes Senior Gala and graduation', 'Creates memorable final-year experiences'],
    'college night': ['Hosts low-key themed hangouts with other colleges', 'Plans College Night events each semester', 'A new committee you can help shape'],
    'culturals & diversity': ['Promotes cultural awareness through events', 'Organizes Restaurant Day with international cuisines', 'Serves as an inclusion resource for the college'],
};

const bulletsFor = (name) => BULLETS[(name || '').toLowerCase()] || [];

const toChips = (rows) => rows.map(({ name, email }) => ({ name, email }));

const CommitteesPage = () => {
    const { rows: committees, isLoading: loadingCommittees } = useSupabaseTable('committees');
    const { rows: members,   isLoading: loadingMembers }    = useSupabaseTable('committee_members');

    const [selected, setSelected] = useState(null);

    const divisionNames = distinctInOrder(committees, 'division');
    const isLoading = loadingCommittees || loadingMembers;

    // Deep link support: /government/committees#Arts opens the Arts modal
    // (used by the McMinistry org chart).
    useEffect(() => {
        if (committees.length === 0) return;
        const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
        if (!hash) return;
        const target = committees.find(c => c.name.toLowerCase() === hash.toLowerCase());
        if (target) setSelected(target);
    }, [committees]);

    // lock page scroll and close on Escape while the modal is open
    useEffect(() => {
        if (!selected) return undefined;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [selected]);

    const openModal = (committee) => {
        setSelected(committee);
        window.history.replaceState(null, '', `#${encodeURIComponent(committee.name)}`);
    };

    const closeModal = () => {
        setSelected(null);
        window.history.replaceState(null, '', window.location.pathname);
    };

    const heads   = selected ? members.filter(m => m.committee_name === selected.name && m.role === 'head')   : [];
    const regular = selected ? members.filter(m => m.committee_name === selected.name && m.role === 'member') : [];

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='committee-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Committees</h1>
                </header>

                <p className='cm-lede'>
                    Committees are student-run, student-led groups that shape McMurtry&rsquo;s
                    culture and community. Click any committee to meet its heads and members.
                </p>

                {isLoading ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : (
                    <div className='cm-diagram fade-in'>
                        {divisionNames.map((division) => (
                            <section key={division} className='cm-division'>
                                <h2 className='cm-band'>{DIVISION_LEADS[division] || division}</h2>
                                <div className='cm-grid'>
                                    {committees.filter(c => c.division === division).map((c) => (
                                        <button
                                            key={c.id}
                                            type='button'
                                            className='cm-box'
                                            onClick={() => openModal(c)}
                                        >
                                            <h3 className='cm-box-title'>{c.name}</h3>
                                            {bulletsFor(c.name).length > 0 && (
                                                <ul className='cm-box-bullets'>
                                                    {bulletsFor(c.name).map((b) => <li key={b}>{b}</li>)}
                                                </ul>
                                            )}
                                            <span className='cm-box-more'>
                                                <i className='ph ph-users-three' aria-hidden='true' /> Meet the committee
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}

                {selected ? (
                    <div className='cm-modal-scrim' onClick={closeModal}>
                        <div
                            className='cm-modal'
                            role='dialog'
                            aria-modal='true'
                            aria-label={selected.name}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button type='button' className='cm-modal-close' onClick={closeModal} aria-label='Close'>
                                <i className='ph ph-x' aria-hidden='true' />
                            </button>

                            <p className='cm-modal-eyebrow'>{DIVISION_LEADS[selected.division] || selected.division}</p>
                            <h2 className='cm-modal-title'>{selected.name}</h2>

                            {selected.image ? (
                                <div className='cm-image-wrap'>
                                    <img src={selected.image} alt={selected.name} className='cm-image' />
                                </div>
                            ) : null}

                            {selected.description ? (
                                <div
                                    className='cm-description'
                                    dangerouslySetInnerHTML={{ __html: selected.description }}
                                />
                            ) : null}

                            <h3 className='cm-subtitle'>Committee Heads</h3>
                            {heads.length > 0 ? (
                                <PersonChips content={toChips(heads)} accent />
                            ) : (
                                <p className='cm-modal-empty'>To be announced.</p>
                            )}

                            <h3 className='cm-subtitle'>Committee Members</h3>
                            {regular.length > 0 ? (
                                <PersonChips content={toChips(regular)} />
                            ) : (
                                <p className='cm-modal-empty'>To be announced.</p>
                            )}
                        </div>
                    </div>
                ) : null}
            </div>

            <SiteFooter />
        </div>
    );
};

export default CommitteesPage;
