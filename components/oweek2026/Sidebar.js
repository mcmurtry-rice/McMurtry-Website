import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_ITEMS = [
    { name: 'Let It GrO-Week', href: '/oweek/2026' },
    { name: 'Meet the Coords', href: '/oweek/2026/coords' },
    { name: 'The Book', href: '/oweek/2026/book' },
    { name: 'Letter to Parents', href: '/oweek/2026/letter' },
    { name: 'Move-In Info', href: '/oweek/2026/movein' },
    { name: 'Your Room', href: '/oweek/2026/housing' },
];

const Sidebar = () => {
    const { pathname } = useRouter();
    const innerRef = useRef(null);

    const isActive = (href) =>
        href === '/oweek/2026' ? pathname === href : pathname.startsWith(href);

    const scrollNav = (dir) => {
        if (innerRef.current) innerRef.current.scrollBy({ left: dir * 160, behavior: 'smooth' });
    };

    return (
        <nav className="groweek-topnav" aria-label="O-Week 2026 Navigation">
            <div className="groweek-topnav-inner-wrap">
                <button className="groweek-topnav-arrow groweek-topnav-arrow-left" onClick={() => scrollNav(-1)} aria-label="Scroll left">&#8249;</button>
                <ul className="groweek-topnav-list" ref={innerRef}>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>
                                <a className={'groweek-topnav-link' + (isActive(item.href) ? ' groweek-topnav-link-active' : '')}>
                                    {item.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="groweek-topnav-arrow groweek-topnav-arrow-right" onClick={() => scrollNav(1)} aria-label="Scroll right">&#8250;</button>
            </div>
        </nav>
    );
};

export default Sidebar;
