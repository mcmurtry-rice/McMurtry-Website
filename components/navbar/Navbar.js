import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

const navbar_headers = [
    {
        "name": "Home",
        "subheaders": [
            { "name": "McMurtry", "to": "/home/index" },
            { "name": "About", "to": "/home/about" },
            { "name": "Calendar", "to": "/home/calendar" },
        ]
    },
    {
        "name": "Government",
        "subheaders": [
            { "name": "McMinistry", "to": "/government/mcministry" },
            { "name": "Committees", "to": "/government/committees" },
            { "name": "McCourt", "to": "/government/court" },
        ]
    },
    {
        "name": "People",
        "subheaders": [
            { "name": "McTeam", "to": "/people/mcteam" },
            { "name": "RHAs", "to": "/people/RHAs" },
            { "name": "Associates", "to": "/people/associates" },
            { "name": "Head Caregivers", "to": "/people/headcaregivers" },
            { "name": "Affinity Groups", "to": "/people/mcmurtryaffinitygroups" },
            { "name": "Peer Academic Advisors", "to": "/people/paas" },
            { "name": "Academic Fellows", "to": "/people/academicfellows" },
            { "name": "Divisional Advisors", "to": "/people/divisionaladvisors" },
            { "name": "SMR", "to": "/people/SMR" },
        ]
    },
    {
        "name": "Resources",
        "subheaders": [
            { "name": "Room Reservations", "to": "/resources/room-reservations" },
            { "name": "P-Card Requests", "to": "/resources/pcard-requests" },
            { "name": "McItems Check Out", "to": "/resources/mcitems-checkout" },
            { "name": "McMakerspace", "to": "/resources/mcmakerspace" },
            { "name": "McLegislation", "to": "/resources/mclegislation" },
            { "name": "McFUNd Requests", "to": "/resources/mcfund-requests" },
            { "name": "Budget Sheet", "to": "https://docs.google.com/spreadsheets/d/1imNFy7cyadxieh7JPcPRvMzB-LgMHozNkRzUX_Lwp1A/edit?usp=sharing" },
            { "name": "Financial Inclusivity", "to": "/resources/financial-inclusivity" }
        ]
    },
    {
        "name": "O-Weeks",
        "subheaders": [
            { "name": "2026", "to": "/oweek/2026" },
            { "name": "2025", "to": "/oweek/2025" },
            { "name": "2024", "to": "/oweek/2024" },
            { "name": "2023", "to": "/oweek/2023" }
        ]
    }
];

const SiteNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);   // top-level item name
    const [openMobileSection, setOpenMobileSection] = useState(null);

    // Lock body scroll while the mobile drawer is open
    useEffect(() => {
        if (typeof document === 'undefined') return;
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const closeAll = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
        setOpenMobileSection(null);
    };

    return (
        <React.Fragment>
            <header className="mc-navbar" role="banner">
                <Link href="/home/index">
                    <a className="mc-navbar-brand">
                        <img
                            src="/static/logos/hero-crest.png"
                            alt=""
                            className="mc-navbar-crest"
                        />
                        <span className="mc-navbar-wordmark">McMurtry College</span>
                    </a>
                </Link>

                <nav className="mc-navbar-links" aria-label="Main">
                    {navbar_headers.map((header) => {
                        const hasDropdown = header.subheaders && header.subheaders.length > 0;
                        if (!hasDropdown) {
                            return (
                                <Link href={header.to || '#'} key={header.name}>
                                    <a className="mc-navbar-link">{header.name}</a>
                                </Link>
                            );
                        }
                        return (
                            <div
                                key={header.name}
                                className="mc-navbar-item"
                                onMouseEnter={() => setOpenDropdown(header.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button
                            type="button"
                            className="mc-navbar-link mc-navbar-trigger"
                            aria-expanded={openDropdown === header.name}
                            aria-haspopup="menu"
                            onClick={() =>
                                setOpenDropdown(
                                    openDropdown === header.name ? null : header.name
                                )
                            }
                        >
                            {header.name}
                            <span
                                className={"mc-navbar-caret" + (openDropdown === header.name ? " mc-navbar-caret-open" : "")}
                                aria-hidden="true"
                            />
                                </button>
                                <div
                                    className={
                                        'mc-navbar-dropdown' +
                                        (openDropdown === header.name
                                            ? ' mc-navbar-dropdown-open'
                                            : '')
                                    }
                                    role="menu"
                                >
                                    {header.subheaders.map((sub) => {
                                        // Nested submenu &rdquo;” `children` array, no `to`.
                                        if (sub.children && sub.children.length > 0) {
                                            return (
                                                <div
                                                    key={sub.name}
                                                    className="mc-navbar-dropdown-link mc-navbar-submenu"
                                                    role="menuitem"
                                                    aria-haspopup="menu"
                                                >
                                                    <span className="mc-navbar-submenu-label">
                                                    <span
                                                        className="mc-navbar-submenu-caret"
                                                            aria-hidden="true"
                                                        />
                                                        {sub.name}
                                                    </span>
                                                    <div className="mc-navbar-submenu-panel" role="menu">
                                                        {sub.children.map((leaf) => {
                                                            const leafExt = leaf.to && leaf.to.startsWith('http');
                                                            return leafExt ? (
                                                                <a
                                                                    key={leaf.name}
                                                                    href={leaf.to}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="mc-navbar-dropdown-link"
                                                                    role="menuitem"
                                                                >
                                                                    {leaf.name}
                                                                </a>
                                                            ) : (
                                                                <Link href={leaf.to} key={leaf.name}>
                                                                    <a
                                                                        className="mc-navbar-dropdown-link"
                                                                        role="menuitem"
                                                                        onClick={() => setOpenDropdown(null)}
                                                                    >
                                                                        {leaf.name}
                                                                    </a>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            );
                                        }
                                        const external = sub.to && sub.to.startsWith('http');
                                        if (external) {
                                            return (
                                                <a
                                                    key={sub.name}
                                                    href={sub.to}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mc-navbar-dropdown-link"
                                                    role="menuitem"
                                                >
                                                    {sub.name}
                                                </a>
                                            );
                                        }
                                        return (
                                            <Link href={sub.to} key={sub.name}>
                                                <a
                                                    className="mc-navbar-dropdown-link"
                                                    role="menuitem"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    {sub.name}
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                <button
                    type="button"
                    className="mc-navbar-hamburger"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mc-mobile-drawer"
                    onClick={() => setMenuOpen(true)}
                >
                    <span className="mc-hamburger-line" />
                    <span className="mc-hamburger-line" />
                    <span className="mc-hamburger-line" />
                </button>
            </header>

            <div
                className={'mc-mobile-scrim' + (menuOpen ? ' mc-mobile-scrim-open' : '')}
                onClick={closeAll}
                aria-hidden="true"
            />
            <aside
                id="mc-mobile-drawer"
                className={'mc-mobile-drawer' + (menuOpen ? ' mc-mobile-drawer-open' : '')}
                aria-hidden={!menuOpen}
            >
                <button
                    type="button"
                    className="mc-mobile-drawer-close"
                    aria-label="Close menu"
                    onClick={closeAll}
                />
                <nav className="mc-mobile-drawer-links" aria-label="Mobile">
                    {navbar_headers.map((header) => {
                        const hasDropdown = header.subheaders && header.subheaders.length > 0;
                        const isOpen = openMobileSection === header.name;
                        if (!hasDropdown) {
                            return (
                                <Link href={header.to || '#'} key={header.name}>
                                    <a className="mc-mobile-drawer-link" onClick={closeAll}>
                                        {header.name}
                                    </a>
                                </Link>
                            );
                        }
                        return (
                            <div key={header.name} className="mc-mobile-drawer-section">
                                <button
                                    type="button"
                                    className="mc-mobile-drawer-link mc-mobile-drawer-trigger"
                                    aria-expanded={isOpen}
                                    onClick={() =>
                                        setOpenMobileSection(isOpen ? null : header.name)
                                    }
                                >
                                    {header.name}
                                    <span
                                        className={
                                            "mc-mobile-drawer-caret" +
                                            (isOpen ? " mc-mobile-drawer-caret-open" : "")
                                        }
                                        aria-hidden="true"
                                    />
                                </button>
                                {/* Sublinks always mounted; CSS animates the grid-row from 0fr to 1fr */}
                                <div
                                    className={
                                        'mc-mobile-drawer-sublinks' +
                                        (isOpen ? ' mc-mobile-drawer-sublinks-open' : '')
                                    }
                                    aria-hidden={!isOpen}
                                >
                                    <div className="mc-mobile-drawer-sublinks-inner">
                                    {header.subheaders.map((sub) => {
                                        // Nested group on mobile: render a small section
                                        // header followed by its indented children.
                                        if (sub.children && sub.children.length > 0) {
                                            return (
                                                <React.Fragment key={sub.name}>
                                                    <div className="mc-mobile-drawer-subsection">
                                                        {sub.name}
                                                    </div>
                                                    {sub.children.map((leaf) => {
                                                        const leafExt = leaf.to && leaf.to.startsWith('http');
                                                        return leafExt ? (
                                                            <a
                                                                key={leaf.name}
                                                                href={leaf.to}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="mc-mobile-drawer-sublink mc-mobile-drawer-sublink-nested"
                                                                tabIndex={isOpen ? 0 : -1}
                                                            >
                                                                {leaf.name}
                                                            </a>
                                                        ) : (
                                                            <Link href={leaf.to} key={leaf.name}>
                                                                <a
                                                                    className="mc-mobile-drawer-sublink mc-mobile-drawer-sublink-nested"
                                                                    onClick={closeAll}
                                                                    tabIndex={isOpen ? 0 : -1}
                                                                >
                                                                    {leaf.name}
                                                                </a>
                                                            </Link>
                                                        );
                                                    })}
                                                </React.Fragment>
                                            );
                                        }
                                        const external =
                                            sub.to && sub.to.startsWith('http');
                                        if (external) {
                                            return (
                                                <a
                                                    key={sub.name}
                                                    href={sub.to}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mc-mobile-drawer-sublink"
                                                    tabIndex={isOpen ? 0 : -1}
                                                >
                                                    {sub.name}
                                                </a>
                                            );
                                        }
                                        return (
                                            <Link href={sub.to} key={sub.name}>
                                                <a
                                                    className="mc-mobile-drawer-sublink"
                                                    onClick={closeAll}
                                                    tabIndex={isOpen ? 0 : -1}
                                                >
                                                    {sub.name}
                                                </a>
                                            </Link>
                                        );
                                    })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </nav>
            </aside>
        </React.Fragment>
    );
};

export default SiteNavbar;
