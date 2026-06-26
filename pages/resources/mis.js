import React from 'react';
import { Box, Flex } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import Cards from '../../components/ContactCard/ContactCard';
import { content, hours, leadership, personnel } from '../../data/resources/mis.json';
import './mis.css';

const MISLinks = [
    { text: 'Safety Guidelines',     icon: '/static/icons/file.svg',     link: '../../../../static/mis_safety.pdf' },
    { text: 'Equipment Information', icon: '/static/icons/building.svg',  link: 'https://docs.google.com/document/d/1kNjTbBWRYK3Xxpgr73z7EFU3-pTms47MdRyTEex4w_E/edit?usp=sharing' },
    { text: 'Email us at',           icon: '/static/icons/email.svg',     link: 'mailto:mcminnovationspace@gmail.com' },
];

const mapToCard = (data) => data.map(person => {
    let name = person.name;
    let position = undefined;
    if (name.includes('(')) {
        const parts = name.split('(');
        name = parts[0].trim();
        position = parts[1].replace(')', '').trim();
    }
    return {
        name, position,
        major: person.major,
        email: person.email,
        subjects: person.askMeAbout ? `Ask Me About: ${person.askMeAbout}` : undefined,
    };
});

const MISPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='mis-page'>
            <div className='mis-hero'>
                <h1 className='mis-main-title'>McMurtry Innovation Space</h1>
            </div>
            <Box className='mis-paragraphs' width={[1, 0.8, 0.7, 0.6]} ml='auto' mr='auto'>
                {content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </Box>
            <Flex flexWrap='wrap' justifyContent='center' className='mis-links-container'>
                {MISLinks.map(({ text, icon, link }) => (
                    <a href={link} className='mis-action-card' key={text} target='_blank' rel='noopener noreferrer'>
                        <div className='mis-action-icon'><img src={icon} alt='' /></div>
                        <span className='mis-action-title'>{text}</span>
                        {text.includes('Email') && <span className='mis-action-subtitle'>mcminnovationspace@gmail.com</span>}
                    </a>
                ))}
            </Flex>
            <Box width={[0.9, 0.5]} mx='auto' className='mis-section-container'>
                <h2 className='mis-section-title'>Hours</h2>
                <div className='mis-hours-list'>
                    {hours.map(({ day, hours: h }) => (
                        <div className='mis-hour-row' key={day}>
                            <span className='day'>{day}</span>
                            <span className='separator'></span>
                            <span className='time'>{h}</span>
                        </div>
                    ))}
                </div>
            </Box>
            <Box width={[1, 0.9]} mx='auto' mt={5}>
                <h2 className='division-title'>Leadership</h2>
                <Cards content={mapToCard(leadership)} minHeight='200px' width={[1, 0.45, 0.3]} />
            </Box>
            <Box width={[1, 0.9]} mx='auto' mt={5} mb={5}>
                <h2 className='division-title'>Student Personnel</h2>
                <Cards content={mapToCard(personnel)} minHeight='200px' width={[1, 0.45, 0.3]} />
            </Box>
        </div>
        <SiteFooter />
    </div>
);

export default MISPage;
