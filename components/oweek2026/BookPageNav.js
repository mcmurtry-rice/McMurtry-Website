import React, { useState } from 'react';

// Jumps the Heyzine flipbook to a given page by reloading the iframe with a
// "#page/N" hash - Heyzine's viewer reads that hash on load to open to that
// spread. Verified live against a real Heyzine embed: setting the hash from
// outside the iframe (e.g. contentWindow.location.hash) is blocked cross-origin,
// but reassigning the iframe's src with the new hash works reliably.
const BookPageNav = ({ sections, bookUrl, iframeRef }) => {
    const [openSection, setOpenSection] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const jumpTo = (page) => {
        if (!iframeRef.current || !bookUrl) return;
        iframeRef.current.src = `${bookUrl}#page/${page}`;
        setDrawerOpen(false);
    };

    return (
        <React.Fragment>
            <button
                className="groweek-book-nav-tab"
                onClick={() => setDrawerOpen(!drawerOpen)}
                aria-expanded={drawerOpen}
                aria-label="Table of contents"
            >
                <span aria-hidden="true">{drawerOpen ? '‹' : '›'}</span>
            </button>
            {drawerOpen && (
                <div className="groweek-book-nav-scrim" onClick={() => setDrawerOpen(false)} />
            )}
            <nav className={'groweek-book-nav' + (drawerOpen ? ' groweek-book-nav-drawer-open' : '')} aria-label="Jump to book section">
            {sections.map((section) => {
                const hasItems = section.items && section.items.length > 0;
                const isOpen = openSection === section.label;
                return (
                    <div className="groweek-book-nav-group" key={section.label}>
                        <button
                            className="groweek-book-nav-btn"
                            onClick={() => {
                                jumpTo(section.page);
                                if (hasItems) setOpenSection(isOpen ? null : section.label);
                            }}
                            aria-expanded={hasItems ? isOpen : undefined}
                        >
                            {section.label}
                            {hasItems && (
                                <span className="groweek-book-nav-caret" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                            )}
                        </button>
                        {hasItems && isOpen && (
                            <div className="groweek-book-nav-sublist">
                                {section.items.map((item) => (
                                    <button
                                        key={item.label}
                                        className="groweek-book-nav-subbtn"
                                        onClick={() => jumpTo(item.page)}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
            </nav>
        </React.Fragment>
    );
};

export default BookPageNav;
