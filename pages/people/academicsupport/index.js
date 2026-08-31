import React, { useState, useEffect } from 'react';
import { Box } from 'rebass';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import ContactCards from '../../../components/ContactCard/ContactCard';
import { useSupabaseTable, distinctInOrder } from '../../../tools/database/useSupabaseTable';
// divisional advisor cards/modal reuse the associates page's as-* styles
import '../associates/index.css';
import './index.css';
import { mailHref, MAIL_TARGET } from '../../../tools/emailLink';

/*
 * Academic Support - one page for all of McMurtry's academic resources,
 * combining what used to be three separate pages:
 *   #paas      Peer Academic Advisors   (`paas` table)
 *   #fellows   Academic Fellows         (`academic_fellows` table)
 *   #advisors  Divisional Advisors      (`divisionaladvisors` table)
 * The old routes redirect here with the matching anchor.
 */

const PAAS_DESCRIPTION =
    'PAAs provide peer advice to fellow students about a wide range of academically-related ' +
    'topics. With personal experience as a Rice student and training from the Office of ' +
    'Academic Advising, PAAs offer accurate advice regarding specific courses, co-curricular ' +
    'opportunities, academic rules and procedures, and a wide range of other topics.';

const FELLOWS_DESCRIPTION =
    'Fellows are upperclassmen who were selected based on proven academic achievement ' +
    'and demonstrated willingness to help fellow students. As part of their charge, ' +
    'Fellows provide free academic assistance on a regular basis through advertised ' +
    'review sessions, "office hours" in the college commons, and individual tutoring ' +
    'by request.';

const ADVISORS_DESCRIPTION =
    'Divisional Advisors are faculty members from each of Rice’s academic divisions ' +
    'who serve as a resource and point of contact for McMurtry students.';

const SECTIONS = [
    { id: 'paas', label: 'Peer Academic Advisors' },
    { id: 'fellows', label: 'Academic Fellows' },
    { id: 'advisors', label: 'Divisional Advisors' },
];

const careerFor = (row) =>
    row.department && row.department !== row.division
        ? `${row.division}, ${row.department}`
        : row.division;

const Loading = () => (
    <div className='loading-container'>
        <div className='loading-spinner'></div>
        <p className='loading-text'>Loading...</p>
    </div>
);

