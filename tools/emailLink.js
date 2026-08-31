// tools/emailLink.js
//
// One place that decides what an email link on this site points at.
//
// `mailto:` hands the click to whatever the operating system has
// registered as its mail client. On a phone that is usually fine; on a
// lab machine, a shared desktop, or a browser where nothing is
// registered, the click does nothing at all and the address looks
// broken. Every address on this site is either a rice.edu account or a
// college gmail.com account - both Google - so linking straight to
// Gmail's compose window in a new tab is what people actually want.
//
// Usage:
//   import { mailHref, MAIL_TARGET } from '../../tools/emailLink';
//   <a href={mailHref(email)} {...MAIL_TARGET}>{email}</a>
//
// MAIL_TARGET carries `rel="noopener noreferrer"` alongside the new tab;
// spread it on every one of these links rather than writing target by
// hand, so a future change of destination is a change to this file.

const GMAIL_COMPOSE = 'https://mail.google.com/mail/?view=cm&fs=1&to=';

/** Gmail compose URL for one address. Falsy in, falsy out. */
export function mailHref(email) {
    if (!email) return email;
    return GMAIL_COMPOSE + encodeURIComponent(String(email).trim());
}

export const MAIL_TARGET = { target: '_blank', rel: 'noopener noreferrer' };
