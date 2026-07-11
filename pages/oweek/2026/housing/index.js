import { useState } from 'react';
import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import { WatercolorFilters, WatercolorBlotch } from '../../../../components/oweek2026/WatercolorFilters';
import ScrollToTop from '../../../../components/oweek2026/ScrollToTop';
import Sidebar from '../../../../components/oweek2026/Sidebar';
import PageNav from '../../../../components/oweek2026/PageNav';

// Content transcribed from "Map of McMurtry + Spaces", "McMurtry Floor Plan",
// "Your Room", and "What to Bring" (The O-Week Book, pages 21-26).
const SPACES_FIRST_FLOOR = [
    { name: 'The Yurt', image: '/static/oweek/2026/spaces/yurt.png', desc: 'What we call McMurtry Commons! It’s a circular building that’s fully surrounded by windows, offering lots of natural light. Come to eat, work, play games, or just chill!' },
    { name: 'Mailroom / Jackie’s Office', image: '/static/oweek/2026/spaces/mailroom.png', desc: 'The mail room is where you’ll receive all of your letters and packages. Come by to pick up your mail or just to say hi to Jackie :)' },
    { name: 'Laundry Room', image: '/static/oweek/2026/spaces/laundry.png', desc: 'Located on the ground floor. Plenty of washers and dryers, all free, although it does tend to get busy so you might be waiting to catch a free one!' },
    { name: 'Movie Room', image: '/static/oweek/2026/spaces/movieroom.png', desc: '"Study Room 120" is actually our very own movie room! Comes with couches and a TV available for hosting fun movie nights with friends.' },
    { name: 'Gym', image: '/static/oweek/2026/spaces/gym.png', desc: 'Don’t feel like going all the way to the Rec for a quick workout? McMurtry’s got you covered with our very own gym, equipped with weights, a squat rack, a treadmill, and yoga mats!' },
    { name: 'McMakerspace', image: '/static/oweek/2026/spaces/makerspace.png', desc: 'Take a short safety quiz and you’ll have access to equipment including hand tools, art + electronic prototyping supplies, computers, 3D printers, and more!' },
    { name: 'Game Room', image: '/static/oweek/2026/spaces/gameroom.png', desc: 'The newly renovated Game Room is home to McMurtry’s pool table and air hockey table. The yellow and orange walls pay homage to the former hallway colors of McMurtry College.' },
];

const SPACES_UPPER_FLOORS = [
    { name: 'Library & PDR', image: '/static/oweek/2026/spaces/library.png', desc: 'The McMurtry Library and Private Dining Room (PDR) are located above West Servery, often used for quiet studying or club events.' },
    { name: 'Kitchens', image: '/static/oweek/2026/spaces/kitchen.png', desc: 'McMurtry has kitchens on each 2nd-5th floor, equipped with a fridge, stove, oven, microwave, and essential cooking supplies. Just make sure to clean up after yourself when you’re done.' },
    { name: 'Study Rooms', image: '/static/oweek/2026/spaces/studyroom.png', desc: 'McMurtry has two study rooms on the ground floor and one on each of the higher floors. Each study room offers a table and whiteboard for Murts to catch up on some work.' },
    { name: '4th Floor Lounge', image: '/static/oweek/2026/spaces/lounge.png', desc: 'A flex common area equipped with mirrors and couches. Often used by students to practice dances or to hangout with friends!' },
    { name: '5th Floor', image: '/static/oweek/2026/spaces/5th.png', desc: 'The rooms on 5th floor are reserved for upperclassmen, but the top floor sundeck offers a nice space for all Murts to hang out outside.' },
];

const TABS = [
    { id: 'maps', label: 'Murt Spaces' },
    { id: 'room', label: 'Your Room' },
];