const AdvisorModal = ({ advisor, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    if (!advisor) return null;

    return (
        <div className='as-modal-overlay' onClick={onClose}>
            <div className='as-modal' onClick={e => e.stopPropagation()}>
                <button className='as-modal-close' onClick={onClose} aria-label='Close'>&times;</button>

                <div className='as-modal-media'>
                    {advisor.image ? (
                        <img src={advisor.image} alt={advisor.name} className='as-modal-image' />
                    ) : (
                        <div className='as-modal-placeholder'>
                            <span>{advisor.name.charAt(0)}</span>
                        </div>
                    )}
                </div>

                <div className='as-modal-body'>
                    <h2 className='as-modal-name'>{advisor.name}</h2>
                    <p className='as-modal-career'>{careerFor(advisor)}</p>

                    {advisor.bio ? (
                        <div className='as-modal-section'>
                            <span className='as-modal-label'>Bio</span>
                            {advisor.bio.split('\n\n').map((para, i) => (
                                <p key={i} className='as-modal-text' style={i > 0 ? { marginTop: '1em' } : {}}>{para}</p>
                            ))}
                        </div>
                    ) : null}

                    <div className='as-modal-section'>
                        <span className='as-modal-label'>Contact</span>
                        <p className='as-modal-text'>
                            <a href={mailHref(advisor.email)} {...MAIL_TARGET}>{advisor.email}</a>
                            {advisor.phone ? <><br />Ext. {advisor.phone}</> : null}
                            <br />{advisor.office}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* people-page pattern: rows carry a `tab` field; show every tab group as
 * its own subsection so everything is visible without clicking around */
const TabbedCards = ({ rows, pick }) => {
    const tabNames = distinctInOrder(rows, 'tab');
    if (tabNames.length <= 1) {
        return <ContactCards content={rows.map(pick)} />;
    }
    return (
        <React.Fragment>
            {tabNames.map((tab) => (
                <React.Fragment key={tab}>
                    <h3 className='acadsup-subtitle'>{tab}</h3>
                    <ContactCards content={rows.filter(r => r.tab === tab).map(pick)} />
                </React.Fragment>
            ))}
        </React.Fragment>
    );
};

const AcademicSupportPage = () => {
    const { rows: paas, isLoading: loadingPaas } = useSupabaseTable('paas');
    const { rows: fellows, isLoading: loadingFellows } = useSupabaseTable('academic_fellows');
    const { rows: advisors, isLoading: loadingAdvisors } = useSupabaseTable('divisionaladvisors');

    const [selected, setSelected] = useState(null);
    const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

    // deep links (#paas / #fellows / #advisors, used by the old routes'
    // redirects) select the matching tab, on load and on hash changes
    useEffect(() => {
        const apply = () => {
            const hash = window.location.hash.replace(/^#/, '');
            if (SECTIONS.some((s) => s.id === hash)) setActiveSection(hash);
        };
        apply();
        window.addEventListener('hashchange', apply);
        return () => window.removeEventListener('hashchange', apply);
    }, []);

    const selectSection = (id) => {
        setActiveSection(id);
        window.history.replaceState(null, '', `#${id}`);
    };

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='associates-page acadsup-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Academic Support</h1>
                </header>

                <p className='acadsup-lede'>
                    Everything academic at McMurtry in one place: peer advisors for
                    courses and requirements, fellows for tutoring and review sessions,
                    and faculty divisional advisors for each school.
                </p>

                <nav className='acadsup-jump' aria-label='Sections'>
                    {SECTIONS.map((s) => (
                        <button
                            key={s.id}
                            type='button'
                            className={`acadsup-jump-pill${activeSection === s.id ? ' acadsup-jump-pill-active' : ''}`}
                            onClick={() => selectSection(s.id)}
                        >
                            {s.label}
                        </button>
                    ))}
                </nav>

                {activeSection === 'paas' && (
                <section id='paas' className='acadsup-section fade-in'>
                    <h2 className='division-title'>Peer Academic Advisors</h2>
                    <Box width={[1, 0.8, 0.7]} ml='auto' mr='auto' className='acadsup-description'>
                        {PAAS_DESCRIPTION}
                    </Box>
                    {loadingPaas ? <Loading /> : (
                        <TabbedCards
                            rows={paas}
                            pick={({ name, major, minor, pre_prof_path, email, year }) =>
                                ({ name, major, minor, pre_prof_path, email, year })}
                        />
                    )}
                </section>
                )}

                {activeSection === 'fellows' && (
                <section id='fellows' className='acadsup-section fade-in'>
                    <h2 className='division-title'>Academic Fellows</h2>
                    <Box width={[1, 0.8, 0.7]} ml='auto' mr='auto' className='acadsup-description'>
                        {FELLOWS_DESCRIPTION}
                    </Box>
                    {loadingFellows ? <Loading /> : (
                        <TabbedCards
                            rows={fellows}
                            pick={({ name, email, major, subjects, pre_prof_path }) => {
                                const out = { name };
                                if (email)         out.email = email;
                                if (major)         out.major = major;
                                if (subjects)      out.subjects = subjects;
                                if (pre_prof_path) out.pre_prof_path = pre_prof_path;
                                return out;
                            }}
                        />
                    )}
                </section>
                )}

                {activeSection === 'advisors' && (
                <section id='advisors' className='acadsup-section fade-in'>
                    <h2 className='division-title'>Divisional Advisors</h2>
                    <Box width={[1, 0.8, 0.7]} ml='auto' mr='auto' className='acadsup-description'>
                        {ADVISORS_DESCRIPTION}
                    </Box>
                    {loadingAdvisors ? <Loading /> : (
                        <div className='as-grid'>
                            {advisors.map((advisor) => (
                                <button
                                    key={advisor.id}
                                    type='button'
                                    className='as-card'
                                    onClick={() => setSelected(advisor)}
                                >
                                    <div className='as-card-media'>
                                        {advisor.image ? (
                                            <img src={advisor.image} alt={advisor.name} className='as-card-image' />
                                        ) : (
                                            <div className='as-card-placeholder'>
                                                <span>{advisor.name.charAt(0)}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className='as-card-body'>
                                        <h3 className='as-card-name'>{advisor.name}</h3>
                                        <p className='as-card-career'>{careerFor(advisor)}</p>
                                        <span className='as-card-cta'>View profile <span aria-hidden='true'>&rsaquo;</span></span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </section>
                )}

                {selected ? (
                    <AdvisorModal advisor={selected} onClose={() => setSelected(null)} />
                ) : null}
            </div>

            <SiteFooter />
        </div>
    );
};

export default AcademicSupportPage;
