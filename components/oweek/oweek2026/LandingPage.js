import React from 'react';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';
import { WatercolorFilters, WatercolorBlotch } from './WatercolorFilters';
import ScrollToTop from './ScrollToTop';
import Sidebar from './Sidebar';
var countdown = require('countdown');

const MOVE_IN_DATE = new Date(2026, 7, 16);

const CAROUSEL_IMAGES = [
    { src: '/static/oweek/2026/carousel/photo4.jpg', alt: 'Color Run', caption: 'McMurtry Spirit' },
    { src: '/static/oweek/2026/carousel/photo3.jpg', alt: 'Cheering in the Stands', caption: 'Murt Pride' },
    { src: '/static/oweek/2026/carousel/photo1.jpg', alt: 'Dancing in the Commons', caption: 'O-Week Traditions' },
    { src: '/static/oweek/current/images/hero/building.jpg', alt: 'McMurtry College Quad', caption: 'Your New Home' },
];

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: '' };
        this.updateTime = this.updateTime.bind(this);
    }
    componentDidMount() {
        this.updateTime();
        this.interval = window.setInterval(this.updateTime, 1000);
    }
    componentWillUnmount() { clearInterval(this.interval); }
    updateTime() { this.setState({ time: countdown(MOVE_IN_DATE).toString() }); }
    render() {
        return (
            <div className="groweek-countdown-wrap groweek-countdown-lilac">
                <h3>{this.state.time}</h3>
                <p>until O-Week!</p>
            </div>
        );
    }
}

