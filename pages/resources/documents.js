import React, { useState } from 'react';
import { Flex } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import './documents.css';

const documents = [
    { name: 'Constitution',     document: '../../../../static/documents/mcm_constitution_jan_2024.pdf',    icon: '/static/icons/building.svg' },
    { name: 'General By-Laws',  document: '../../../../static/documents/mcm_general_bylaws_sep_2025.pdf',  icon: '/static/icons/file.svg' },
    { name: 'Housing By-Laws',  document: '../../../../static/documents/mcm_housing_bylaws_jan_2024.pdf',  icon: '/static/icons/home.svg' },
    { name: 'Parking By-Laws',  document: '../../../../static/documents/mcm_parking_bylaws.pdf',           icon: '/static/icons/file.svg' },
];

const DocumentsPage = () => {
    const [slide, setSlide] = useState(0);
    const currentDoc = documents[slide];

    return (
        <div className='page page-with-staggered-menu'>
            <Header />
            <SiteNavbar />
            <div className='documents-page'>
                <div className='documents-hero'>
                    <h1 className='documents-main-title'>McLegislation</h1>
                </div>
                <Flex flexDirection='row' justifyContent='center' flexWrap='wrap' className='documents-tabs'>
                    {documents.map((doc, index) => (
                        <div
                            onClick={() => setSlide(index)}
                            className={index === slide ? 'active-doc-tab' : 'inactive-doc-tab'}
                            key={doc.name}
                        >
                            <span className='doc-key'>{doc.name}</span>
                        </div>
                    ))}
                </Flex>
                <PDFViewer src={currentDoc.document} />
            </div>
            <SiteFooter />
        </div>
    );
};

export default DocumentsPage;
