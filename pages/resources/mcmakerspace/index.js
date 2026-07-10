import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import Cards from '../../../components/ContactCard/ContactCard';
import { useSupabaseTable } from '../../../tools/database/useSupabaseTable';
import './index.css';

const COMMITTEE_NAME = 'McMakerspace';

const hours = [
    { day: 'Monday',    hours: '8 AM - Midnight' },
    { day: 'Tuesday',   hours: '8 AM - Midnight' },
    { day: 'Wednesday', hours: '8 AM - Midnight' },
    { day: 'Thursday',  hours: '8 AM - Midnight' },
    { day: 'Friday',    hours: '8 AM - 10 PM' },
    { day: 'Saturday',  hours: '8 AM - 10 PM' },
    { day: 'Sunday',    hours: '8 AM - Midnight' },
];

const mapToCard = (data) => data.map(({ name, email }) => ({ name, email }));

const McMakerspacePage = () => {
    const { rows: members, isLoading } = useSupabaseTable('committee_members');
    const committeeMembers = members.filter(m => m.committee_name === COMMITTEE_NAME);
    const leadership = committeeMembers.filter(m => m.role === 'head');
    const personnel = committeeMembers.filter(m => m.role === 'member');

    return (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <div className='mcmakerspace-page'>

            <header className='ev-hero'>
                <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                <h1 className='ev-hero-heading'>McMakerspace</h1>
                <p className='ev-hero-lede'>An interdisciplinary design space open to all Rice students: woodworking, 3D printing, CAD, electronics, and more.</p>
            </header>

            {/* Intro + quick links banner */}
            <div className='mcmakerspace-banner'>
                <div className='mcmakerspace-banner-body'>
                    <p className='mcmakerspace-banner-text'>The McMakerspace is located in <strong>Room 107 of McMurtry College</strong>, between the B and C stairwells. To gain swipe access, complete the safety quiz with a 100%. All instructions are in the Safety Guidelines below.</p>
                    <p className='mcmakerspace-banner-text'>No other college has anything like this. Join us to host workshops, help grow the space, and collaborate with the Murt community.</p>
                </div>
                <div className='mcmakerspace-banner-links'>
                    <a className='mcmakerspace-link-card' href='/static/documents/mcmakerspace_safety.pdf' target='_blank' rel='noopener noreferrer'>
                        <img src='/static/icons/file.svg' alt='' className='mcmakerspace-link-icon' />
                        <span>Safety Guidelines</span>
                    </a>
                    <a className='mcmakerspace-link-card' href='https://docs.google.com/document/d/1kNjTbBWRYK3Xxpgr73z7EFU3-pTms47MdRyTEex4w_E/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
                        <img src='/static/icons/building.svg' alt='' className='mcmakerspace-link-icon' />
                        <span>Equipment Info</span>
                    </a>
                </div>
            </div>

            {/* Hours + about two-col */}
            <div className='mcmakerspace-mid'>
                <div className='mcmakerspace-hours-panel'>
                    <h2 className='mcmakerspace-panel-title'>Hours</h2>
                    <div className='mcmakerspace-hours-list'>
                        {hours.map(({ day, hours: h }) => (
                            <div className='mcmakerspace-hour-row' key={day}>
                                <span className='mcmakerspace-hour-day'>{day}</span>
                                <span className='mcmakerspace-hour-sep' aria-hidden='true' />
                                <span className='mcmakerspace-hour-time'>{h}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mcmakerspace-about-panel'>
                    <h2 className='mcmakerspace-panel-title'>What We Offer</h2>
                    <ul className='mcmakerspace-offer-list'>
                        <li>Woodworking tools including miter saw and multiple other saws</li>
                        <li>3D printing</li>
                        <li>CAD software with 2 powerful computers (Fusion 360, SOLIDWORKS, Inventor)</li>
                        <li>Electronics components and microcontrollers</li>
                        <li>Whiteboard wall and projector</li>
                        <li>Arts Committee home base with full art supplies</li>
                    </ul>
                    <div className='mcmakerspace-about-note'>
                        <span className='mcmakerspace-note-label'>Access</span>
                        <p>Some equipment is locked. Contact the General Manager to unlock it. Complete the safety quiz with 100% to gain swipe access.</p>
                    </div>
                </div>
            </div>

            {/* People */}
            {isLoading ? (
                <div className='loading-container'>
                    <div className='loading-spinner'></div>
                    <p className='loading-text'>Loading...</p>
                </div>
            ) : (
                <React.Fragment>
                    {leadership.length > 0 && (
                        <section className='mcmakerspace-people-section'>
                            <h2 className='mcmakerspace-division-title'>Leadership</h2>
                            <Cards content={mapToCard(leadership)} minHeight='200px' />
                        </section>
                    )}

                    {personnel.length > 0 && (
                        <section className='mcmakerspace-people-section'>
                            <h2 className='mcmakerspace-division-title'>Student Personnel</h2>
                            <Cards content={mapToCard(personnel)} minHeight='200px' />
                        </section>
                    )}
                </React.Fragment>
            )}

        </div>
        <SiteFooter />
    </div>
    );
};

export default McMakerspacePage;
