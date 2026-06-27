import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
import './index.css';

const OWeek20232024 = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <div className='ow-archive-page'>
            <header className='ev-hero'>
                <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                <h1 className='ev-hero-heading'>O-Week 2023-2024</h1>
                <p className='ev-hero-lede'>BistrO-Week: McMurtry College Orientation Week 2023.</p>
            </header>
            <div className='ow-archive-viewer'>
                <PDFViewer src='/static/oweek/2023-2024/oweekbook.pdf' title='O-Week Book 2023-2024' height={900} />
            </div>
        </div>
        <SiteFooter />
    </div>
);

export default OWeek20232024;