const OWeek2026Housing = () => {
    const [tab, setTab] = useState('maps');

    return (
        <div className="page page-light groweek-page">
            <Header />
            <SiteNavbar />
                <div className="groweek">
                    <WatercolorFilters />
                    <Sidebar />
                    <ScrollToTop />
                    <WatercolorBlotch color="#c4aeda" size={400} style={{ top: '0%', right: '-10%' }} />
                    <WatercolorBlotch color="#7db87a" size={350} style={{ top: '5%', left: '-8%' }} />
                    <WatercolorBlotch color="#e8a4c8" size={320} style={{ top: '40%', right: '-9%' }} />
                    <WatercolorBlotch color="#f0d86e" size={300} style={{ bottom: '10%', left: '-7%' }} />

                    <h1 className="groweek-sr-only">Your Room - McMurtry College Housing Info</h1>

                    <div className="groweek-tab-switch" role="tablist" style={{ marginTop: '2.5rem' }}>
                        {TABS.map((t) => (
                            <button
                                key={t.id}
                                role="tab"
                                aria-selected={tab === t.id}
                                className={'groweek-tab-btn' + (tab === t.id ? ' groweek-tab-btn-active' : '')}
                                onClick={() => setTab(t.id)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {tab === 'maps' && (
                        <>
                            <section className="groweek-section">
                                <h2 className="groweek-section-title">Map of McMurtry</h2>

                                {/* first floor map */}
                                <div className="groweek-maps-grid">
                                    <div>
                                        <img
                                            src="/static/oweek/2026/housing/building-map.png"
                                            alt="Map of McMurtry College, showing stairwells A, B, C, and D, the Commons (the Yurt), and Magister's House"
                                            className="groweek-maps-img"
                                        />
                                        <p className="groweek-maps-caption">First Floor</p>
                                    </div>

                                    {/* 2nd-5th floor plan */}
                                    <div>
                                        <img
                                            src="/static/oweek/2026/housing/floor-plan.png"
                                            alt="McMurtry Floor Plan, showing room numbering around a typical floor"
                                            className="groweek-maps-img"
                                        />
                                        <p className="groweek-maps-caption">2nd-5th Floor Plan</p>
                                    </div>
                                </div>

                                {/* 1st floor spaces */}
                                <h3 className="groweek-subsection-title" style={{ marginTop: '2.5rem' }}>1st Floor</h3>
                                <div className="groweek-expect-grid">
                                    {SPACES_FIRST_FLOOR.map((space) => (
                                        <div className="groweek-expect-item groweek-space-card" key={space.name}>
                                            <img
                                                src={space.image}
                                                alt={space.name}
                                                className="groweek-space-img"
                                                onError={(e) => { e.target.src = '/static/oweek/2026/spaces/placeholder.png'; }}
                                            />
                                            <div>
                                                <h3>{space.name}</h3>
                                                <p>{space.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="groweek-mission" style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
                                    <p><strong>A, B, C, and D</strong> denote our four stairways. You&apos;ll often hear Murts say things like &quot;meet me by stair B&quot; or &quot;leaving from stair D.&quot;</p>
                                    <p>Aside from some RFAs, no one lives on the ground (or 1st) floor. There, you&apos;ll find essentials like our laundry room, McMakerspace, gym, and more.</p>
                                </div>

                                {/* 2nd-5th floor spaces */}
                                <h3 className="groweek-subsection-title">2nd-5th Floors</h3>
                                <div className="groweek-expect-grid">
                                    {SPACES_UPPER_FLOORS.map((space) => (
                                        <div className="groweek-expect-item groweek-space-card" key={space.name}>
                                            <img
                                                src={space.image}
                                                alt={space.name}
                                                className="groweek-space-img"
                                                onError={(e) => { e.target.src = '/static/oweek/2026/spaces/placeholder.png'; }}
                                            />
                                            <div>
                                                <h3>{space.name}</h3>
                                                <p>{space.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {tab === 'room' && (
                        <>
                            <section className="groweek-section">
                                <h2 className="groweek-section-title">Your Room</h2>
                                <div className="groweek-room-grid">
                                    <img
                                        src="/static/oweek/2026/housing/room-layout.png"
                                        alt="Diagram of a typical 18-foot by 18-foot McMurtry double room"
                                        className="groweek-room-map-img"
                                    />
                                    <div>
                                        <h3 className="groweek-furniture-title">Included Furniture</h3>
                                        <div className="groweek-furniture-gallery">
                                            <div className="groweek-furniture-item">
                                                <img src="/static/oweek/2026/housing/furniture/desk.png" alt="Watercolor illustration of a McMurtry dorm desk" />
                                                <p className="groweek-furniture-caption">Desk</p>
                                            </div>
                                            <div className="groweek-furniture-item">
                                                <img src="/static/oweek/2026/housing/furniture/chair.png" alt="Watercolor illustration of a McMurtry dorm chair" />
                                                <p className="groweek-furniture-caption">Chair</p>
                                            </div>
                                            <div className="groweek-furniture-item">
                                                <img src="/static/oweek/2026/housing/furniture/dresser.png" alt="Watercolor illustration of a McMurtry dorm dresser" />
                                                <p className="groweek-furniture-caption">Dresser</p>
                                            </div>
                                            <div className="groweek-furniture-item">
                                                <img src="/static/oweek/2026/housing/furniture/nightstand.png" alt="Watercolor illustration of a McMurtry dorm nightstand" />
                                                <p className="groweek-furniture-caption">Nightstand</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="groweek-mission" style={{ marginTop: '1.5rem' }}>
                                    <p>Coming in as New Students to McMurtry, you will most likely be placed in a double (one room shared between two people) with your roommate. The diagram above should give you an idea of what your 18&apos;x18&apos; room will look like!</p>
                                    <table className="groweek-measurements-table">
                                        <caption>Furniture measurements</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">Furniture</th>
                                                <th scope="col">Dimensions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Desk</th>
                                                <td>61&frac12;&quot; L &times; 32&quot; W &times; 30&quot; H</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Dresser</th>
                                                <td>61&frac12;&quot; L &times; 29&frac12;&quot; W &times; 30&quot; H (drawer depth 5.5&quot;)</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Nightstand drawer</th>
                                                <td>13.5&quot; L &times; 22&quot; D</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="groweek-pull-quote">
                                        Every room has: bed, dresser, AC/heating unit, desk &amp; chair, ethernet port, private bathroom, built-in closet, cable TV outlet, towel racks, trash can &amp; recycling bin, shower curtain.
                                    </p>
                                </div>
                            </section>

                            <section className="groweek-section groweek-last-section">
                                <h2 className="groweek-section-title">What to Bring</h2>
                                <div className="groweek-info-grid">
                                    <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-purple)' }}>
                                        <h3>Necessities</h3>
                                        <ul>
                                            <li>Toiletries + medicines</li>
                                            <li>Twin XL bedding</li>
                                            <li>Laundry detergent</li>
                                            <li>Towels/washcloths</li>
                                            <li>Clothes + hangers</li>
                                            <li>Hamper (easy to carry or has wheels)</li>
                                            <li>A week&apos;s worth of comfortable shorts and shoes for O-Week</li>
                                            <li>Identification (driver&apos;s license, passport, etc.)</li>
                                            <li>Up-to-date insurance card</li>
                                        </ul>
                                    </div>
                                    <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-pink)' }}>
                                        <h3>Popular Buys</h3>
                                        <ul>
                                            <li>Mattress pad</li>
                                            <li>TV</li>
                                            <li>Water bottle</li>
                                            <li>Iron/ironing board</li>
                                            <li>Carpet/rug/bath mat</li>
                                            <li>Brita filter</li>
                                            <li>Mini refrigerator (&lt; 3.2 cubic feet)</li>
                                            <li>Microwave (&lt; 1.5 cubic feet)</li>
                                            <li>Wall decorations</li>
                                            <li>Full-length mirror</li>
                                            <li>Furniture</li>
                                            <li>Mounting tape/Command strips</li>
                                            <li>Broom or vacuum</li>
                                        </ul>
                                    </div>
                                    <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-green)' }}>
                                        <h3>Useful Supplies</h3>
                                        <ul>
                                            <li>School supplies</li>
                                            <li>Desk lamp</li>
                                            <li>Shower accessories</li>
                                            <li>Storage/organizers</li>
                                            <li>Power strips/extension cords</li>
                                            <li>Backpack</li>
                                            <li>Computer &amp; chargers</li>
                                            <li>Bath mat</li>
                                        </ul>
                                    </div>
                                    <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-orange)' }}>
                                        <h3>What NOT to Bring</h3>
                                        <ul>
                                            <li>Toilet paper</li>
                                            <li>Trash cans</li>
                                            <li>Prohibited items</li>
                                            <li>Candles and incense</li>
                                            <li>Other cooking/heating appliances</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </>
                    )}

                    <PageNav />
                </div>
            <SiteFooter />
        </div>
    );
};

export default OWeek2026Housing;
