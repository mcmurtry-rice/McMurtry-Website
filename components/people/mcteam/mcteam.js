import React, { useState } from 'react';
import { useSupabaseTable } from '../../../lib/useSupabaseTable';
import './mcteam.css';
import '../../events/events/events.css';

// Render a body array (jsonb) where any element starting with "• " becomes
// a list item. Consecutive bullet lines are grouped into a single <ul> so
// editors can mix paragraphs and lists freely in the Supabase row.
const renderBody = (body) => {
    const nodes = [];
    let bulletBuffer = [];
    const flushBullets = () => {
        if (bulletBuffer.length === 0) return;
        nodes.push(
            <ul key={`ul-${nodes.length}`} className='mt-detail-list'>
                {bulletBuffer.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        );
        bulletBuffer = [];
    };
    body.forEach((line, idx) => {
        if (typeof line === 'string' && line.startsWith('• ')) {
            bulletBuffer.push(line.slice(2));
        } else {
            flushBullets();
            nodes.push(<p key={`p-${idx}`}>{line}</p>);
        }
    });
    flushBullets();
    return nodes;
};

const McTeam = () => {
    const { rows: positions, isLoading } = useSupabaseTable('mcteam');
    const [current, setCurrent] = useState(0);

    const safeCurrent = positions.length === 0 ? 0 : Math.min(current, positions.length - 1);
    const active = positions[safeCurrent];
    const body = active && Array.isArray(active.body) ? active.body : [];

    return (
        <div className='mcteam-page'>
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

                <h1 className='ev-hero-heading'>McTeam</h1>
            </header>

            {isLoading ? (
                <div className='loading-container'>
                    <div className='loading-spinner'></div>
                    <p className='loading-text'>Loading...</p>
                </div>
            ) : (
                <React.Fragment>
                    <nav className='mt-tabs' aria-label='McTeam positions'>
                        {positions.map((p, n) => (
                            <button
                                key={p.id}
                                type='button'
                                className={`mt-tab ${safeCurrent === n ? 'mt-tab-active' : ''}`}
                                onClick={() => setCurrent(n)}
                            >
                                {p.position}
                            </button>
                        ))}
                    </nav>

                    {active && (
                        <section className='mt-detail' key={active.id}>
                            <div className='mt-detail-header'>
                                <h2 className='mt-detail-name'>{active.names}</h2>
                            </div>

                            <div className='mt-detail-body'>
                                {/* Floated image — text wraps around it and continues
                                    back to the left edge once the image ends. */}
                                <img
                                    src={active.image}
                                    alt={active.names}
                                    className='mt-detail-image'
                                />

                                {renderBody(body)}
                            </div>
                        </section>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default McTeam;
