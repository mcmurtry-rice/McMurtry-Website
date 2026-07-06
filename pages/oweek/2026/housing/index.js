import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import { WatercolorFilters, WatercolorBlotch } from '../../../../components/oweek2026/WatercolorFilters';
import ScrollToTop from '../../../../components/oweek2026/ScrollToTop';
import Sidebar from '../../../../components/oweek2026/Sidebar';
import OWeekGate from '../../../../components/oweek2026/OWeekGate';

// Content transcribed from "Map of McMurtry + Spaces", "McMurtry Floor Plan",
// and "Your Room" (The O-Week Book, pages 21-24).
const SPACES = [
    { name: 'The Yurt', desc: 'What we call McMurtry Commons! It’s a circular building that’s fully surrounded by windows, offering lots of natural light. Come to eat, work, play games, or just chill!' },
    { name: 'Mailroom / Jackie’s Office', desc: 'The mail room is where you’ll receive all of your letters and packages. Come by to pick up your mail or just to say hi to Jackie :)' },
    { name: 'Laundry Room', desc: 'Located on the ground floor. Plenty of washers and dryers, all free, although it does tend to get busy so you might be waiting to catch a free one!' },
    { name: 'Movie Room', desc: '"Study Room 120" is actually our very own movie room! Comes with couches and a TV available for hosting fun movie nights with friends.' },
    { name: 'Gym', desc: 'Don’t feel like going all the way to the Rec for a quick workout? McMurtry’s got you covered with our very own gym, equipped with weights, a squat rack, a treadmill, and yoga mats!' },
    { name: 'Library & PDR', desc: 'The McMurtry Library and Private Dining Room (PDR) are located above West Servery, often used for quiet studying or club events.' },
    { name: 'McMakerspace', desc: 'Take a short safety quiz and you’ll have access to equipment including hand tools, art + electronic prototyping supplies, computers, 3D printers, and more!' },
    { name: 'Game Room', desc: 'The newly renovated Game Room is home to McMurtry’s pool table and air hockey table. The yellow and orange walls pay homage to the former hallway colors of McMurtry College.' },
    { name: '5th Floor', desc: 'The rooms on 5th floor are reserved for upperclassmen, but the top floor sundeck offers a nice space for all Murts to hang out outside.' },
];

const OWeek2026Housing = () => (
    <div className="page page-light">
        <Header />
        <SiteNavbar />
        <OWeekGate>
            <div className="groweek">
                <WatercolorFilters />
                <Sidebar />
                <ScrollToTop />
                <WatercolorBlotch color="#c4aeda" size={400} style={{ top: '0%', right: '-10%' }} />
                <WatercolorBlotch color="#7db87a" size={350} style={{ top: '5%', left: '-8%' }} />
                <WatercolorBlotch color="#e8a4c8" size={320} style={{ top: '40%', right: '-9%' }} />
                <WatercolorBlotch color="#f0d86e" size={300} style={{ bottom: '10%', left: '-7%' }} />

                <section className="groweek-section" style={{ paddingTop: '2.5rem' }}>
                    <h2 className="groweek-section-title">Map of McMurtry</h2>
                    <img
                        src="/static/oweek/2026/housing/building-map.png"
                        alt="Map of McMurtry College, showing stairwells A, B, C, and D, the Commons (the Yurt), and Magister's House"
                        style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto 1.5rem', borderRadius: '20px', boxShadow: '0 4px 30px rgba(139, 106, 173, 0.15)' }}
                    />
                    <div className="groweek-mission" style={{ textAlign: 'center' }}>
                        <p><strong>A, B, C, and D</strong> denote our four stairways. You&apos;ll often hear Murts say things like &quot;meet me by stair B&quot; or &quot;leaving from stair D.&quot;</p>
                        <p>Aside from some RFAs, no one lives on the ground (or 1st) floor. There, you&apos;ll find essentials like our laundry room, McMakerspace, gym, and more.</p>
                    </div>
                </section>

                <section className="groweek-section">
                    <h2 className="groweek-section-title">Spaces to Know</h2>
                    <div className="groweek-expect-grid">
                        {SPACES.map((space) => (
                            <div className="groweek-expect-item" key={space.name}>
                                <div>
                                    <h4>{space.name}</h4>
                                    <p>{space.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="groweek-section">
                    <h2 className="groweek-section-title">McMurtry Floor Plan</h2>
                    <img
                        src="/static/oweek/2026/housing/floor-plan.png"
                        alt="McMurtry Floor Plan, showing room numbering around a typical floor"
                        style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto 1.5rem', borderRadius: '20px', boxShadow: '0 4px 30px rgba(139, 106, 173, 0.15)' }}
                    />
                    <div className="groweek-info-grid">
                        <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-purple)' }}>
                            <h4>Kitchens</h4>
                            <p>McMurtry has kitchens on each 2nd-5th floor, equipped with a fridge, stove, oven, microwave, and essential cooking supplies. Just make sure to clean up after yourself when you&apos;re done.</p>
                        </div>
                        <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-pink)' }}>
                            <h4>Study Rooms</h4>
                            <p>McMurtry has two study rooms on the ground floor and one on each of the higher floors. Each study room offers a table and whiteboard for Murts to catch up on some work.</p>
                        </div>
                        <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-green)' }}>
                            <h4>4th Floor Lounge</h4>
                            <p>A flex common area equipped with mirrors and couches. Often used by students to practice dances or to hangout with friends!</p>
                        </div>
                    </div>
                </section>

                <section className="groweek-section groweek-last-section">
                    <h2 className="groweek-section-title">Your Room</h2>
                    <img
                        src="/static/oweek/2026/housing/room-layout.png"
                        alt="Diagram of a typical 18-foot by 18-foot McMurtry double room"
                        style={{ width: '100%', maxWidth: '340px', display: 'block', margin: '0 auto 1.5rem', borderRadius: '20px', boxShadow: '0 4px 30px rgba(139, 106, 173, 0.15)' }}
                    />
                    <div className="groweek-mission">
                        <p>Coming in as New Students to McMurtry, you will most likely be placed in a double (one room shared between two people) with your roommate. The diagram above should give you an idea of what your 18&apos;x18&apos; room will look like!</p>
                        <p>Dresser drawer: D 5.5&quot; L 61.5&quot; W 32&quot; · Nightstand drawer: D 22&quot; L 13.5&quot;</p>
                        <p className="groweek-pull-quote">
                            Every room has: bed, dresser, AC/heating unit, desk &amp; chair, ethernet port, private bathroom, built-in closet, cable TV outlet, towel racks, trash can &amp; recycling bin, shower curtain.
                        </p>
                    </div>
                </section>
            </div>
        </OWeekGate>
        <SiteFooter />
    </div>
);

export default OWeek2026Housing;
