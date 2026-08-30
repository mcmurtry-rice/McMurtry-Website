import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import CustomCalendar from '../../../components/CustomCalendar/CustomCalendar';
import { useSiteLinks } from '../../../tools/database/useSiteLinks';
import './index.css';

// Fallbacks: rendered on first paint and whenever Supabase is unreachable.
// Live values are the 'room_reservation_form' / 'room_reservations_calendar_*'
// rows in site_links - edit them there, not here.
const RESERVATION_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSco26DjasAvhMKl-CNafI35-wtoLtoYJBGHPd8v8FxgMbbhYQ/viewform?usp=sf_link';
const RESERVATIONS_CALENDAR_ID = '2357af8ea321219e69f5f08fe7bd16bf6663c3a5a5f54a9a1f5052972ed93726@group.calendar.google.com';
const RESERVATIONS_CALENDAR_SUBSCRIBE_URL = 'https://calendar.google.com/calendar/u/1?cid=MjM1N2FmOGVhMzIxMjE5ZTY5ZjVmMDhmZTdiZDE2YmY2NjYzYzNhNWE1ZjU0YTlhMWY1MDUyOTcyZWQ5MzcyNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t';

const RoomReservationsPage = () => {
    const links = useSiteLinks({
        room_reservation_form: RESERVATION_FORM_URL,
        room_reservations_calendar_id: RESERVATIONS_CALENDAR_ID,
        room_reservations_calendar_subscribe: RESERVATIONS_CALENDAR_SUBSCRIBE_URL,
    });

    return (
        <div className='page page-light'>
            <Header />
            <SiteNavbar />
            <div className='room-reservations-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Room Reservations</h1>
                    <p className='ev-hero-lede'>Book a McMurtry space for studying, meetings, or events.</p>
                </header>
                <section className='rr-section rr-section-left'>
                    <div className='rr-blob'>
                        <h2 className='rr-blob-title'>Bookable rooms &amp; spaces</h2>
                        <p className='rr-blob-subtitle'>Category 1</p>
                    </div>
                    <div className='rr-cta-row rr-cta-row-mobile'>
                        <a className='rr-cta' href={links.room_reservation_form} target='_blank' rel='noopener noreferrer'>
                            Open Reservation Form <span aria-hidden='true' className='rr-cta-arrow'>&rarr;</span>
                        </a>
                    </div>
                    <div className='rr-section-body'>
                        <div className='rr-room-grid'>
                            {[
                                { name: 'Private Dining Room', loc: 'Above West Servery' },
                                { name: 'Room 114', loc: '1st floor &middot; study room' },
                                { name: 'TV Lounge', loc: '1st floor' },
                                { name: '4th Floor Lounge', loc: '4th floor' },
                                { name: 'Music Room', loc: '1st floor' },
                                { name: 'Bonfire Pit', loc: 'Quad &middot; not a Quad reservation' },
                            ].map(r => (
                                <div className='rr-room-card' key={r.name}>
                                    <span className='rr-room-name'>{r.name}</span>
                                    <span className='rr-room-loc'>{r.loc}</span>
                                </div>
                            ))}
                        </div>
                        <div className='rr-callout'>
                            <span className='rr-callout-label'>Time cap</span>
                            <p>Up to <strong>4 hours per room per day</strong>. Need a longer block? Email <a href='mailto:mcmsecretary@gmail.com'>mcmsecretary@gmail.com</a>.</p>
                        </div>
                        <p className='rr-lede'>Online reservations open <strong>up to 3 weeks in advance</strong>.</p>
                        <div className='rr-cta-row rr-cta-row-desktop'>
                            <a className='rr-cta' href={links.room_reservation_form} target='_blank' rel='noopener noreferrer'>
                                Open Reservation Form <span aria-hidden='true' className='rr-cta-arrow'>&rarr;</span>
                            </a>
                        </div>
                        <div className='rr-notes'>
                            <h3>After you submit</h3>
                            <ul>
                                <li>Your booking should appear on the calendar below right away, and a confirmation email will follow.</li>
                                <li>No confirmation? Re-submit the form carefully, or email the secretaries.</li>
                                <li>To cancel, repeat, or change a booking, email the secretaries.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='rr-section rr-section-right'>
                    <div className='rr-blob'>
                        <h2 className='rr-blob-title'>Approval-required spaces</h2>
                        <p className='rr-blob-subtitle'>Category 2</p>
                    </div>
                    <div className='rr-section-body'>
                        <div className='rr-room-grid rr-room-grid-2'>
                            <div className='rr-room-card'><span className='rr-room-name'>McMurtry Quad</span><span className='rr-room-loc'>Outdoor &middot; large gatherings</span></div>
                            <div className='rr-room-card'><span className='rr-room-name'>McMurtry Commons</span><span className='rr-room-loc'>Main hall &middot; events</span></div>
                        </div>
                        <div className='rr-callout'>
                            <span className='rr-callout-label'>Approval needed</span>
                            <p>Category 2 spaces and recurring bookings require McMurtry Leadership approval. Email <a href='mailto:mcmsecretary@gmail.com'>mcmsecretary@gmail.com</a>.</p>
                        </div>
                    </div>
                </section>
                <div className='ev-calendar-wrap'>
                    <CustomCalendar calendarId={links.room_reservations_calendar_id} />
                </div>
                <div className='ev-cta-row'>
                    <a className='ev-cta' href={links.room_reservations_calendar_subscribe} target='_blank' rel='noopener noreferrer'>
                        Add to My Calendar <span aria-hidden='true' className='ev-cta-arrow'>&rsaquo;</span>
                    </a>
                    <p className='rr-contact-line'>Questions? Email <a href='mailto:mcmsecretary@gmail.com'>mcmsecretary@gmail.com</a>.</p>
                </div>
            </div>
            <SiteFooter />
        </div>
    );
};

export default RoomReservationsPage;


