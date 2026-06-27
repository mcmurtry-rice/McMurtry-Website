import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import CustomCalendar from '../../../components/CustomCalendar/CustomCalendar';
import './index.css';

const CalendarPage = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />

        <section className="ev-page" aria-label="Events Calendar">
            <header className="ev-hero">
                <img src="/static/icons/about-swoosh.svg" alt="" className="ev-hero-swoosh" aria-hidden="true" />
                <img src="/static/icons/ellipse-large.svg" alt="" className="ev-hero-ellipse-large" aria-hidden="true" />
                <img src="/static/icons/ellipse-small.svg" alt="" className="ev-hero-ellipse-small" aria-hidden="true" />
                <h1 className="ev-hero-heading">Events Calendar</h1>
                <p className="ev-hero-lede">Everything happening at McMurtry! Tap any event for details.</p>
            </header>

            <div className="ev-calendar-wrap">
                <CustomCalendar />
            </div>

            <div className="ev-cta-row">
                <a
                    className="ev-cta"
                    href="https://calendar.google.com/calendar/u/0/r?cid=mcmsecretary@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <line x1="12" y1="14" x2="12" y2="18" />
                        <line x1="10" y1="16" x2="14" y2="16" />
                    </svg>
                    Add to My Calendar
                    <span aria-hidden="true" className="ev-cta-arrow">&rsaquo;</span>
                </a>
            </div>
        </section>

        <SiteFooter />
    </div>
);

export default CalendarPage;


