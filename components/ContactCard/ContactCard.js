import React from 'react';
import './ContactCard.css';

/*
 * Contact card — the universal "person card" used on every people page.
 *
 * Field rules:
 *  - Every field is optional. Missing fields collapse cleanly with no
 *    blank space, no broken layout.
 *  - Long values (emails, multi-word titles, hyphenated majors) wrap and
 *    break inside the card rather than overflowing.
 *  - `position` displays as the small uppercase eyebrow ("ROLE NAME").
 *  - `name` is the italic display heading underneath.
 *  - `photo` slots into a square photo well. Missing photos render a
 *    purple-tinted placeholder so cards still align in a grid.
 *  - All other fields (phone, email, year, room, major, subjects,
 *    pre_prof_path) appear in a uniform "detail row" with a 16px icon.
 *
 * Layout: flex column. The detail rows sit at the bottom so cards of
 * varying content height still align their footers when laid out in a
 * grid (the photo well + name area absorbs any extra height).
 */

const DetailRow = ({ icon, label, children, href }) => {
    const inner = (
        <React.Fragment>
            {icon ? <img src={icon} alt="" className="cc-detail-icon" /> : null}
            <span className="cc-detail-text">
                {label ? <span className="cc-detail-label">{label}</span> : null}
                <span className="cc-detail-value">{children}</span>
            </span>
        </React.Fragment>
    );
    return href ? (
        <a href={href} className="cc-detail cc-detail-link">{inner}</a>
    ) : (
        <div className="cc-detail">{inner}</div>
    );
};

const Card = ({
    photo, position, name, year, email, phone,
    major, subjects, room, pre_prof_path,
    width, minHeight,
}) => {
    const style = {};
    if (width)     style.maxWidth   = typeof width === 'number' ? `${width}px` : width;
    if (minHeight) style.minHeight  = minHeight;

    const hasPhoto = photo !== undefined && photo !== null && photo !== '';

    return (
        <article className="cc-card" style={style}>
            {/* Purple cap bar at the top */}
            <div className="cc-cap" aria-hidden="true" />

            <header className="cc-head">
                {position ? <p className="cc-role">{position}</p> : null}
                {name     ? <h3 className="cc-name">{name}</h3>   : null}
            </header>

            {hasPhoto ? (
                <div className="cc-photo-well">
                    <img src={photo} alt={`${name || ''}`.trim() || 'Photo'} className="cc-photo" />
                </div>
            ) : null}

            <footer className="cc-footer">
                {phone ? (
                    <DetailRow icon="/static/icons/phone.svg" href={`tel:${phone}`}>{phone}</DetailRow>
                ) : null}
                {email ? (
                    <DetailRow icon="/static/icons/email.svg" href={`mailto:${email}`}>{email}</DetailRow>
                ) : null}
                {year ? (
                    <DetailRow>Class of {year}</DetailRow>
                ) : null}
                {room ? (
                    <DetailRow label="Room">{room}</DetailRow>
                ) : null}
                {major ? (
                    <DetailRow icon="/static/icons/file.svg" label="Major">{major}</DetailRow>
                ) : null}
                {subjects ? (
                    <DetailRow icon="/static/icons/book.svg" label="Subjects">{subjects}</DetailRow>
                ) : null}
                {pre_prof_path ? (
                    <DetailRow icon="/static/icons/file.svg" label="Pre-Prof">{pre_prof_path}</DetailRow>
                ) : null}
            </footer>
        </article>
    );
};

const Cards = ({ content = [], width, minHeight }) => (
    <div className="cc-grid">
        {content.map((p, i) => (
            <Card
                key={`${p.name || 'card'}-${p.position || ''}-${i}`}
                {...p}
                width={width}
                minHeight={minHeight}
            />
        ))}
    </div>
);

export default Cards;
