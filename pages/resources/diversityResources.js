import React from 'react';
import { Box } from 'rebass';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import resources from '../../data/resources/diversityResources.json';
import './diversityResources.css';

const DiversityResourcesPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='diversity-resources-page'>
            <div className='dr-hero'>
                <h1 className='dr-main-title'>Diversity Resources</h1>
            </div>
            <div className='dr-center-container'>
                <Link href='/resources/BlackLivesMatter'>
                    <div className='blm-banner-card'>
                        <h2 className='blm-title'>Black Lives Matter</h2>
                        <p className='blm-subtitle'>McMurtry College stands with the movement &#8594;</p>
                    </div>
                </Link>
            </div>
            <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto' mb={[20, 50]} mt={[10, 20]} px={[0, 0, 'auto', 'auto']}>
                <h2 className='dr-section-title'>McMurtry Resources Guide</h2>
                <PDFViewer src='/static/mcmurtry_resources.pdf' />
                <div className='doc-link-container'>
                    <a href='../../../static/mcmurtry_resources.pdf' target='_blank' rel='noopener noreferrer' className='dr-download-link'>
                        <img src='/static/icons/file.svg' alt='' />
                        <span>Open Full Guide</span>
                    </a>
                </div>
            </Box>
            {resources.resources.map((section, i) => (
                <Box key={i} width={[0.95, 0.8]} mx='auto' mb={5}>
                    <div className='dr-subtitle-container'>
                        <h2 className='dr-subtitle'>{section.title}</h2>
                    </div>
                    <div className='dr-links-grid'>
                        {section.links.map(resource => (
                            <a href={resource.link} className='dr-link-card' key={resource.descr} target='_blank' rel='noopener noreferrer'>
                                <div className='dr-card-icon'>
                                    <img src='/static/icons/file.svg' alt='' />
                                </div>
                                <p className='dr-link-text'>{resource.descr}</p>
                            </a>
                        ))}
                    </div>
                </Box>
            ))}
        </div>
        <SiteFooter />
    </div>
);

export default DiversityResourcesPage;
