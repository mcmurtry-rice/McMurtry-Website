import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';

const OWeek20262027 = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>O-Week 2026–2027</h1>
            <p style={{ fontSize: '1.25rem', color: '#666' }}>Work in progress - check back soon!</p>
        </main>
        <SiteFooter />
    </div>
);

export default OWeek20262027;
