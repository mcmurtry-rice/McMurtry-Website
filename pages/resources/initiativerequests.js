import React from 'react';
import { Box } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import './initiativerequest.css';

const InitiativeRequestsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='initiative-request-page'>
            <div className='ir-hero'>
                <h1 className='ir-main-title'>McFUNd</h1>
                <p className='ir-subtitle'>Request funding for your college initiatives</p>
            </div>
            <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto' mb={[20, 50]} mt={[10, 20]} px={[0, 0, 'auto', 'auto']} className='ir-form-container'>
                <iframe
                    src='https://docs.google.com/forms/d/e/1FAIpQLSdHfWng8IW37QGSMz9lObCNHCRC1ifZjGxola_7udR-4A-f-Q/viewform?embedded=true'
                    width='100%'
                    height='100%'
                    frameBorder='0'
                    marginHeight='0'
                    marginWidth='0'
                    title='McFUNd Request'
                >
                    Loading…
                </iframe>
            </Box>
        </div>
        <SiteFooter />
    </div>
);

export default InitiativeRequestsPage;
