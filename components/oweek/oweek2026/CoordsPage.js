import React from 'react';
import { WatercolorFilters, WatercolorBlotch } from './WatercolorFilters';
import ScrollToTop from './ScrollToTop';
import Sidebar from './Sidebar';

const COORDINATORS = [
    {
        name: 'Collin DeSoto',
        pronouns: '(he/him)',
        year: 'Junior',
        major: 'Psychology, Medical Humanities',
        from: 'DFW, TX',
        email: 'cd112@rice.edu',
        phone: '(972) 249-6110',
        emoji: '🌱',
    },
    {
        name: 'Ava Casperson',
        pronouns: '',
        year: '',
        major: '',
        from: '',
        email: 'ac321@rice.edu',
        phone: '(832) 696-3530',
        emoji: '🌿',
    },
    {
        name: 'Chad Federico',
        pronouns: '',
        year: '',
        major: '',
        from: '',
        email: 'cf70@rice.edu',
        phone: '(631) 381-2607',
        emoji: '🌳',
    },
];

const CoordsPage = () => (
    <div className="groweek">
        <WatercolorFilters />
        <Sidebar />
        <ScrollToTop />
        <WatercolorBlotch color="#e8a4c8" size={400} style={{ top: '0%', left: '-10%' }} />
        <WatercolorBlotch color="#c4aeda" size={350} style={{ top: '5%', right: '-8%' }} />
        <WatercolorBlotch color="#f0d86e" size={380} style={{ top: '35%', left: '-9%' }} />
        <WatercolorBlotch color="#c8e2f0" size={320} style={{ top: '60%', right: '-7%' }} />
        <WatercolorBlotch color="#7db87a" size={300} style={{ bottom: '5%', left: '-8%' }} />

        <section className="groweek-coords" style={{ paddingTop: '2.5rem' }}>
            <h2 className="groweek-section-title">Meet Your Coordinators</h2>
            <div className="groweek-coords-grid">
                {COORDINATORS.map((coord, i) => (
                    <div className="groweek-coord-card" key={i}>
                        <div className="groweek-coord-photo-placeholder">
                            {coord.emoji}
                        </div>
                        <h3 className="groweek-coord-name">{coord.name}</h3>
                        {coord.pronouns && (
                            <p className="groweek-coord-role">{coord.pronouns}</p>
                        )}
                        <p className="groweek-coord-details">
                            {[coord.year, coord.major, coord.from].filter(Boolean).join(' · ')}
                        </p>
                        {coord.email && (
                            <a className="groweek-coord-email" href={`mailto:${coord.email}`}>
                                {coord.email}
                            </a>
                        )}
                        {coord.phone && (
                            <p className="groweek-coord-details" style={{marginTop: '0.25rem'}}>
                                {coord.phone}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default CoordsPage;
