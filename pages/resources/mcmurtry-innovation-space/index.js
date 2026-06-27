import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import Cards from '../../../components/ContactCard/ContactCard';
import './index.css';

const hours = [
    { day: 'Monday',    hours: '8 AM - Midnight' },
    { day: 'Tuesday',   hours: '8 AM - Midnight' },
    { day: 'Wednesday', hours: '8 AM - Midnight' },
    { day: 'Thursday',  hours: '8 AM - Midnight' },
    { day: 'Friday',    hours: '8 AM - 10 PM' },
    { day: 'Saturday',  hours: '8 AM - 10 PM' },
    { day: 'Sunday',    hours: '8 AM - Midnight' },
];

const leadership = [
    {
        name: 'Lucas Dovalina',
        position: 'General Manager',
        major: 'Mechanical Engineering',
        college: 'McMurtry',
        email: 'lbd1@rice.edu',
        askMeAbout: '3D Printing, Assembly, Advanced CAD (Fusion 360, SOLIDWORKS, Inventor), Arduino and Raspberry Pi, Woodworking, Welding, Soldering, Hand Tools',
    },
];

const personnel = [
    {
        name: 'Raj Anthony',
        major: 'Electrical and Computer Engineering',
        email: 'rra2@rice.edu',
        askMeAbout: 'Computer/tech repair and troubleshooting, 3D Printing, CAD, Hand Tools, Shop Tools, Microcontrollers, Soldering',
    },
    {
        name: 'Bri Schulstad',
        major: 'Chemical Engineering + Earth, Environmental, and Planetary Sciences',
        email: 'bts8@rice.edu',
        askMeAbout: 'CAD, 3D printing, Hand Tools',
    },
    {
        name: 'Owen Krum',
        major: 'Mechanical Engineering',
        email: 'otk1@rice.edu',
        askMeAbout: 'Woodworking, Wood species, Vintage hand tools, Tool Restoration, Carpentry, Cabinet Making, CAD, Laser Cutting, Wood Finishing',
    },
    {
        name: 'Tristen Flores',
        major: 'Mechanical Engineering, Minor in CAAM',
        email: 'trf5@rice.edu',
        askMeAbout: 'CAD, Arduino, 3D Printing, Laser Cutting, Woodworking, Hand Tools, Power Tools',
    },
];

const mapToCard = (data) => data.map(person => ({
    name: person.name,
    position: person.position,
    major: person.major,
    email: person.email,
    subjects: person.askMeAbout ? `Ask Me About: ${person.askMeAbout}` : undefined,
}));

const MISPage = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <div className='mis-page'>

            <header className='ev-hero'>
                <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                <h1 className='ev-hero-heading'>McMurtry Innovation Space</h1>
                <p className='ev-hero-lede'>An interdisciplinary design space open to all Rice students: woodworking, 3D printing, CAD, electronics, and more.</p>
            </header>

            {/* Intro + quick links banner */}
            <div className='mis-banner'>
                <div className='mis-banner-body'>
                    <p className='mis-banner-text'>The MIS is located in <strong>Room 107 of McMurtry College</strong>, between the B and C stairwells. To gain swipe access, complete the safety quiz with a 100%. All instructions are in the Safety Guidelines below.</p>
                    <p className='mis-banner-text'>No other college has anything like this. Join us to host workshops, help grow the space, and collaborate with the Murt community.</p>
                </div>
                <div className='mis-banner-links'>
                    <a className='mis-link-card' href='/static/documents/mis_safety.pdf' target='_blank' rel='noopener noreferrer'>
                        <img src='/static/icons/file.svg' alt='' className='mis-link-icon' />
                        <span>Safety Guidelines</span>
                    </a>
                    <a className='mis-link-card' href='https://docs.google.com/document/d/1kNjTbBWRYK3Xxpgr73z7EFU3-pTms47MdRyTEex4w_E/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
                        <img src='/static/icons/building.svg' alt='' className='mis-link-icon' />
                        <span>Equipment Info</span>
                    </a>
                </div>
            </div>

            {/* Hours + about two-col */}
            <div className='mis-mid'>
                <div className='mis-hours-panel'>
                    <h2 className='mis-panel-title'>Hours</h2>
                    <div className='mis-hours-list'>
                        {hours.map(({ day, hours: h }) => (
                            <div className='mis-hour-row' key={day}>
                                <span className='mis-hour-day'>{day}</span>
                                <span className='mis-hour-sep' aria-hidden='true' />
                                <span className='mis-hour-time'>{h}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mis-about-panel'>
                    <h2 className='mis-panel-title'>What We Offer</h2>
                    <ul className='mis-offer-list'>
                        <li>Woodworking tools including miter saw and multiple other saws</li>
                        <li>3D printing</li>
                        <li>CAD software with 2 powerful computers (Fusion 360, SOLIDWORKS, Inventor)</li>
                        <li>Electronics components and microcontrollers</li>
                        <li>Whiteboard wall and projector</li>
                        <li>Arts Committee home base with full art supplies</li>
                    </ul>
                    <div className='mis-about-note'>
                        <span className='mis-note-label'>Access</span>
                        <p>Some equipment is locked. Contact the General Manager to unlock it. Complete the safety quiz with 100% to gain swipe access.</p>
                    </div>
                </div>
            </div>

            {/* People */}
            <section className='mis-people-section'>
                <h2 className='mis-division-title'>Leadership</h2>
                <Cards content={mapToCard(leadership)} minHeight='200px' />
            </section>

            <section className='mis-people-section'>
                <h2 className='mis-division-title'>Student Personnel</h2>
                <Cards content={mapToCard(personnel)} minHeight='200px' />
            </section>

        </div>
        <SiteFooter />
    </div>
);

export default MISPage;
