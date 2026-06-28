import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import Cards from '../../../components/ContactCard/ContactCard';
import { useSupabaseTable, distinctInOrder } from '../../../tools/database/useSupabaseTable';
import './index.css';

const pluralise = (label) => {
    if (!label) return label;
    if (/[sx]$/i.test(label)) return label + 'es';
    return label + 's';
};

const CourtPage = () => {
    const { rows, isLoading } = useSupabaseTable('mccourt');
    const positions = distinctInOrder(rows, 'position');

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='court-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>McCourt</h1>
                </header>

                {isLoading ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : (
                    positions.map((position) => {
                        const members = rows
                            .filter(r => r.position === position)
                            .map(({ position: pos, name, email, room, phone }) =>
                                pos === 'Chief Justice'
                                    ? { position: pos, name, email, room, phone }
                                    : { position: pos, name, email, room }
                            );
                        return (
                            <section className='wellbeing-section' key={position}>
                                <h2 className='division-title'>{pluralise(position)}</h2>
                                <Cards content={members} />
                            </section>
                        );
                    })
                )}
            </div>

            <SiteFooter />
        </div>
    );
};

export default CourtPage;


