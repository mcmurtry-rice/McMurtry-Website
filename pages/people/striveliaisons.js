import React from 'react';
import { Box } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import ContactCards from '../../components/ContactCard/ContactCard';
import './wellbeing.css';

const strive_liaisons = {
    "description": "STRIVE is a student-driven coalition that empowers all members of the Rice community to play an active role in eliminating gender-based inequality and sexual violence. We do this by engaging in positive, open dialogue, pooling on and off-campus resources, and providing the tools and skills necessary to create cultural change.",
    "members": [
        { "name": "Emily Duffus", "phone": "(973) 508-6538", "email": "ekd2@rice.edu" },
        { "name": "Morgan Gage", "email": "mag26@rice.edu" },
        { "name": "Sarah Swackhamer", "email": "sws5@rice.edu" },
        { "name": "Callie Carnahan", "email": "cfc2@rice.edu" }
    ]
};

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
