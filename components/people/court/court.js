import React, { useState } from "react";
import Cards from "../../general/contactcards";
import { useSupabaseTable, distinctInOrder } from '../../../lib/useSupabaseTable';
import './court.css';
import '../../events/events/events.css';

// McCourt uses `position` to drive its tabs ("Chief Justice" / "Associate
// Justice"), unlike McMinistry/PAAs which use a separate `tab` column.
// Pluralise for the tab label so the UI reads "Chief Justices".
const pluralise = (label) => {
    if (!label) return label;
    if (/[sx]$/i.test(label)) return label + 'es';
    return label + 's';
};

const Court = () => {
    const { rows, isLoading } = useSupabaseTable('mccourt');
    const [activeTab, setActiveTab] = useState(null);

    const positions = distinctInOrder(rows, 'position');
    const tabNames = positions.map(pluralise);

    const effectiveTab = activeTab && tabNames.includes(activeTab)
        ? activeTab
        : (tabNames[0] || null);
    const effectivePosition = effectiveTab
        ? positions[tabNames.indexOf(effectiveTab)]
        : null;

    const activeData = rows
        .filter(r => r.position === effectivePosition)
        .map(({ position, name, email, room, phone }) => {
            // Chief Justices get phone; Associates don't.
            return position === 'Chief Justice'
                ? { position, name, email, room, phone }
                : { position, name, email, room };
        });

    return (
        <div className="court-page">
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

                <h1 className='ev-hero-heading'>McCourt</h1>
            </header>

            <div className='court-tabs'>
                {tabNames.map(name => (
                    <button
                        key={name}
                        className={`court-tab ${effectiveTab === name ? 'active' : ''}`}
                        onClick={() => setActiveTab(name)}
                    >
                        {name}
                    </button>
                ))}
            </div>

            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Loading...</p>
                </div>
            ) : effectiveTab ? (
                <div className='fade-in' key={effectiveTab}>
                    <h2 className='division-title'>{effectiveTab}</h2>
                    <Cards content={activeData} />
                </div>
            ) : null}
        </div>
    );
};

export default Court;
