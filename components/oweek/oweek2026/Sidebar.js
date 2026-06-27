import React, { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
    { name: 'Let It GrO-Week', href: '/oweek/oweek2026' },
    { name: 'Meet the Coords', href: '/oweek/oweek2026/coords' },
    { name: 'The Book', href: '/oweek/oweek2026/book' },
    { name: 'Letter to Parents', href: '/oweek/oweek2026/letter' },
    { name: 'Move-In Info', href: '/oweek/oweek2026/movein' },
];

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className={'groweek-hamburger' + (open ? ' groweek-hamburger-open' : '')}
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
            >
                <span />
                <span />
                <span />
            </button>

            <div
                className={'groweek-sidebar-scrim' + (open ? ' groweek-sidebar-scrim-open' : '')}
                onClick={() => setOpen(false)}
            />

            <nav className={'groweek-sidebar' + (open ? ' groweek-sidebar-open' : '')} aria-label="O-Week 2026 Navigation">
                <div className="groweek-sidebar-header">
                    <img src="/static/oweek/2026/signature.png" alt="Let It GrO-Week 2026 — McMurtry College" className="groweek-sidebar-sig" />
                    <button className="groweek-sidebar-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
                </div>
                <ul className="groweek-sidebar-links">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>
                                <a className="groweek-sidebar-link" onClick={() => setOpen(false)}>
                                    {item.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
