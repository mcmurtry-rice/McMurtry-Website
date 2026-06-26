import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header/Header';
import SiteNavbar from '../components/navbar/Navbar';
import SiteFooter from '../components/Footer/Footer';
import './intropage.css';

const heroPills = [
    { label: 'Calendar',              href: '/calendar' },
    { label: 'Book a Room',           href: '/resources/roomreservations' },
    { label: 'P-Card Requests',       href: '/resources/pcardmanagement' },
    { label: 'Financial Inclusivity', href: '/financialinclusivity' },
    { label: 'Donate',                href: 'https://riceconnect.rice.edu/donation/mcmurtry-college' }
];

const tripleStrip = [
    { src: '/static/figma-triple-1.png',         caption: 'O-Week traditions!',        subcap: 'Where the Murt family begins' },
    { src: '/static/figma-polaroid-commons.png', caption: 'McMurtry Commons',          subcap: 'The heart of the college' },
    { src: '/static/figma-triple-3.png',         caption: 'The amazing O-week team!',  subcap: 'Coords, advisors, A-Team' },
    { src: '/static/yurt.jpg',                    caption: 'Inside the Yurt',            subcap: 'Our award-winning dome' },
    { src: '/static/mcm_cohorts.jpg',            caption: 'McMurtry Cohorts',          subcap: 'Every class, one home' },
    { src: '/static/oweek/current/images/hero/arrival.jpg', caption: 'O-Week Arrival', subcap: 'Move-in day energy' }
];

