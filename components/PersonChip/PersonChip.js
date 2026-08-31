import React, { useEffect, useState } from 'react';
import './PersonChip.css';

/*
 * Person chip - compact person display for pages where people only
 * have a name and an email (committee rosters etc.). Renders a
 * centered, wrapping row of pill chips. Chips with an email are
 * mailto links; `accent` fills the initial circle (used for heads).
 *
 * TWO LAYOUTS:
 *
 *   pill      - initial circle + name + email, side by side. The
 *               default, and what long rosters (committees) want.
 *   portrait  - a large tile with the picture and a name tag across the
 *               bottom. Pass `portrait` to use it for a whole section,
 *               photos or not: a section where only the photographed
 *               people get tiles and everyone else gets pills reads as
 *               broken. Anyone with no photo on file gets the same tile
 *               with a big initial in place of the picture.
 *
 * A `photo` also forces the portrait layout on its own - there is
 * nowhere to put a picture in a pill.
 *
 * Tiles open a modal on click (the tile is a button, and the email moves
 * inside as a proper mailto button). Pills stay plain mailto links: they
 * already show everything there is to show, so a modal would open onto
 * the same three lines.
 */

const CLOSE_MS = 200; // keep in step with the pc-modal-* exit animations

/*
 * Email links open Gmail's compose window in a new tab rather than using
 * `mailto:`. Everyone here is on a rice.edu address, which is Google
 * Workspace, so Gmail is the right destination - whereas `mailto:` hands
 * off to whatever the operating system has registered, which on a shared
 * or lab machine is usually nothing at all and the click does nothing.
 */
const composeHref = (email) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

const MAIL_TARGET = { target: '_blank', rel: 'noopener noreferrer' };

const Pill = ({ name, email, position, accent }) => {
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
        <a href={composeHref(email)} className={className} {...MAIL_TARGET}>{inner}</a>
    ) : (
        <div className={className}>{inner}</div>
    );
};

const initial = (name) => (name || '?').trim().charAt(0);

/* The picture half of a tile: the photo, or a big initial standing in
 * for one. Shared so the tile and the modal crop identically. */
const Face = ({ name, photo, className }) =>
    photo ? (
        <img src={photo} alt={(name || '').trim()} className={className} />
    ) : (
        <span className={`${className} pc-portrait-blank`} aria-hidden="true">{initial(name)}</span>
    );

const Portrait = ({ name, email, position, photo, accent, onOpen }) => (
    <button
        type="button"
        className={`pc-portrait${accent ? ' pc-portrait-accent' : ''}`}
        onClick={onOpen}
        aria-label={`${(name || '').trim()}${position ? `, ${position}` : ''} - see details`}
    >
        <Face name={name} photo={photo} className="pc-portrait-photo" />
        <span className="pc-portrait-text">
            {position ? <span className="pc-position">{position}</span> : null}
            <span className="pc-name">{name}</span>
            {email ? <span className="pc-email">{email}</span> : null}
        </span>
        <span className="pc-portrait-more" aria-hidden="true">
            <i className="ph ph-arrows-out" />
        </span>
    </button>
);

/* Expanded view of one tile: the same picture at a size worth looking
 * at, with the details underneath. `closing` plays the exit animation
 * before the component unmounts. */
const PersonModal = ({ person, closing, onClose }) => (
    <div
        className={`pc-modal-scrim${closing ? ' pc-modal-scrim-closing' : ''}`}
        onClick={onClose}
    >
        <div
            className="pc-modal"
            role="dialog"
            aria-modal="true"
            aria-label={(person.name || '').trim()}
            onClick={(e) => e.stopPropagation()}
        >
            <button type="button" className="pc-modal-close" onClick={onClose} aria-label="Close">
                <i className="ph ph-x" aria-hidden="true" />
            </button>

            <div className="pc-modal-figure">
                <Face name={person.name} photo={person.photo} className="pc-modal-photo" />
            </div>

            <div className="pc-modal-body">
                {person.position ? <p className="pc-modal-position">{person.position}</p> : null}
                <h3 className="pc-modal-name">{person.name}</h3>
                {person.email ? (
                    <a className="pc-modal-email" href={composeHref(person.email)} {...MAIL_TARGET}>
                        <i className="ph ph-envelope-simple" aria-hidden="true" />
                        {person.email}
                    </a>
                ) : null}
            </div>
        </div>
    </div>
);

const PersonChips = ({ content = [], accent = false, portrait = false }) => {
    const asTiles = portrait || content.some((p) => p.photo);

    const [selected, setSelected] = useState(null);
    const [closing, setClosing] = useState(false);

    const close = () => {
        if (closing) return;
        setClosing(true);
        setTimeout(() => {
            setSelected(null);
            setClosing(false);
        }, CLOSE_MS);
    };

    // lock page scroll and close on Escape while the modal is open
    useEffect(() => {
        if (!selected) return undefined;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e) => { if (e.key === 'Escape') close(); };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener('keydown', onKey);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected, closing]);

    if (!asTiles) {
        return (
            <div className="pc-row">
                {content.map((p, i) => (
                    <Pill
                        key={`${p.name || 'chip'}-${i}`}
                        name={p.name}
                        email={p.email}
                        position={p.position}
                        accent={accent}
                    />
                ))}
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="pc-row-portrait">
                {content.map((p, i) => (
                    <Portrait
                        key={`${p.name || 'chip'}-${i}`}
                        name={p.name}
                        email={p.email}
                        position={p.position}
                        photo={p.photo}
                        accent={accent}
                        onOpen={() => setSelected(p)}
                    />
                ))}
            </div>
            {selected ? (
                <PersonModal person={selected} closing={closing} onClose={close} />
            ) : null}
        </React.Fragment>
    );
};

export default PersonChips;