const LandingPage = () => (
    <div className="groweek">
        <WatercolorFilters />
        <Sidebar />
        <ScrollToTop />

        {/* Intentional blotches — clustered at transitions, not mechanical */}
        <WatercolorBlotch color="#c4aeda" size={450} style={{ top: '0%', left: '-12%' }} />
        <WatercolorBlotch color="#e8a4c8" size={380} style={{ top: '2%', right: '-8%' }} />
        <WatercolorBlotch color="#f0d86e" size={300} style={{ top: '22%', right: '-10%' }} />
        <WatercolorBlotch color="#c8e2f0" size={420} style={{ top: '40%', left: '-11%' }} />
        <WatercolorBlotch color="#e8985a" size={350} style={{ top: '55%', right: '-9%' }} />
        <WatercolorBlotch color="#c4aeda" size={400} style={{ top: '70%', left: '-10%' }} />
        <WatercolorBlotch color="#e8a4c8" size={320} style={{ top: '85%', right: '-7%' }} />
        <WatercolorBlotch color="#7db87a" size={280} style={{ top: '95%', left: '-8%' }} />

        {/* Hero — storybook opening: illustration + quote, countdown centered below */}
        <section className="groweek-hero-seuss">
            <img
                className="groweek-hero-bg-photo"
                src="/static/oweek/current/images/hero/building.jpg"
                alt=""
                aria-hidden="true"
            />
            <div className="groweek-hero-row">
                <div className="groweek-hero-illustration">
                    <img
                        className="groweek-logo"
                        src="/static/oweek/2026/logo.png"
                        alt="Let It GrO-Week 2026 — McMurtry College"
                    />
                </div>
                <div className="groweek-hero-text">
                    <blockquote className="groweek-hero-quote">
                        "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not."
                    </blockquote>
                    <cite className="groweek-hero-cite">— Dr. Seuss, The Lorax</cite>
                    <p className="groweek-hero-welcome">Welcome to McMurtry College, Class of 2030!</p>
                </div>
            </div>
            <Countdown />
        </section>

        {/* What is O-Week */}
        <section className="groweek-section groweek-decorated-section">
            <img className="groweek-decor" src="/static/oweek/2026/decor/lorax-fish.png" alt="" aria-hidden="true" style={{ top: '-30px', right: '-20px', width: '140px' }} />
            <h2 className="groweek-section-title">What is O-Week?</h2>
            <div className="groweek-info-grid">
                <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-purple)' }}>
                    <p>
                        Orientation Week (O-Week) is your exciting introduction to life at Rice University
                        and McMurtry College. Led by our dedicated coordinators and advisors, you'll
                        participate in fun activities, college traditions, and bonding experiences that
                        will help you make lifelong friends and feel at home.
                    </p>
                </div>
                <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-pink)' }}>
                    <p>
                        You'll be placed into an O-Week group with a small team of advisors who will
                        guide you through the week. They're upperclassmen who've been in your shoes and
                        are here to help you navigate everything — from finding your classes to finding
                        your people.
                    </p>
                </div>
            </div>
        </section>

        {/* What to Expect — varied card accents */}
        <section className="groweek-section groweek-decorated-section">
            <img className="groweek-decor" src="/static/oweek/2026/decor/truffula-patch.png" alt="" aria-hidden="true" style={{ bottom: '-30px', left: '-30px', width: '170px' }} />
            <h2 className="groweek-section-title">What to Expect</h2>
            <div className="groweek-expect-grid">
                <div className="groweek-expect-item">
                    <span className="groweek-expect-icon" aria-hidden="true">🏠</span>
                    <div>
                        <h4>Move-In Day</h4>
                        <p>You'll arrive on campus, move into your room at McMurtry, and meet your O-Week group and advisors for the first time. We'll be there to help you carry your stuff and welcome you home.</p>
                    </div>
                </div>
                <div className="groweek-expect-item">
                    <span className="groweek-expect-icon" aria-hidden="true">🎉</span>
                    <div>
                        <h4>Activities &amp; Traditions</h4>
                        <p>From icebreakers and team-building to campus tours and Rice traditions, O-Week is packed with memorable moments. You'll explore Houston, bond with your group, and discover what makes McMurtry special.</p>
                    </div>
                </div>
                <div className="groweek-expect-item">
                    <span className="groweek-expect-icon" aria-hidden="true">📚</span>
                    <div>
                        <h4>Academic Prep</h4>
                        <p>Meet with your academic advisors, learn about course registration, and get oriented to Rice's academic resources. You'll feel confident and ready before classes even start.</p>
                    </div>
                </div>
                <div className="groweek-expect-item">
                    <span className="groweek-expect-icon" aria-hidden="true">🤝</span>
                    <div>
                        <h4>Finding Your Community</h4>
                        <p>O-Week is where lifelong friendships begin. Whether it's your O-Week family, your hallmates, or the clubs you discover at the activities fair — you'll find your people.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Photo Carousel */}
        <section className="groweek-carousel-section">
            <ImageCarousel images={CAROUSEL_IMAGES} autoplay={true} />
        </section>

        {/* Mission Statement — with pull quote */}
        <section className="groweek-section groweek-decorated-section groweek-mission-section">
            <img className="groweek-decor" src="/static/oweek/2026/decor/unless-stone.png" alt="" aria-hidden="true" style={{ bottom: '-20px', right: '-20px', width: '160px' }} />
            <h2 className="groweek-section-title">Our Mission</h2>
            <div className="groweek-mission">
                <p>In the <strong>McMurTREE forest</strong>, every New Student will have the opportunity to grow, change, and adapt to their new environments. Just like a <strong>truffula seed</strong>, students need the right conditions to thrive. <strong>Let It GrO-Week 2026</strong> nurtures those conditions through <strong>connection, guidance, and empathy</strong>. With these resources, the newest sprouts can begin to plant their roots into both the McMurtry family we hold so much pride for and Rice University as a whole.</p>
                <blockquote className="groweek-pull-quote">
                    How bad could it possibly be?
                </blockquote>
                <p>Through being encouraged to <strong>step outside their comfort zones, try something new, and learn through experience</strong>, they will have all that they <strong>thneed</strong>.</p>
                <p>By the end of <strong>Let It GrO-Week</strong>, New Students will understand that growth comes from <strong>asking for help, making mistakes, and taking initiative</strong>. After all, <strong>you can't reap what you don't sow</strong>. A forest will flourish through community; advisors, the McTeam, affiliates, and fellow Murts are eager to offer the water, light, and nutrients needed to <strong>celebrate each Murt's rebirth</strong> in their new community.</p>
                <p className="groweek-mission-tagline">This is the place to Let It Grow!</p>
            </div>
        </section>

        {/* Signature */}
        <section className="groweek-sig-section">
            <img className="groweek-sig-img" src="/static/oweek/2026/signature.png" alt="Let It GrO-Week 2026 — McMurtry College" />
        </section>

        {/* Quick Info — with bears */}
        <section className="groweek-section groweek-decorated-section groweek-last-section">
            <img className="groweek-decor" src="/static/oweek/2026/decor/bears.png" alt="" aria-hidden="true" style={{ bottom: '-30px', left: '-10px', width: '150px' }} />
            <h2 className="groweek-section-title">Quick Info</h2>
            <div className="groweek-info-grid groweek-quickinfo-grid">
                <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-orange)' }}>
                    <h4>📮 Mailing Address</h4>
                    <p>(Your Name)<br />McMurtry College<br />1605 Rice Blvd.<br />Houston, TX 77005</p>
                </div>
                <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-green)' }}>
                    <h4>💌 Questions?</h4>
                    <p>Reach us anytime at <a href="mailto:mcmurtryoweek@gmail.com">mcmurtryoweek@gmail.com</a></p>
                </div>
            </div>
        </section>

        {/* Tree panorama footer */}
        <section className="groweek-tree-footer">
            <img src="/static/oweek/2026/decor/tree-panorama.png" alt="Truffula Tree Forest" />
        </section>
    </div>
);

export default LandingPage;
