import React, { useRef } from 'react';
import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import { WatercolorFilters, WatercolorBlotch } from '../../../../components/oweek2026/WatercolorFilters';
import ScrollToTop from '../../../../components/oweek2026/ScrollToTop';
import Sidebar from '../../../../components/oweek2026/Sidebar';
import OWeekGate from '../../../../components/oweek2026/OWeekGate';
import BookPageNav from '../../../../components/oweek2026/BookPageNav';

const HEYZINE_BOOK_URL = 'https://heyzine.com/flip-book/31ff7c50f4.html';
// Same convention as static/oweek/2023-2025/oweekbook.pdf — drop the 2026
// PDF at this path once it's ready. Gives a plain fallback if Heyzine is
// down or blocked, and something a screen reader can actually reach.
const PDF_PATH = '/static/oweek/2026/oweekbook.pdf';

// Verified against the live flipbook: Heyzine's "#page/N" hash is its own
// internal spread index, not the book's printed page number, but it reliably
// works out to "the printed page number, rounded up to the next even number"
// (confirmed at both ends of the book and several points in between). Section
// divider hashes were found by testing directly; the sub-item hashes below are
// computed from that formula against the book's own table of contents.
// Re-verify all of this if the PDF is re-uploaded/replaced.
const BOOK_SECTIONS = [
    { label: 'Cover', page: 1 },
    {
        label: 'Section One: Intro to O-Week',
        page: 8,
        items: [
            { label: 'Welcome Letter', page: 10 },
            { label: 'What is O-Week?', page: 10 },
            { label: 'Mission Statement', page: 12 },
        ],
    },
    {
        label: 'Section Two: Move-In',
        page: 14,
        items: [
            { label: 'Move-In Day Instructions', page: 16 },
            { label: 'Important Contact Info', page: 16 },
            { label: 'Directions to McMurtry', page: 18 },
            { label: 'Campus Map', page: 20 },
            { label: 'Map of McMurtry', page: 22 },
            { label: 'Floor Layout', page: 24 },
            { label: 'Your Room', page: 24 },
            { label: 'What to Bring', page: 26 },
        ],
    },
    {
        label: 'Section Three: The Team',
        page: 29,
        items: [
            { label: 'O-Week Roles', page: 32 },
            { label: 'Meet The McCoordinators', page: 34 },
            { label: 'Meet the Advisors', page: 42 },
            { label: 'Meet the Peer Academic Advisors', page: 92 },
            { label: 'Affinity Letters', page: 98 },
        ],
    },
    {
        label: 'Section Four: McMurtry',
        page: 114,
        items: [
            { label: 'History & Traditions', page: 116 },
            { label: 'The McTeam', page: 120 },
            { label: 'President', page: 126 },
            { label: 'Chief Justice', page: 126 },
            { label: 'Government', page: 128 },
        ],
    },
    {
        label: 'Section Five: Greater Rice',
        page: 136,
        items: [
            { label: 'McMurtry and Rice Speak', page: 136 },
            { label: 'On-Campus Resources', page: 148 },
            { label: 'Beyond the Hedges', page: 150 },
            { label: 'Final Thoughts', page: 152 },
        ],
    },
];

const OWeek2026Book = () => {
    const iframeRef = useRef(null);

    return (
        <div className="page page-light groweek-page">
            <Header />
            <SiteNavbar />
            <OWeekGate>
                <div className="groweek">
                    <WatercolorFilters />
                    <Sidebar />
                    <ScrollToTop />
                    <WatercolorBlotch color="#c4aeda" size={400} style={{ top: '0%', left: '-10%' }} />
                    <WatercolorBlotch color="#e8a4c8" size={350} style={{ top: '5%', right: '-8%' }} />
                    <WatercolorBlotch color="#f0d86e" size={320} style={{ top: '40%', left: '-9%' }} />
                    <WatercolorBlotch color="#c8e2f0" size={300} style={{ bottom: '10%', right: '-7%' }} />

                    <section className="groweek-section" style={{ paddingTop: '2.5rem', maxWidth: '1100px' }}>
                        <h2 className="groweek-section-title">The O-Week Book</h2>
                        {HEYZINE_BOOK_URL ? (
                            <React.Fragment>
                                <div className="groweek-book-download-row">
                                    <a className="groweek-book-download-btn" href={PDF_PATH} download>
                                        Download the PDF
                                    </a>
                                </div>
                                <div className="groweek-book-rotate-notice">
                                    <div className="groweek-book-rotate-icon" aria-hidden="true">⟳📱</div>
                                    <p>Rotate your phone to landscape to read the book as a two-page spread.</p>
                                </div>
                                <div className="groweek-book-layout">
                                    <BookPageNav sections={BOOK_SECTIONS} bookUrl={HEYZINE_BOOK_URL} iframeRef={iframeRef} />
                                    <div className="groweek-book-frame-wrap">
                                        <iframe
                                            ref={iframeRef}
                                            allowFullScreen
                                            scrolling="no"
                                            className="groweek-book-frame"
                                            src={HEYZINE_BOOK_URL}
                                            title="Let It GrO-Week 2026 Book"
                                        />
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : (
                            <div className="groweek-mission" style={{ textAlign: 'center' }}>
                                <p style={{ textAlign: 'center' }}>Coming soon! The Let It GrO-Week Book will be available here before move-in.</p>
                            </div>
                        )}
                    </section>
                </div>
            </OWeekGate>
            <SiteFooter oweekSignature />
        </div>
    );
};

export default OWeek2026Book;
