import React, { useState, useEffect } from 'react';
import { Box } from 'rebass';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { useSupabaseTable } from '../../../tools/database/useSupabaseTable';
// this page reuses the associates page's card/modal styles (as-* classes);
// import them directly so the page also works standalone in dev
import '../associates/index.css';
import './index.css';

const DESCRIPTION =
    'Divisional Advisors are faculty members from each of Rice’s academic divisions ' +
    'who serve as a resource and point of contact for McMurtry students.';

const careerFor = (row) =>
    row.department && row.department !== row.division
        ? `${row.division}, ${row.department}`
        : row.division;

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
                            <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
                            {advisor.phone ? <><br />Ext. {advisor.phone}</> : null}
                            <br />{advisor.office}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DivisionalAdvisorsPage = () => {
    const { rows: advisors, isLoading } = useSupabaseTable('divisionaladvisors');
    const [selected, setSelected] = useState(null);

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='associates-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Divisional Advisors</h1>
                </header>

                <Box width={[0.9, 0.7, 0.6]} ml='auto' mr='auto' className='associates-mission'>
                    {DESCRIPTION}
                </Box>

                {isLoading ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : (
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

                {selected ? (
                    <AdvisorModal advisor={selected} onClose={() => setSelected(null)} />
                ) : null}
            </div>

            <SiteFooter />
        </div>
    );
};

export default DivisionalAdvisorsPage;
