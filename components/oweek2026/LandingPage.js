import React from 'react';
import StripCarousel from '../StripCarousel/StripCarousel';
import { WatercolorFilters, WatercolorBlotch } from './WatercolorFilters';
import ScrollToTop from './ScrollToTop';
import Sidebar from './Sidebar';
import PageNav from './PageNav';
var countdown = require('countdown');

const MOVE_IN_DATE = new Date(2026, 7, 16);

const CAROUSEL_IMAGES = [
    { src: '/static/oweek/2026/carousel/photo4.jpg', alt: 'Color Run', caption: 'McMurtry Spirit' },
    { src: '/static/oweek/2026/carousel/photo3.jpg', alt: 'Cheering in the Stands', caption: 'Murt Pride' },
    { src: '/static/oweek/2026/carousel/photo1.jpg', alt: 'Dancing in the Commons', caption: 'O-Week Traditions' },
    { src: '/static/general_pics/building.jpg', alt: 'McMurtry College Quad', caption: 'Your New Home' },
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
    updateTime() {
        const ts = countdown(MOVE_IN_DATE);
        this.setState({ time: ts.toString(), begun: ts.value >= 0 });
    }
    render() {
        const { time, begun } = this.state;
        if (begun) {
            return (
                <div className="groweek-countdown-wrap groweek-countdown-lilac groweek-countdown-begun">
                    <p className="groweek-countdown-time">LET IT GRO-WEEK HAS BEGUN!!!!</p>
                </div>
            );
        }
        return (
            <div className="groweek-countdown-wrap groweek-countdown-lilac">
                <p className="groweek-countdown-time">{time}</p>
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

        {/* Intentional blotches - clustered at transitions, not mechanical */}
        <WatercolorBlotch color="#c4aeda" size={450} style={{ top: '0%', left: '-12%' }} />
        <WatercolorBlotch color="#e8a4c8" size={380} style={{ top: '2%', right: '-8%' }} />
        <WatercolorBlotch color="#f0d86e" size={300} style={{ top: '22%', right: '-10%' }} />
        <WatercolorBlotch color="#c8e2f0" size={420} style={{ top: '40%', left: '-11%' }} />
        <WatercolorBlotch color="#e8985a" size={350} style={{ top: '55%', right: '-9%' }} />
        <WatercolorBlotch color="#c4aeda" size={400} style={{ top: '70%', left: '-10%' }} />
        <WatercolorBlotch color="#e8a4c8" size={320} style={{ top: '85%', right: '-7%' }} />
        <WatercolorBlotch color="#7db87a" size={280} style={{ top: '95%', left: '-8%' }} />

        {/* Hero - storybook opening: illustration + quote, countdown centered below */}
        <section className="groweek-hero-seuss">
            <h1 className="groweek-sr-only">Let It GrO-Week 2026 - McMurtry College Orientation Week</h1>
            <img className="groweek-decor groweek-unless-decor" src="/static/oweek/2026/decor/unless-stone.png" alt="" aria-hidden="true" style={{ top: '140px', right: '11%', width: '210px' }} />
            <div className="groweek-hero-row">
                <div className="groweek-hero-illustration">
                    <img
                        className="groweek-logo"
                        src="/static/oweek/2026/logo.png"
                        alt="Let It GrO-Week 2026 - McMurtry College"
                    />
                </div>
                <div className="groweek-hero-text">
                    <blockquote className="groweek-hero-quote">
                        "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not."
                    </blockquote>
                    <cite className="groweek-hero-cite">- Dr. Seuss, The Lorax</cite>
                    <p className="groweek-hero-welcome">Welcome to McMurtry College, Class of 2030!</p>
                </div>
            </div>
            <Countdown />
        </section>

        {/* What is O-Week */}
        <section className="groweek-section groweek-decorated-section">
            <h2 className="groweek-section-title">What is O-Week?</h2>
            <div className="groweek-info-grid">
                <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-purple)' }}>
                    <h3>The Basics</h3>
                    <p>
                        Orientation Week (O-Week) is your exciting introduction to life at Rice University
                        and McMurtry College. Led by our dedicated coordinators and advisors, you'll
                        participate in fun activities, college traditions, and bonding experiences that
                        will help you make lifelong friends and feel at home.
                    </p>
                </div>
                <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-pink)' }}>
                    <h3>Your O-Week Group</h3>
                    <p>
                        You'll be placed into an O-Week group with a small team of advisors who will
                        guide you through the week. They're upperclassmen who've been in your shoes and
                        are here to help you navigate everything - from finding your classes to finding
                        your people.
                    </p>
                </div>
            </div>
        </section>

        {/* What to Expect - varied card accents */}
        <section className="groweek-section groweek-decorated-section">
            <img className="groweek-decor" src="/static/oweek/2026/decor/truffula-patch.png" alt="" aria-hidden="true" style={{ bottom: '-30px', left: '-30px', width: '170px' }} />
            <h2 className="groweek-section-title">What to Expect</h2>
            <div className="groweek-expect-grid">
                <div className="groweek-expect-item">
                    <span className="groweek-expect-icon" aria-hidden="true"><i className="ph ph-house" /></span>
                    <div>
                        <h3>Moving In</h3>
                        <p>You'll arrive on campus, move into your room at McMurtry, and meet your O-Week group and advisors for the first time. We'll be there to help you carry your stuff and welcome you home. This is your room for the entire academic year.</p>
                    </div>
                </div>
                <div className="groweek-expect-item">
                    <span className="groweek-expect-icon" aria-hidden="true"><i className="ph ph-confetti" /></span>
                    <div>
                        <h3>Activities &amp; Traditions</h3>
                        <p>From icebreakers and team-building to campus tours and Rice traditions, O-Week is packed with memorable moments. You'll explore Houston, bond with your group, and discover what makes McMurtry special.</p>
                    </div>
                </div>
                <div className="groweek-expect-item">
                    <span className="groweek-expect-icon" aria-hidden="true"><i className="ph ph-books" /></span>
                    <div>
                        <h3>Academic Prep</h3>
                        <p>Meet with your academic advisors, learn about course registration, and get oriented to Rice's academic resources. You'll feel confident and ready before classes even start.</p>
                    </div>
                </div>
                <div className="groweek-expect-item">
                    <span className="groweek-expect-icon" aria-hidden="true"><i className="ph ph-hands-clapping" /></span>
                    <div>
                        <h3>Finding Your Community</h3>
                        <p>O-Week is where lifelong friendships begin. Whether it's your O-Week family, your hallmates, or the clubs you discover at the activities fair - you'll find your people.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Photo Carousel */}
        <section className="groweek-carousel-section">
            <StripCarousel images={CAROUSEL_IMAGES} fadeWidth="8%" fadeColor="245,234,214" />
        </section>

        {/* Mission Statement - word-for-word from the 2026 Advisor Application */}
        <section className="groweek-section groweek-decorated-section groweek-mission-section">
            <h2 className="groweek-section-title">Our Mission</h2>
            <div className="groweek-mission">
                <p>In the <strong className="groweek-mission-pink">McMurTREE forest</strong>, every New Student will have the opportunity to grow, change, and adapt to their new environments. Just like a <strong className="groweek-mission-pink">truffula seed</strong>, students need the right conditions to thrive. <strong className="groweek-mission-blue">Let It GrO-Week 2026</strong> nurtures those conditions through <strong className="groweek-mission-orange">connection, guidance, and empathy</strong>. With these resources, the newest sprouts can begin to plant their roots into both the McMurtry family we hold so much pride for and Rice University as a whole. New Students may think that college is daunting, but <strong className="groweek-mission-pink"><em>how bad could it possibly be?</em></strong></p>
                <p>Through being encouraged to <strong className="groweek-mission-orange">step outside their comfort zones, try something new, and learn through experience</strong>, they will have all that they <strong className="groweek-mission-pink">thneed</strong>.</p>
                <p>By the end of <strong className="groweek-mission-blue">Let It GrO-Week</strong>, New Students will understand that growth comes from <strong className="groweek-mission-orange">asking for help, making mistakes, and taking initiative</strong>. After all, <strong className="groweek-mission-pink">you can't reap what you don't sow</strong>. A forest will flourish through community; advisors, the McTeam, affiliates, and fellow Murts are eager to offer the water, light, and nutrients needed to <strong className="groweek-mission-pink">celebrate each Murt's rebirth</strong> in their new community.</p>
                <p className="groweek-mission-tagline">This is the place to Let It Grow!!!</p>
            </div>
        </section>

        {/* Quick Info */}
        <section className="groweek-section groweek-decorated-section groweek-last-section">
            <h2 className="groweek-section-title">Quick Info</h2>
            <div className="groweek-info-grid groweek-quickinfo-grid">
                <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-orange)' }}>
                    <h3><i className="ph ph-envelope" /> Mailing Address</h3>
                    <p>(Your Name)<br />McMurtry College<br />1605 Rice Blvd.<br />Houston, TX 77005</p>
                    <p><strong><em>Nothing should be shipped to the college until after O-Week.</em></strong></p>
                </div>
                <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-green)' }}>
                    <h3><i className="ph ph-chat-circle-dots" /> Questions?</h3>
                    <p>Reach us anytime at <a href="mailto:mcmurtryoweek@gmail.com">mcmurtryoweek@gmail.com</a></p>
                </div>
            </div>
        </section>

        <PageNav />
    </div>
);

export default LandingPage;
