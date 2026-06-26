import React, { useEffect } from 'react';
import Link from 'next/link';
import SiteNavbar from '../general/siteNavbar';
import SiteFooter from '../general/siteFooter';
import './intropage.css';

const heroPills = [
    { label: 'Calendar',              href: '/about/calendar' },
    { label: 'Book a Room',           href: '/resources/roomreservations' },
    { label: 'P-Card Requests',       href: '/resources/pcardmanagement' },
    { label: 'Financial Inclusivity', href: '/about/financialinclusivity' },
    { label: 'Donate',                href: 'https://riceconnect.rice.edu/donation/mcmurtry-college' }
];

const tripleStrip = [
    { src: '/static/figma-triple-1.png',         caption: 'O-Week traditions!',        subcap: 'Where the Murt family begins' },
    { src: '/static/figma-polaroid-commons.png', caption: 'McMurtry Commons',          subcap: 'The heart of the college' },
    { src: '/static/figma-triple-3.png',         caption: 'The amazing O-week team!',  subcap: 'Coords, advisors, A-Team' },
    { src: '/static/mcm10/yurt.jpg',             caption: 'Inside the Yurt',            subcap: 'Our award-winning dome' },
    { src: '/static/mcm_cohorts.jpg',            caption: 'McMurtry Cohorts',          subcap: 'Every class, one home' },
    { src: '/static/oweek/current/images/hero/arrival.jpg', caption: 'O-Week Arrival', subcap: 'Move-in day energy' }
];

const aboutLead =
    'McMurtry College is the 10th residential college to grace the Rice University campus.';

const aboutBody1 =
    'A LEED Gold certified building located on the northeastern edge of campus, it sits at the optimal location for those seeking the shortest path between their dorms and some of the most popular locations on campus, such as the academic quad (home to many buildings in which students will most likely have classes), Duncan Hall (for all things engineering), and the West Servery (the best place to eat at Rice).';

const aboutBody2Intro =
    "The college also boasts many fantastic amenities like a campfire pit in the middle of the quad, a wide roof with a lovely city view and a kitchen on every level. We affectionately call our commons the 'Yurt.' Other facilities include:";

const aboutAmenities = [
    "Burt's Teahouse and Deedee's Lounge on 5th floor",
    'an off-campus student lounge',
    'the game room',
    'music room',
    'McMurtry Innovation Space (MIS) on the 1st floor, with a plethora of study rooms throughout the college.'
];

const aboutBody3 =
    "McMurtry first opened its doors in the fall of 2009. The first generation of Murts numbered in the low seventies so Rice administration recruited some Will Rice College students to fill the remaining space. McMurtry survived the 'colonization' and the two groups have learned to coexist peacefully as sister colleges...until Beer Bike 2019.";

const burtBody1 =
    'Burt and Deedee McMurtry graduated from Rice University in 1956 and moved to the Bay Area in 1957 after Burt’s fifth year at Rice. Burt received Bachelor of Arts and Bachelor of Science degrees in Electrical Engineering from Rice in 1956 and 1957, respectively. He continued his education at Stanford, where he earned a Master of Science and a doctoral degree in electrical engineering in 1959 and 1962, respectively. A Rice trustee emeritus, Burt McMurtry was a private investor and a founding partner of Technology Venture Investors and Institutional Venture Associates in California.  Burt passed away on September 2nd, 2018 at his home in Palo Alto. Deedee McMurtry is an active volunteer, a trustee of the American Conservatory Theater (ACT) in San Francisco, and is involved with arts advisory committees at Stanford.';

const burtBody2 =
    'Burt served seventeen years on the Rice University board, eleven years on the Stanford University board (the last four as chairman, ending July 1, 2008,) and seven years on the board of the Carnegie Institution of Washington. Burt played a role in planning the residential college system back when he was a student at Rice. He was a student representative on the 1955 committee that set out the original mission and basic organizational design of the residential colleges.';

