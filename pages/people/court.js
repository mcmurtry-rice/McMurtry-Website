import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import Cards from '../../components/ContactCard/ContactCard';
import { useSupabaseTable, distinctInOrder } from '../../tools/useSupabaseTable';
import './court.css';

const pluralise = (label) => {
    if (!label) return label;
    if (/[sx]$/i.test(label)) return label + 'es';
    return label + 's';
};

const CourtPage = () => {
    const { rows, isLoading } = useSupabaseTable('mccourt');
    const [activeTab, setActiveTab] = useState(null);

    const positions = distinctInOrder(rows, 'position');
    const tabNames = positions.map(pluralise);

    const effectiveTab = activeTab && tabNames.includes(activeTab)
        ? activeTab
        : (tabNames[0] || null);
    const effectivePosition = effectiveTab
        ? positions[tabNames.indexOf(effectiveTab)]
        : null;

    const activeData = rows
        .filter(r => r.position === effectivePosition)
        .map(({ position, name, email, room, phone }) => {
            return position === 'Chief Justice'
                ? { position, name, email, room, phone }
                : { position, name, email, room };
        });

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

                <div className='court-tabs'>
                    {tabNames.map(name => (
                        <button
                            key={name}
                            className={`court-tab ${effectiveTab === name ? 'active' : ''}`}
                            onClick={() => setActiveTab(name)}
                        >
                            {name}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : effectiveTab ? (
                    <div className='fade-in' key={effectiveTab}>
                        <h2 className='division-title'>{effectiveTab}</h2>
                        <Cards content={activeData} />
                    </div>
                ) : null}
            </div>

            <SiteFooter />
        </div>
    );
};

export default CourtPage;
