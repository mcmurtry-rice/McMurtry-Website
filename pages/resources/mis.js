import React from 'react';
import { Box, Flex } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import Cards from '../../components/ContactCard/ContactCard';
import './mis.css';

const content = [
    "Like to build, create, or innovate? The MIS is your place! The McMurtry Innovation Space (MIS) is an interdisciplinary design space open to all Rice students designed to support the projects of individuals and groups on campus, and it's an awesome place to go for all things creative. We offer a ton of things, including woodworking tools (with a miter saw and multiple other types of saws), 3D printing, CAD software (with 2 powerful computers), electronics, a whiteboard wall, and a projector! This is also the home base for our Arts Committee, and we have a ton of supplies to fit your artsy needs as well. Since some of the equipment is locked, you must have the General Manager unlock it for you. Please see below for more information on our technicians.",
    "Fun fact: NO other college has anything like this! Join us to help us not only make the space cooler, but also to help host workshops and events for the Murt (and Rice) community that teach people about different aspects of engineering or art. We would love to hear your thoughts and work with your ideas to make the MIS the best space it can be!",
    "To gain swipe access to the MIS, first read the following safety guidelines. Then take the safety quiz, which is provided in the guidelines document. All students or faculty who complete the safety quiz with a 100% will gain swipe access to the space. The MIS is located in Room 107 of McMurtry College, between the B and C stairwells. Email us at mcminnovationspace@gmail.com for more information on what we have in the space, room reservations, or any questions."
];

const hours = [
    { "day": "Monday", "hours": "8 AM - Midnight" },
    { "day": "Tuesday", "hours": "8 AM - Midnight" },
    { "day": "Wednesday", "hours": "8 AM - Midnight" },
    { "day": "Thursday", "hours": "8 AM - Midnight" },
    { "day": "Friday", "hours": "8 AM - 10PM" },
    { "day": "Saturday", "hours": "8 AM - 10PM" },
    { "day": "Sunday", "hours": "8 AM - Midnight" }
];

const leadership = [
    {
        "name": "Lucas Dovalina (General Manager)",
        "major": "Mechanical Engineering",
        "college": "McMurtry",
        "email": "lbd1@rice.edu",
        "askMeAbout": "3D Printing, Assembly, Advanced CAD (Fusion 360, SOLIDWORKS, Inventor), Arduino and Raspberry Pi, Woodworking, Welding, Soldering, Hand Tools"
    }
];

const personnel = [
    {
        "name": "Raj Anthony",
        "major": "Electrical and Computer Engineering",
        "college": "McMurtry",
        "email": "rra2@rice.edu",
        "askMeAbout": "Computer/tech repair and troubleshooting, 3D Printing, CAD, Hand Tools, Shop Tools, Microcontrollers, Soldering"
    },
    {
        "name": "Bri Schulstad",
        "major": "Chemical Engineering + Earth, Environmental, and Planetary Sciences",
        "college": "McMurtry",
        "email": "bts8@rice.edu",
        "askMeAbout": "CAD, 3D printing, Hand Tools"
    },
    {
        "name": "Owen Krum",
        "major": "Mechanical Engineering",
        "college": "McMurtry",
        "email": "otk1@rice.edu",
        "askMeAbout": "Woodworking, Wood species, Vintage hand tools, Tool Restoration, Carpentry, Cabinet Making, CAD, Laser Cutting, Wood Finishing"
    },
    {
        "name": "Tristen Flores",
        "major": "Mechanical Engineering, Minor in CAAM",
        "college": "McMurtry",
        "email": "trf5@rice.edu",
        "askMeAbout": "CAD, Arduino, 3D Printing, Laser Cutting, Woodworking, Hand Tools, Power Tools"
    }
];

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
