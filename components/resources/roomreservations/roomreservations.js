import React from 'react';
import './roomreservations.css';
import '../../events/events/events.css';
import CustomCalendar from '../../events/CustomCalendar';


const RoomReservations = () => (
    <div className='room-reservations-page'>
        <header className='ev-hero'>
            <img
                src='/static/figma-about-swoosh.svg'
                alt=''
                className='ev-hero-swoosh'
                aria-hidden='true'
            />
            <img
                src='/static/figma-ellipse-large.svg'
                alt=''
                className='ev-hero-ellipse-large'
                aria-hidden='true'
            />
            <img
                src='/static/figma-ellipse-small.svg'
                alt=''
                className='ev-hero-ellipse-small'
                aria-hidden='true'
            />

            <h1 className='ev-hero-heading'>Room Reservations</h1>
            <p className='ev-hero-lede'>
                Book a McMurtry space for studying, meetings, or events.
            </p>
        </header>
        <section className='rr-section rr-section-left'>
            <div className='rr-blob'>
                <h2 className='rr-blob-title'>Bookable rooms &amp; spaces</h2>
                <p className='rr-blob-subtitle'>Category 1</p>
            </div>
            <div className='rr-section-body'>
                <div className='rr-room-grid'>
                    <div className='rr-room-card'>
                        <span className='rr-room-name'>Private Dining Room</span>
                        <span className='rr-room-loc'>Above West Servery</span>
                    </div>
                    <div className='rr-room-card'>
                        <span className='rr-room-name'>Room 114</span>
                        <span className='rr-room-loc'>1st floor &middot; study room</span>
                    </div>
                    <div className='rr-room-card'>
                        <span className='rr-room-name'>TV Lounge</span>
                        <span className='rr-room-loc'>1st floor</span>
                    </div>
                    <div className='rr-room-card'>
                        <span className='rr-room-name'>4th Floor Lounge</span>
                        <span className='rr-room-loc'>4th floor</span>
                    </div>
                    <div className='rr-room-card'>
                        <span className='rr-room-name'>Music Room</span>
                        <span className='rr-room-loc'>1st floor</span>
                    </div>
                    <div className='rr-room-card'>
                        <span className='rr-room-name'>Bonfire Pit</span>
                        <span className='rr-room-loc'>Quad &middot; not a Quad reservation</span>
                    </div>
                </div>

                <div className='rr-callout'>
                    <span className='rr-callout-label'>Time cap</span>
                    <p>Up to <strong>4 hours per room per day</strong>. You can still book other spaces on the same day; need a longer block? Email <a href='mailto:mcmsecretary@gmail.com'>mcmsecretary@gmail.com</a>.</p>
                </div>

                <p className='rr-lede'>Online reservations open <strong>up to 3 weeks in advance</strong>.</p>

                <div className='rr-cta-row'>
                    <a className='rr-cta' href='https://docs.google.com/forms/d/e/1FAIpQLSco26DjasAvhMKl-CNafI35-wtoLtoYJBGHPd8v8FxgMbbhYQ/viewform?usp=sf_link' target='_blank' rel='noopener noreferrer'>
                        Open Reservation Form
                        <span aria-hidden='true' className='rr-cta-arrow'>&rarr;</span>
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
                    <div className='rr-room-card'>
                        <span className='rr-room-name'>McMurtry Quad</span>
                        <span className='rr-room-loc'>Outdoor &middot; large gatherings</span>
                    </div>
                    <div className='rr-room-card'>
                        <span className='rr-room-name'>McMurtry Commons</span>
                        <span className='rr-room-loc'>Main hall &middot; events</span>
                    </div>
                </div>

                <div className='rr-callout'>
                    <span className='rr-callout-label'>Approval needed</span>
                    <p>Category 2 spaces, recurring bookings, and any reservation <strong>more than 3 weeks out</strong> require McMurtry Leadership approval. Email <a href='mailto:mcmsecretary@gmail.com'>mcmsecretary@gmail.com</a> with the details and expect a slower turnaround.</p>
                </div>
            </div>
        </section>
        
        <div className='ev-calendar-wrap'>
            <CustomCalendar calendarId="2357af8ea321219e69f5f08fe7bd16bf6663c3a5a5f54a9a1f5052972ed93726@group.calendar.google.com" />
        </div>
        <div className='ev-cta-row'>
            <a
                className='ev-cta'
                href='https://calendar.google.com/calendar/u/1?cid=MjM1N2FmOGVhMzIxMjE5ZTY5ZjVmMDhmZTdiZDE2YmY2NjYzYzNhNWE1ZjU0YTlhMWY1MDUyOTcyZWQ5MzcyNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t'
                target='_blank'
                rel='noopener noreferrer'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                >
                    <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
                    <line x1='16' y1='2' x2='16' y2='6' />
                    <line x1='8' y1='2' x2='8' y2='6' />
                    <line x1='3' y1='10' x2='21' y2='10' />
                    <line x1='12' y1='14' x2='12' y2='18' />
                    <line x1='10' y1='16' x2='14' y2='16' />
                </svg>
                Add to My Calendar
                <span aria-hidden='true' className='ev-cta-arrow'>›</span>
            </a>
            <p className='rr-contact-line'>
                Questions? Email <a href='mailto:mcmsecretary@gmail.com'>mcmsecretary@gmail.com</a>.
            </p>
        </div>
    </div>
)

export default RoomReservations;