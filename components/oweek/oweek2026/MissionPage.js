import React from 'react';
import { WatercolorFilters, WatercolorBlotch } from './WatercolorFilters';

const MissionPage = () => (
    <div className="groweek">
        <WatercolorFilters />
        <WatercolorBlotch color="#c4aeda" size={400} style={{ top: '0%', right: '-10%' }} />
        <WatercolorBlotch color="#e8a4c8" size={350} style={{ top: '5%', left: '-8%' }} />
        <WatercolorBlotch color="#f0d86e" size={320} style={{ top: '45%', right: '-9%' }} />
        <WatercolorBlotch color="#7db87a" size={300} style={{ bottom: '10%', left: '-7%' }} />

        <section className="groweek-hero groweek-hero-compact">
            <img
                className="groweek-logo groweek-logo-small"
                src="/static/oweek/2026/logo.png"
                alt="Let It GrO-Week 2026"
            />
        </section>

        <section className="groweek-section">
            <h2 className="groweek-section-title">Mission Statement</h2>
            <div className="groweek-mission">
                <p>
                    In the <strong>McMurTREE forest</strong>, every New Student will have the opportunity
                    to grow, change, and adapt to their new environments. Just like a{' '}
                    <strong>truffula seed</strong>, students need the right conditions to thrive.{' '}
                    <strong>Let It GrO-Week 2026</strong> nurtures those conditions through{' '}
                    <strong>connection, guidance, and empathy</strong>. With these resources, the newest
                    sprouts can begin to plant their roots into both the McMurtry family we hold so much
                    pride for and Rice University as a whole.
                </p>
                <p>
                    New Students may think that college is daunting, but{' '}
                    <em><strong>how bad could it possibly be?</strong></em> Through being encouraged to{' '}
                    <strong>step outside their comfort zones, try something new, and learn through
                    experience</strong>, they will have all that they <strong>thneed</strong>.
                </p>
                <p>
                    By the end of <strong>Let It GrO-Week</strong>, New Students will understand that
                    growth comes from <strong>asking for help, making mistakes, and taking
                    initiative</strong>. After all, <strong>you can't reap what you don't sow</strong>.
                    A forest will flourish through community; advisors, the McTeam, affiliates, and
                    fellow Murts are eager to offer the water, light, and nutrients needed to{' '}
                    <strong>celebrate each Murt's rebirth</strong> in their new community.
                </p>
                <p className="groweek-mission-tagline">
                    🌿 This is the place to Let It Grow!!! 🌿
                </p>
            </div>
        </section>
    </div>
);

export default MissionPage;
