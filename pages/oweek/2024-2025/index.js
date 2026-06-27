import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
import './index.css';

const OWeek20242025 = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <div className='ow-archive-page'>
            <header className='ev-hero'>
                <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                <h1 className='ev-hero-heading'>O-Week 2024-2025</h1>
                <p className='ev-hero-lede'>McMurtry College Orientation Week 2024.</p>
            </header>
            <div className='ow-archive-viewer'>
                <PDFViewer src='/static/oweek/2024-2025/oweekbook.pdf' title='O-Week Book 2024-2025' height={900} />
            </div>
        </div>
        <SiteFooter />
    </div>
);

export default OWeek20242025;
