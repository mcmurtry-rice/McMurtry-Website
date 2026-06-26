import React, { useState } from 'react';
import { Box } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import ContactCards from '../../components/ContactCard/ContactCard';
import { useSupabaseTable, distinctInOrder } from '../../lib/useSupabaseTable';
import './paas.css';

const PAAS_DESCRIPTION =
    'PAAs provide peer advice to fellow students about a wide range of academically-related ' +
    'topics. With personal experience as a Rice student and training from the Office of ' +
    'Academic Advising, PAAs offer accurate advice regarding specific courses, co-curricular ' +
    'opportunities, academic rules and procedures, and a wide range of other topics.';

const PaasPage = () => {
    const { rows, isLoading } = useSupabaseTable('paas');
    const [activeTab, setActiveTab] = useState(null);

    const tabNames = distinctInOrder(rows, 'tab');
    const effectiveTab = activeTab && tabNames.includes(activeTab)
        ? activeTab
        : (tabNames[0] || null);

    const activeData = rows
        .filter(r => r.tab === effectiveTab)
        .map(({ name, major, minor, pre_prof_path, email, year }) =>
            ({ name, major, minor, pre_prof_path, email, year }));

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='paas-page'>
                <header className='ev-hero'>
                    <img src='/static/figma-about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/figma-ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/figma-ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Peer Academic Advisors</h1>
                </header>

                <Box width={[1, 0.8, 0.7]} ml='auto' mr='auto' className='paas-description'>
                    {PAAS_DESCRIPTION}
                </Box>

                <div className='paas-tabs'>
                    {tabNames.map(name => (
                        <button
                            key={name}
                            className={`paas-tab ${effectiveTab === name ? 'active' : ''}`}
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
                        <ContactCards content={activeData} />
                    </div>
                ) : null}
            </div>

            <SiteFooter />
        </div>
    );
};

export default PaasPage;