const Home = () => {
    const stripRef = React.useRef(null);
    const speedRef = React.useRef({ current: 1, target: 1 });
    const dragRef = React.useRef({
        active: false, startX: 0, startScroll: 0,
        moved: false, lastX: 0, lastT: 0, velocity: 0
    });
    const inertiaVelRef = React.useRef(0);

    const handleScroll = React.useCallback(() => {
        const el = stripRef.current;
        if (!el) return;
        const half = el.scrollWidth / 2;
        if (!half) return;
        const quarter = half / 2;
        if (el.scrollLeft >= half + quarter) {
            el.scrollLeft = el.scrollLeft - half;
        } else if (el.scrollLeft <= quarter) {
            el.scrollLeft = el.scrollLeft + half;
        }
    }, []);

    useEffect(() => {
        const el = stripRef.current;
        if (!el) return;
        const id = requestAnimationFrame(() => {
            const half = el.scrollWidth / 2;
            if (half > 0) el.scrollLeft = half;
        });
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const AUTO_SPEED = 1.2;
        const FRICTION = 0.94;
        const VEL_FLOOR = 0.05;
        let raf;
        let scrollAcc = null;
        const tick = () => {
            const el = stripRef.current;
            if (el && !dragRef.current.active) {
                const s = speedRef.current;
                s.current = s.target;
                if (scrollAcc === null) scrollAcc = el.scrollLeft;
                if (Math.abs(scrollAcc - el.scrollLeft) > 1) scrollAcc = el.scrollLeft;
                if (Math.abs(inertiaVelRef.current) > VEL_FLOOR) {
                    scrollAcc += inertiaVelRef.current;
                    inertiaVelRef.current *= FRICTION;
                } else {
                    inertiaVelRef.current = 0;
                    scrollAcc += AUTO_SPEED * s.current;
                }
                el.scrollLeft = scrollAcc;
            }
            raf = window.requestAnimationFrame(tick);
        };
        raf = window.requestAnimationFrame(tick);
        return () => window.cancelAnimationFrame(raf);
    }, []);

    const onPointerDown = (e) => {
        const el = stripRef.current;
        if (!el) return;
        dragRef.current = {
            active: true, startX: e.clientX, startScroll: el.scrollLeft,
            moved: false, lastX: e.clientX,
            lastT: e.timeStamp || performance.now(), velocity: 0
        };
        inertiaVelRef.current = 0;
        el.setPointerCapture && el.setPointerCapture(e.pointerId);
        el.classList.add('mc-strip-dragging');
    };
    const onPointerMove = (e) => {
        const d = dragRef.current;
        if (!d.active) return;
        const el = stripRef.current;
        if (!el) return;
        const dx = e.clientX - d.startX;
        if (Math.abs(dx) > 5) d.moved = true;
        const instX = e.clientX - d.lastX;
        el.scrollLeft -= instX;
        const now = e.timeStamp || performance.now();
        const dt = Math.max(now - d.lastT, 1);
        d.velocity = -instX * (16.67 / dt);
        d.lastX = e.clientX;
        d.lastT = now;
    };
    const onPointerUp = (e) => {
        const el = stripRef.current;
        const d = dragRef.current;
        const moved = d.moved;
        const releaseVel = d.velocity;
        d.active = false;
        if (!el) return;
        try { el.releasePointerCapture && el.releasePointerCapture(e.pointerId); } catch (_) {}
        el.classList.remove('mc-strip-dragging');
        inertiaVelRef.current = Math.max(-40, Math.min(40, releaseVel));
        if (moved) {
            const block = (ev) => { ev.preventDefault(); ev.stopPropagation(); };
            el.addEventListener('click', block, { capture: true, once: true });
            setTimeout(() => el.removeEventListener('click', block, true), 0);
        }
    };

    return (
        <div className='page page-light'>
            <Header />
            <div className='intro-mc'>
                <SiteNavbar />

                <section className='mc-hero' aria-label='McMurtry College hero'>
                    <div className='mc-hero-bg'>
                        <img src='/static/figma-hero-building.png' alt='' className='mc-hero-bg-img' />
                        <div className='mc-hero-bg-overlay' />
                    </div>
                    <h1 className='mc-hero-title'>
                        <span className='mc-hero-title-word'>McMurtry</span>
                        <img src='/static/figma-hero-crest.png' alt='' className='mc-hero-crest' />
                        <span className='mc-hero-title-word'>College</span>
                    </h1>
                    <nav className='mc-hero-pills' aria-label='Quick links'>
                        {heroPills.map((pill) => (
                            <Link href={pill.href} key={pill.label}>
                                <a className='mc-hero-pill'>{pill.label}</a>
                            </Link>
                        ))}
                    </nav>
                    <img src='/static/figma-yurt-band.png' alt='' className='mc-yurt-band' aria-hidden='true' />
                </section>

                <section className='mc-strip' aria-label='College highlights'>
                    <div
                        className='mc-strip-row'
                        ref={stripRef}
                        onScroll={handleScroll}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerCancel={onPointerUp}
                    >
                        {[...tripleStrip, ...tripleStrip].map((item, i) => (
                            <figure className='mc-strip-card' key={`${item.caption}-${i}`}>
                                <div className='mc-strip-image-wrap'>
                                    <img
                                        src={item.src}
                                        alt={i < tripleStrip.length ? item.caption : ''}
                                        className='mc-strip-image'
                                        draggable={false}
                                    />
                                </div>
                                <figcaption className='mc-strip-caption'>
                                    <span className='mc-strip-caption-main'>{item.caption}</span>
                                    <span className='mc-strip-caption-sub'>{item.subcap}</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <div className='mc-strip-fade mc-strip-fade-left' aria-hidden='true' />
                    <div className='mc-strip-fade mc-strip-fade-right' aria-hidden='true' />
                </section>

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
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.0!2d-95.401!3d29.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c1665d8e3c0d%3A0x0!2sMcMurtry%20College%2C%20Rice%20University!5e0!3m2!1sen!2sus!4v1700000000000'
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                                allowFullScreen=''
                            />
                            <div
                                className='mc-find-us-map-cover'
                                aria-hidden='true'
                                onClick={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                        </div>
                        <a
                            className='mc-find-us-cta'
                            href='https://www.google.com/maps/dir/?api=1&destination=McMurtry+College+Rice+University+1605+Rice+Blvd+Houston+TX+77005'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Get Directions
                            <span aria-hidden='true' className='mc-find-us-cta-arrow'>›</span>
                        </a>
                    </div>
                </section>

                <SiteFooter />
            </div>
        </div>
    );
};

export default Home;
