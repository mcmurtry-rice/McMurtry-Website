import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import { WatercolorFilters, WatercolorBlotch } from '../../../../components/oweek2026/WatercolorFilters';
import ScrollToTop from '../../../../components/oweek2026/ScrollToTop';
import Sidebar from '../../../../components/oweek2026/Sidebar';
import OWeekGate from '../../../../components/oweek2026/OWeekGate';

// Content transcribed from "Move-In Day Instructions", "Important Contact
// Info", "Directions to McMurtry", and "What to Bring" (The O-Week Book,
// pages 15-18 and 25-26).
const OWeek2026MoveIn = () => (
    <div className="page page-light groweek-page">
        <Header />
        <SiteNavbar />
        <OWeekGate>
            <div className="groweek">
                <WatercolorFilters />
                <Sidebar />
                <ScrollToTop />
                <WatercolorBlotch color="#e8985a" size={400} style={{ top: '0%', left: '-10%' }} />
                <WatercolorBlotch color="#c4aeda" size={350} style={{ top: '5%', right: '-8%' }} />
                <WatercolorBlotch color="#7db87a" size={320} style={{ top: '40%', left: '-9%' }} />
                <WatercolorBlotch color="#c8e2f0" size={300} style={{ bottom: '10%', right: '-7%' }} />

                <section className="groweek-section" style={{ paddingTop: '2.5rem' }}>
                    <h1 className="groweek-section-title">Move-In Day Instructions</h1>
                    <div className="groweek-mission">
                        <p>Plan to arrive in the morning on Sunday, August 16th. When you arrive at Rice, please enter through Entrance #1 (the main entrance), take your first right, and follow the signs for McMurtry. After you unload, you will be given directions for where to park for the remainder of the morning. As you get closer to McMurtry, Advisors will be holding signs, yelling your name, and welcoming you to the college. They are super excited to meet you!</p>
                        <p>Your Advisors, maybe some helpful football players, will empty your car and start moving your stuff into the building (that&apos;s right - you don&apos;t have to do ANY work). In the meantime, you and your family will be introduced to our wonderful College Coordinator, Jackie, who will give you your keys and other important information. After you check that all your belongings are in your room, you will meet the McTeam (our amazing Core Team), who will welcome you to McMurtry and Rice. They are so excited to meet you and you can read more about them later in this book! You will also have some time to unpack and begin setting up your room.</p>
                        <p>Around noon, there will be lunch for you, your family, and your Advisors. Soon after lunch, it will be time to say a final goodbye to your family, and head off to join your O-Week group for the first time. While your family and loved ones stay behind for a New Families Orientation, you will be starting one of the most jam-packed and fun-filled weeks of your college career!</p>
                    </div>
                </section>

                <section className="groweek-section">
                    <img
                        src="/static/oweek/2026/movein/route-map.png"
                        alt="Move-in day arrival route map, showing the path from Entrance 1 to McMurtry College"
                        style={{ width: '100%', maxWidth: '700px', display: 'block', margin: '0 auto', borderRadius: '20px', boxShadow: '0 4px 30px rgba(139, 106, 173, 0.15)' }}
                    />
                </section>

                <section className="groweek-section">
                    <h2 className="groweek-section-title">Important Contact Info</h2>
                    <div className="groweek-info-grid">
                        <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-purple)' }}>
                            <h3>O-Week Coordinators</h3>
                            <p>
                                Ava Casperson<br />
                                Chad Federico<br />
                                Collin DeSoto
                            </p>
                            <p>
                                <a href="mailto:mcmurtryoweek@gmail.com">mcmurtryoweek@gmail.com</a>
                            </p>
                        </div>
                        <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-pink)' }}>
                            <h3>McMurtry College Coordinator</h3>
                            <p>
                                Jackie Carrizales<br />
                                <a href="mailto:jjc3@rice.edu">jjc3@rice.edu</a><br />
                                Office: (713) 348-4583<br />
                                Fax: (713) 348-3135
                            </p>
                        </div>
                        <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-green)' }}>
                            <h3>McMurtry College Magisters</h3>
                            <p>
                                Elizabeth Vann &amp; Jeffrey Fleisher<br />
                                <a href="mailto:evann@rice.edu">evann@rice.edu</a><br />
                                <a href="mailto:jfleisher@rice.edu">jfleisher@rice.edu</a>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="groweek-section">
                    <h2 className="groweek-section-title">Directions to McMurtry</h2>
                    <div className="groweek-info-grid">
                        <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-orange)' }}>
                            <h3>Arriving By Car</h3>
                            <p>
                                <strong>From the West on I-10 East:</strong> Take 610 South to US-59 North and exit at Greenbriar. Follow Greenbriar and turn left at Rice Boulevard. Stay on Rice Boulevard until it becomes Sunset Blvd. Turn right on Main Street and take an immediate right into campus at Entrance 1.
                            </p>
                            <p>
                                <strong>From the East on I-10 West:</strong> Take the US-59 South exit. From US-59 South, take the Fannin Street exit and travel south on Fannin until you reach Sunset Boulevard. Turn right on Sunset and make an immediate left onto Main Street. Turn right into campus at Entrance 1.
                            </p>
                            <p>
                                <strong>From the South on US-59 North:</strong> Exit at Greenbriar, stay on the frontage road, and turn right (south) onto Greenbriar. Follow Greenbriar to the light at Rice Boulevard. Turn left onto Rice Boulevard and stay on it until it becomes Sunset. Turn right on Main Street and take an immediate right into campus at Entrance 1.
                            </p>
                            <p>
                                <strong>From the North on US-59 South:</strong> Take the Fannin Street exit and travel south on Fannin until you reach Sunset Boulevard. Turn right on Sunset and make an immediate left onto Main Street. Turn right into campus at Entrance 1.
                            </p>
                        </div>
                        <div className="groweek-info-card groweek-card-accented" style={{ '--card-accent': 'var(--gw-sky)' }}>
                            <h3>Arriving By Plane</h3>
                            <p>Houston has two airports. George Bush Intercontinental (IAH) is about 22-25 miles north of campus (roughly 35-50 minutes by car). William P. Hobby (HOU) is about 10 miles southeast (roughly 25-35 minutes). Hobby is the closer and usually cheaper option if you have a choice.</p>
                            <p><strong>Rideshare (Uber/Lyft):</strong> The most common choice and available on demand at both airports. From IAH, expect roughly $40-$60, depending on time of day and surge pricing. From Hobby, expect roughly $30-$40. Follow the airport&apos;s signs to the designated rideshare pickup area.</p>
                            <p><strong>Taxi:</strong> Available at both airports&apos; ground transportation areas. Fares run a bit lower than rideshare from Hobby (about $25-$30 plus tip) and comparable or higher from IAH. Confirm the fare or that the meter is running before you depart.</p>
                            <p><strong>Private/pre-booked shuttle:</strong> Services such as ShuttleFare.com and ShuttleFinder.com let you compare and reserve shared or private rides to Rice in advance, often starting around $15-$33 per person.</p>
                            <p><strong>Public transit (not recommended):</strong> There is no rail line directly to either airport. METRO local buses connect both airports toward the city, and the METRORail Red Line stops at Rice University (the Texas Medical Center / Rice U area). It&apos;s the cheapest route (a few dollars) but the slowest, typically involving a bus-to-rail transfer and around an hour or more of travel.</p>
                        </div>
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
            </div>
        </OWeekGate>
        <SiteFooter />
    </div>
);

export default OWeek2026MoveIn;
