import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_ITEMS } from './navItems';

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
