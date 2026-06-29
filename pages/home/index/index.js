import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import StripCarousel from '../../../components/StripCarousel/StripCarousel';
import './index.css';

const heroPills = [
    { label: 'Calendar',              href: '/home/calendar' },
    { label: 'Book a Room',           href: '/resources/room-reservations' },
    { label: 'P-Card Requests',       href: '/resources/pcard-requests' },
    { label: 'Financial Inclusivity', href: '/resources/financial-inclusivity' },
    { label: 'Donate',                href: 'https://riceconnect.rice.edu/donation/mcmurtry-college' }
];

const tripleStrip = [
    { src: '/static/general_pics/mcm-quad.png',      caption: 'McMurtry College',         subcap: 'Our home on campus' },
    { src: '/static/general_pics/oweek-coords.png', caption: 'O-Week Coordinators',      subcap: 'Leading you through the week' },
    { src: '/static/general_pics/yurt-evening.png', caption: 'The Yurt at Night',        subcap: 'Our award-winning dome' },
    { src: '/static/general_pics/yurt.jpg',         caption: 'Inside the Yurt',          subcap: 'The heart of the college' },
    { src: '/static/general_pics/mcm-event.png',    caption: 'McMurtry O-Week',          subcap: 'Every class, one home' },
    { src: '/static/oweek/2025/images/hero/arrival.jpg', caption: 'O-Week Arrival',           subcap: 'Move-in day energy' },
    { src: '/static/general_pics/accioweek.jpg',              caption: 'AcciO-Week',               subcap: 'A magical O-Week theme' },
    { src: '/static/general_pics/marshmalloweek.jpg',         caption: 'MarshmallO-Week',          subcap: 'Sweet memories at McMurtry' },
    { src: '/static/general_pics/mcscottishnight.jpg',        caption: 'Scottish Night',           subcap: 'McMurtry traditions' },
    { src: '/static/general_pics/ufoweek.jpg',                caption: 'UFO-Week',                 subcap: 'Out of this world O-Week' },
];


const Home = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <div className='intro-mc'>

            <section className='mc-hero' aria-label='McMurtry College hero'>
                <div className='mc-hero-bg'>
                    <img src='/static/general_pics/mcm-quad.png' alt='' className='mc-hero-bg-img' />
                    <div className='mc-hero-bg-overlay' />
                </div>
                <h1 className='mc-hero-title'>
                    <span className='mc-hero-title-word'>McMurtry</span>
                    <img src='/static/logos/hero-crest.png' alt='' className='mc-hero-crest' />
                    <span className='mc-hero-title-word'>College</span>
                </h1>
                <nav className='mc-hero-pills' aria-label='Quick links'>
                    {heroPills.map((pill) => (
                        <Link href={pill.href} key={pill.label}>
                            <a className='mc-hero-pill'>{pill.label}</a>
                        </Link>
                    ))}
                </nav>
            </section>

            <StripCarousel images={tripleStrip} fadeWidth="22%" />

            <section className='mc-find-us' aria-label='Find us at Rice'>
                <div className='mc-find-us-inner'>
                    <h2 className='mc-find-us-heading'>Find Us at Rice</h2>
                    <p className='mc-find-us-address'>
                        McMurtry College &middot; 1605 Rice Blvd &middot; Houston, TX 77005
                    </p>
                    <div className='mc-find-us-map-wrap'>
                        <iframe
                            title='Map to McMurtry College at Rice University'
                            className='mc-find-us-map'
                            src='https://map.concept3d.com/?id=473#!ce/12631?m/119194?s/?sbc/'
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            allowFullScreen=''
                        />
                    </div>
                    <a
                        className='mc-find-us-cta'
                        href='https://www.google.com/maps/dir/?api=1&destination=McMurtry+College+Rice+University+1605+Rice+Blvd+Houston+TX+77005'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Get Directions
                        <span aria-hidden='true' className='mc-find-us-cta-arrow'>&rsaquo;</span>
                    </a>
                </div>
            </section>

            <SiteFooter />
        </div>
    </div>
);

export default Home;