const burtBody3 =
    'The McMurtrys have a long history of support to Rice. They have established two endowed professorships and two endowed scholarships. The McMurtrys have also given to the Rice Annual Fund, the Class of 1956 Scholarship Fund and Anne and Charles Duncan Hall, where McMurtry Auditorium is named in their honor, in addition to many other areas of the campus.';

const Intro = () => {
    const stripRef = React.useRef(null);
    // Hover state: targetSpeed = where we want auto-speed to go (0 paused,
    // 1 full). currentSpeed lerps toward targetSpeed each frame for smooth
    // deceleration. This lets hover bring the carousel to a gentle stop
    // rather than freezing instantly.
    const speedRef = React.useRef({ current: 1, target: 1 });
    const dragRef = React.useRef({
        active: false,
        startX: 0,
        startScroll: 0,
        moved: false,
        lastX: 0,
        lastT: 0,
        velocity: 0       // px per frame, signed (+ = scrolling right)
    });
    const inertiaVelRef = React.useRef(0); // current decaying drift velocity

    // Infinite-loop guard: the carousel renders the list twice, so the track
    // is exactly 2x wider than needed. We keep the user in the middle half
    // (between quarter-width and three-quarter-width). Whenever scrollLeft
    // strays outside that band, snap by ±half — visually invisible because
    // the cards on both sides of the snap are identical.
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

    // Initialize: park the user at exactly the half-mark (center of the
    // duplicated track) so there's max room to scroll/drag in both
    // directions before triggering a wrap.
    useEffect(() => {
        const el = stripRef.current;
        if (!el) return;
        const id = requestAnimationFrame(() => {
            const half = el.scrollWidth / 2;
            if (half > 0) el.scrollLeft = half;
        });
        return () => cancelAnimationFrame(id);
    }, []);

    // Single rAF loop that handles three behaviors:
    //  1. Auto-advance the carousel slowly when nothing else is happening
    //  2. After a drag, decay the user's flick velocity (inertia) until ~0
    //  3. While the user is actively dragging, the loop does nothing
    //     (the pointer-move handler sets scrollLeft directly)
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const AUTO_SPEED = 1.2;          // px per frame at full speed
        const FRICTION = 0.94;           // inertia decay per frame (drag flicks)
        const VEL_FLOOR = 0.05;          // below this, inertia snaps to 0
        let raf;
        // scrollLeft setter rounds, so fractional auto-speed gets lost
        // round-trip. Keep a float accumulator and write integers.
        let scrollAcc = null;
        const tick = () => {
            const el = stripRef.current;
            if (el && !dragRef.current.active) {
                const s = speedRef.current;
                s.current = s.target;

                if (scrollAcc === null) scrollAcc = el.scrollLeft;
                // If something else (wrap handler, user) moved scrollLeft,
                // resync the accumulator so we don't fight it.
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

    // Pointer drag: click and drag horizontally to scroll. Track velocity
    // so release continues with inertia that slows to a stop.
    const onPointerDown = (e) => {
        const el = stripRef.current;
        if (!el) return;
        dragRef.current = {
            active: true,
            startX: e.clientX,
            startScroll: el.scrollLeft,
            moved: false,
            lastX: e.clientX,
            lastT: e.timeStamp || performance.now(),
            velocity: 0
        };
        inertiaVelRef.current = 0;   // cancel any existing coast
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

        // Apply delta INCREMENTALLY (since last move event) rather than
        // absolute from startScroll. This way, when the wrap handler jumps
        // scrollLeft from 0 to half during a leftward drag, subsequent moves
        // continue from the wrapped position instead of computing back to a
        // clamped-at-0 wall. Result: drag feels infinite in both directions.
        const instX = e.clientX - d.lastX;
        el.scrollLeft -= instX;

        // Track per-frame velocity (px per frame, sign matches scroll direction:
        // dragging finger left = positive scroll velocity = scrolling right).
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

        // Hand the flick velocity to the rAF loop, which will decay it.
        // Clamp magnitude so a wild flick can't shoot off forever.
        inertiaVelRef.current = Math.max(-40, Math.min(40, releaseVel));

        if (moved) {
            // Block the upcoming click event from a dragged card
            const block = (ev) => { ev.preventDefault(); ev.stopPropagation(); };
            el.addEventListener('click', block, { capture: true, once: true });
            setTimeout(() => el.removeEventListener('click', block, true), 0);
        }
    };

    // Hover handlers are no-ops now — carousel auto-scrolls continuously
    // regardless of mouse position. Left in place so removing the JSX
    // attributes doesn't break anything; the strip JSX no longer wires them.

    return (
    <div className="intro-mc">
        <SiteNavbar />

        {/* ============== HERO ============== */}
        <section className="mc-hero" aria-label="McMurtry College hero">
            <div className="mc-hero-bg">
                <img src="/static/figma-hero-building.png" alt="" className="mc-hero-bg-img" />
                <div className="mc-hero-bg-overlay" />
            </div>

            <h1 className="mc-hero-title">
                <span className="mc-hero-title-word">McMurtry</span>
                <img src="/static/figma-hero-crest.png" alt="" className="mc-hero-crest" />
                <span className="mc-hero-title-word">College</span>
            </h1>

            <nav className="mc-hero-pills" aria-label="Quick links">
                {heroPills.map((pill) => (
                    <Link href={pill.href} key={pill.label}>
                        <a className="mc-hero-pill">{pill.label}</a>
                    </Link>
                ))}
            </nav>

            <img
                src="/static/figma-yurt-band.png"
                alt=""
                className="mc-yurt-band"
                aria-hidden="true"
            />
        </section>

        {/* ============== TRIPLE PHOTO CAROUSEL ============== */}
        <section
            className="mc-strip"
            aria-label="College highlights"
        >
            <div
                className="mc-strip-row"
                ref={stripRef}
                onScroll={handleScroll}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
            >
                {/* Render the list TWICE so the auto-scroll + wrap handler
                    creates a seamless infinite loop. */}
                {[...tripleStrip, ...tripleStrip].map((item, i) => (
                    <figure className="mc-strip-card" key={`${item.caption}-${i}`}>
                        <div className="mc-strip-image-wrap">
                            <img
                                src={item.src}
                                alt={i < tripleStrip.length ? item.caption : ''}
                                className="mc-strip-image"
                                draggable={false}
                            />
                        </div>
                        <figcaption className="mc-strip-caption">
                            <span className="mc-strip-caption-main">{item.caption}</span>
                            <span className="mc-strip-caption-sub">{item.subcap}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* Edge fade overlays */}
            <div className="mc-strip-fade mc-strip-fade-left" aria-hidden="true" />
            <div className="mc-strip-fade mc-strip-fade-right" aria-hidden="true" />
        </section>

        {/* ============== ABOUT MCMURTRY ============== */}
        <section className="mc-about" aria-label="About McMurtry">
            <img
                src="/static/figma-about-swoosh.svg"
                alt=""
                className="mc-about-swoosh"
                aria-hidden="true"
            />
            <img
                src="/static/figma-ellipse-large.svg"
                alt=""
                className="mc-about-ellipse-large"
                aria-hidden="true"
            />
            <img
                src="/static/figma-ellipse-small.svg"
                alt=""
                className="mc-about-ellipse-small"
                aria-hidden="true"
            />

            <h2 className="mc-about-heading">About McMurtry</h2>

            <div className="mc-about-collage">
                <figure className="mc-about-card mc-about-card-1">
                    <img src="/static/mcm_commons.jpg" alt="" className="mc-about-card-img" />
                    <figcaption className="mc-about-card-caption">McMurtry Commons</figcaption>
                </figure>
                <figure className="mc-about-card mc-about-card-2">
                    <img src="/static/mcm10/yurt.jpg" alt="" className="mc-about-card-img" />
                    <figcaption className="mc-about-card-caption">Inside the Yurt</figcaption>
                </figure>
                <figure className="mc-about-card mc-about-card-3">
                    <img src="/static/oweek/current/images/hero/building.jpg" alt="" className="mc-about-card-img" />
                    <figcaption className="mc-about-card-caption">McMurtry College</figcaption>
                </figure>
            </div>

            <div className="mc-about-body">
                <p className="mc-about-lede">{aboutLead}</p>
                <p className="mc-about-para">{aboutBody1}</p>

                <hr className="mc-divider" aria-hidden="true" />

                <p className="mc-about-para">{aboutBody2Intro}</p>
                <ul className="mc-about-list">
                    {aboutAmenities.map((a) => (
                        <li key={a}>{a}</li>
                    ))}
                </ul>

                <hr className="mc-divider" aria-hidden="true" />

                <p className="mc-about-para">{aboutBody3}</p>
            </div>
        </section>

        {/* ============== BURT & DEEDEE ============== */}
        <section className="mc-burt" aria-label="Burt and Deedee McMurtry">
            <img
                src="/static/figma-burt-swoosh.svg"
                alt=""
                className="mc-burt-swoosh"
                aria-hidden="true"
            />
            <img
                src="/static/figma-ellipse-large.svg"
                alt=""
                className="mc-burt-ellipse-large"
                aria-hidden="true"
            />
            <img
                src="/static/figma-ellipse-small.svg"
                alt=""
                className="mc-burt-ellipse-small"
                aria-hidden="true"
            />

            <h2 className="mc-burt-heading">Bert &amp; Deedee Murt</h2>

            <div className="mc-burt-body">
                <p className="mc-burt-para">{burtBody1}</p>
                <hr className="mc-divider" aria-hidden="true" />
                <p className="mc-burt-para">{burtBody2}</p>
                <hr className="mc-divider" aria-hidden="true" />
                <p className="mc-burt-para">{burtBody3}</p>
            </div>

            <div className="mc-burt-collage">
                <figure className="mc-burt-card mc-burt-card-1">
                    <img
                        src="/static/burt_deedee.jpg"
                        alt=""
                        className="mc-burt-card-img"
                    />
                    <figcaption className="mc-burt-card-caption">
                        Burt &amp; Deedee McMurtry
                    </figcaption>
                </figure>
                <figure className="mc-burt-card mc-burt-card-2">
                    <img
                        src="/static/mcm10/associates.jpg"
                        alt=""
                        className="mc-burt-card-img"
                    />
                    <figcaption className="mc-burt-card-caption">
                        Associates Dinner
                    </figcaption>
                </figure>
            </div>
        </section>

        {/* ============== FIND US AT RICE ============== */}
        <section className="mc-find-us" aria-label="Find us at Rice">
            <div className="mc-find-us-inner">
                <h2 className="mc-find-us-heading">Find Us at Rice</h2>
                <p className="mc-find-us-address">
                    McMurtry College &middot; 1605 Rice Blvd &middot; Houston, TX 77005
                </p>
                <div className="mc-find-us-map-wrap">
                    <iframe
                        title="Map to McMurtry College at Rice University"
                        className="mc-find-us-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.0!2d-95.401!3d29.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c1665d8e3c0d%3A0x0!2sMcMurtry%20College%2C%20Rice%20University!5e0!3m2!1sen!2sus!4v1700000000000"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen=""
                    />
                    {/* Transparent overlay blocks scroll-to-zoom interception
                        (which is what triggers Google's "use Ctrl+scroll" shadow).
                        Click anywhere to enable map interaction. */}
                    <div
                        className="mc-find-us-map-cover"
                        aria-hidden="true"
                        onClick={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                </div>
                <a
                    className="mc-find-us-cta"
                    href="https://www.google.com/maps/dir/?api=1&destination=McMurtry+College+Rice+University+1605+Rice+Blvd+Houston+TX+77005"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get Directions
                    <span aria-hidden="true" className="mc-find-us-cta-arrow">›</span>
                </a>
            </div>
        </section>

        <SiteFooter />
    </div>
    );
};

export default Intro;
