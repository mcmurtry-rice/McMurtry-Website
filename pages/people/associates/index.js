import React, { useState, useEffect } from 'react';
import { Box } from 'rebass';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { useSupabaseTable } from '../../../tools/database/useSupabaseTable';
import './index.css';

const ASSOCIATES_MISSION =
    'Every residential college at Rice has an associates program, where faculty, staff, ' +
    'and community members support students in their intellectual, cultural and social ' +
    'lives through providing mentorship, guidance and support.';

const AssociateModal = ({ associate, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, []);

    if (!associate) return null;

    return (
        <div className='as-modal-overlay' onClick={onClose}>
            <div className='as-modal' onClick={e => e.stopPropagation()}>
                <button className='as-modal-close' onClick={onClose} aria-label='Close'>&times;</button>

                <div className='as-modal-media'>
                    {associate.image ? (
                        <img src={associate.image} alt={associate.name} className='as-modal-image' />
                    ) : (
                        <div className='as-modal-placeholder'>
                            <span>{associate.name.charAt(0)}</span>
                        </div>
                    )}
                </div>

                <div className='as-modal-body'>
                    <h2 className='as-modal-name'>{associate.name}</h2>
                    {associate.career ? (
                        <p className='as-modal-career'>{associate.career}</p>
                    ) : null}

                    {associate.bio ? (
                        <div className='as-modal-section'>
                            <span className='as-modal-label'>About</span>
                            <p className='as-modal-text'>{associate.bio}</p>
                        </div>
                    ) : null}

                    {associate.movie_tv ? (
                        <div className='as-modal-section'>
                            <span className='as-modal-label'>Favorite Movie/TV</span>
                            <p className='as-modal-text'>{associate.movie_tv}</p>
                        </div>
                    ) : null}

                    {associate.hobbies ? (
                        <div className='as-modal-section'>
                            <span className='as-modal-label'>Hobbies</span>
                            <p className='as-modal-text'>{associate.hobbies}</p>
                        </div>
                    ) : null}

                    {associate.fact ? (
                        <div className='as-modal-section'>
                            <span className='as-modal-label'>Fun Fact</span>
                            <p className='as-modal-text'>{associate.fact}</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

const AssociatesPage = () => {
    const { rows: associates, isLoading } = useSupabaseTable('associates');
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
                    <h1 className='ev-hero-heading'>Associates</h1>
                </header>

                <Box width={[0.9, 0.7, 0.6]} ml='auto' mr='auto' className='associates-mission'>
                    {ASSOCIATES_MISSION}
                </Box>

                {isLoading ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : (
                    <div className='as-grid'>
                        {associates.map((associate, i) => (
                            <button
                                key={i}
                                type='button'
                                className='as-card'
                                onClick={() => setSelected(associate)}
                            >
                                <div className='as-card-media'>
                                    {associate.image ? (
                                        <img src={associate.image} alt={associate.name} className='as-card-image' />
                                    ) : (
                                        <div className='as-card-placeholder'>
                                            <span>{associate.name.charAt(0)}</span>
                                        </div>
                                    )}
                                </div>
                                <div className='as-card-body'>
                                    <h3 className='as-card-name'>{associate.name}</h3>
                                    {associate.career ? (
                                        <p className='as-card-career'>{associate.career}</p>
                                    ) : null}
                                    <span className='as-card-cta'>
                                        View profile <span aria-hidden='true'>&rsaquo;</span>
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {selected ? (
                    <AssociateModal associate={selected} onClose={() => setSelected(null)} />
                ) : null}
            </div>

            <SiteFooter />
        </div>
    );
};

export default AssociatesPage;


