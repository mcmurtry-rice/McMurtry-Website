import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
import './index.css';

const DOCUMENTS = [
    { name: 'Constitution',    src: '/static/documents/mcm_constitution_jan_2024.pdf' },
    { name: 'General By-Laws', src: '/static/documents/mcm_general_bylaws_sep_2025.pdf' },
    { name: 'Housing By-Laws', src: '/static/documents/mcm_housing_bylaws_jan_2024.pdf' },
    { name: 'Parking By-Laws', src: '/static/documents/mcm_parking_bylaws.pdf' },
];

const DocumentsPage = () => {
    const [active, setActive] = useState(0);

    return (
        <div className='page page-light'>
            <Header />
            <SiteNavbar />
            <div className='documents-page'>

                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>McLegislation</h1>
                    <p className='ev-hero-lede'>McMurtry College governing documents: constitution, by-laws, and more.</p>
                </header>

                <div className='doc-tabs-wrap'>
                    <div className='doc-tabs' role='tablist'>
                        {DOCUMENTS.map((doc, i) => (
                            <button
                                key={doc.name}
                                role='tab'
                                aria-selected={i === active}
                                className={`doc-tab ${i === active ? 'doc-tab-active' : ''}`}
                                onClick={() => setActive(i)}
                            >
                                {doc.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='doc-viewer-wrap'>
                    <PDFViewer
                        key={active}
                        src={DOCUMENTS[active].src}
                        title={DOCUMENTS[active].name}
                        height={820}
                    />
                </div>

            </div>
            <SiteFooter />
        </div>
    );
};

export default DocumentsPage;
