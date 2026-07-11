import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_ITEMS } from './navItems';

const findIndex = (pathname) =>
    NAV_ITEMS.findIndex((item) =>
        item.href === '/oweek/2026' ? pathname === item.href : pathname.startsWith(item.href)
    );

const PageNav = () => {
    const { pathname } = useRouter();
    const index = findIndex(pathname);
    if (index === -1) return null;

    const prev = index > 0 ? NAV_ITEMS[index - 1] : null;
    const next = index < NAV_ITEMS.length - 1 ? NAV_ITEMS[index + 1] : null;

    return (
        <nav className="groweek-pagenav" aria-label="O-Week page navigation">
            {prev ? (
                <Link href={prev.href}>
                    <a className="groweek-pagenav-link groweek-pagenav-prev">
                        <span className="groweek-pagenav-arrow" aria-hidden="true">&#8249;</span>
                        <span className="groweek-pagenav-text">
                            <span className="groweek-pagenav-label">Previous</span>
                            <span className="groweek-pagenav-name">{prev.name}</span>
                        </span>
                    </a>
                </Link>
            ) : <span className="groweek-pagenav-spacer" />}
            {next ? (
                <Link href={next.href}>
                    <a className="groweek-pagenav-link groweek-pagenav-next">
                        <span className="groweek-pagenav-text">
                            <span className="groweek-pagenav-label">Next</span>
                            <span className="groweek-pagenav-name">{next.name}</span>
                        </span>
                        <span className="groweek-pagenav-arrow" aria-hidden="true">&#8250;</span>
                    </a>
                </Link>
            ) : <span className="groweek-pagenav-spacer" />}
        </nav>
    );
};

export default PageNav;
