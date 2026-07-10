import React from 'react';
import './PersonChip.css';

/*
 * Person chip - compact person display for pages where people only
 * have a name and an email (committee rosters etc.). Renders a
 * centered, wrapping row of pill chips. Chips with an email are
 * mailto links; `accent` fills the initial circle (used for heads).
 */

const Chip = ({ name, email, position, accent }) => {
    const className = `pc-chip${accent ? ' pc-chip-accent' : ''}`;
    const inner = (
        <React.Fragment>
            <span className="pc-initial" aria-hidden="true">{(name || '?').trim().charAt(0)}</span>
            <span className="pc-text">
                {position ? <span className="pc-position">{position}</span> : null}
                <span className="pc-name">{name}</span>
                {email ? <span className="pc-email">{email}</span> : null}
            </span>
        </React.Fragment>
    );
    return email ? (
        <a href={`mailto:${email}`} className={className}>{inner}</a>
    ) : (
        <div className={className}>{inner}</div>
    );
};

const PersonChips = ({ content = [], accent = false }) => (
    <div className="pc-row">
        {content.map((p, i) => (
            <Chip
                key={`${p.name || 'chip'}-${i}`}
                name={p.name}
                email={p.email}
                position={p.position}
                accent={accent}
            />
        ))}
    </div>
);

export default PersonChips;
