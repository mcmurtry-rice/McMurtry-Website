import React from 'react';
import { Box } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import ContactCards from '../../components/ContactCard/ContactCard';
import { strive_liaisons } from '../../data/people/wellbeing.json';
import './wellbeing.css';

const StriveLiaisonsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />

        <div className='wellbeing-page'>
            <Title width={300} title='Strive Liaisons' />
            <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='wellbeing-description'>
                {strive_liaisons.description}
            </Box>
            <div>
                <ContactCards content={strive_liaisons.members} width={200} />
            </div>
        </div>

        <SiteFooter />
    </div>
);

export default StriveLiaisonsPage;
