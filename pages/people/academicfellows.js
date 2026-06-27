import React, { useState } from 'react';
import { Box } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import ContactCards from '../../components/ContactCard/ContactCard';
import { useSupabaseTable, distinctInOrder } from '../../tools/useSupabaseTable';
import './academicfellows.css';

const FELLOWS_DESCRIPTION =
    'Fellows are upperclassmen who were selected based on proven academic achievement ' +
    'and demonstrated willingness to help fellow students. As part of their charge, ' +
    'Fellows provide free academic assistance on a regular basis through advertised ' +
    'review sessions, "office hours" in the college commons, and individual tutoring ' +
    'by request.';

const AcademicFellowsPage = () => {
    const { rows, isLoading } = useSupabaseTable('academic_fellows');
    const [activeTab, setActiveTab] = useState(null);

    const tabNames = distinctInOrder(rows, 'tab');
    const effectiveTab = activeTab && tabNames.includes(activeTab)
        ? activeTab
        : (tabNames[0] || null);

    const activeData = rows
        .filter(r => r.tab === effectiveTab)
        .map(({ name, email, major, subjects, pre_prof_path }) => {
            const out = { name };
            if (email)         out.email = email;
            if (major)         out.major = major;
            if (subjects)      out.subjects = subjects;
            if (pre_prof_path) out.pre_prof_path = pre_prof_path;
            return out;
        });

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='fellows-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Academic Fellows</h1>
                </header>

                <Box width={[1, 0.8, 0.7]} ml='auto' mr='auto' className='fellows-description'>
                    {FELLOWS_DESCRIPTION}
                </Box>

                <div className='fellows-tabs'>
                    {tabNames.map(name => (
                        <button
                            key={name}
                            className={`fellows-tab ${effectiveTab === name ? 'active' : ''}`}
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

export default AcademicFellowsPage;
