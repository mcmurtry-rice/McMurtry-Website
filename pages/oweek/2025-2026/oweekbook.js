import { Box } from 'rebass';
import { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import config from './config.json';
const oweekPdfPath = `/static/oweek/2025-2026/${config.pdfFilename}`;
const oweekPdfDownloadName = config.pdfDownloadName;
import './oweek.css';

const OweekBookPage = () => {
    const [pdfZoom, setPdfZoom] = useState(95);
    useEffect(() => {
        const update = () => {
            if (window.innerWidth <= 480) setPdfZoom(40);
            else if (window.innerWidth <= 768) setPdfZoom(65);
            else setPdfZoom(85);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return (
        <div className='page page-with-staggered-menu'>
            <Header />
            <SiteNavbar />
            <div className='oweek-page'>
                <div className='oweek-hero'>
                    <h1 className='oweek-main-title'>The O-Week Book</h1>
                </div>
                <Box width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[0, 0]}>
                    <div className='oweek-book-buttons'>
                        <a href={oweekPdfPath} download={oweekPdfDownloadName} className='oweek-book-button'>
                            <span>Download O-Week Book</span>
                        </a>
                        <button onClick={() => window.open(oweekPdfPath, '_blank').print()} className='oweek-book-button'>
                            <span>Print O-Week Book</span>
                        </button>
                    </div>
                </Box>
                <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto' mb={[20, 50]} mt={[10, 20]} className='oweek-book-container'>
                    <div className='oweek-book-embed'>
                        <embed src={`${oweekPdfPath}#zoom=${pdfZoom}&toolbar=0&navpanes=0&scrollbar=1`} type='application/pdf' />
                    </div>
                </Box>
            </div>
            <SiteFooter />
        </div>
    );
};

export default OweekBookPage;
