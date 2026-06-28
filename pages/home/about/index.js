import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import './index.css';

const aboutLead =
    'McMurtry College is the 10th residential college to grace the Rice University campus.';

const aboutBody1 =
    'A LEED Gold certified building located on the northeastern edge of campus, it sits at the optimal location for those seeking the shortest path between their dorms and some of the most popular locations on campus, such as the academic quad (home to many buildings in which students will most likely have classes), Duncan Hall (for all things engineering), and the West Servery (the best place to eat at Rice).';

const aboutBody2Intro =
    "The college also boasts many fantastic amenities like a campfire pit in the middle of the quad, a wide roof with a lovely city view and a kitchen on every level. We affectionately call our commons the 'Yurt.' Other facilities include:";

const aboutAmenities = [
    "Burt's Teahouse and Deedee's Lounge on 5th floor",
    'an off-campus student lounge',
    'the game room',
    'music room',
    'McMurtry Innovation Space (MIS) on the 1st floor, with a plethora of study rooms throughout the college.'
];

const aboutBody3 =
    "McMurtry first opened its doors in the fall of 2009. The first generation of Murts numbered in the low seventies so Rice administration recruited some Will Rice College students to fill the remaining space. McMurtry survived the 'colonization' and the two groups have learned to coexist peacefully as sister colleges...until Beer Bike 2019.";

const burtBody1 =
    'Burt and Deedee McMurtry graduated from Rice University in 1956 and moved to the Bay Area in 1957 after Burt\'s fifth year at Rice. Burt received Bachelor of Arts and Bachelor of Science degrees in Electrical Engineering from Rice in 1956 and 1957, respectively. He continued his education at Stanford, where he earned a Master of Science and a doctoral degree in electrical engineering in 1959 and 1962, respectively. A Rice trustee emeritus, Burt McMurtry was a private investor and a founding partner of Technology Venture Investors and Institutional Venture Associates in California. Burt passed away on September 2nd, 2018 at his home in Palo Alto. Deedee McMurtry is an active volunteer, a trustee of the American Conservatory Theater (ACT) in San Francisco, and is involved with arts advisory committees at Stanford.';

const burtBody2 =
    'Burt served seventeen years on the Rice University board, eleven years on the Stanford University board (the last four as chairman, ending July 1, 2008,) and seven years on the board of the Carnegie Institution of Washington. Burt played a role in planning the residential college system back when he was a student at Rice. He was a student representative on the 1955 committee that set out the original mission and basic organizational design of the residential colleges.';

const burtBody3 =
    'The McMurtrys have a long history of support to Rice. They have established two endowed professorships and two endowed scholarships. The McMurtrys have also given to the Rice Annual Fund, the Class of 1956 Scholarship Fund and Anne and Charles Duncan Hall, where McMurtry Auditorium is named in their honor, in addition to many other areas of the campus.';

const AboutPage = () => (
    <div className="page page-light">
        <Header />
        <SiteNavbar />

        <div className="mc-about-page">

            <section className="mc-about" aria-label="About McMurtry">
                <img src="/static/icons/about-swoosh.svg" alt="" className="mc-about-swoosh" aria-hidden="true" />
                <img src="/static/icons/ellipse-large.svg" alt="" className="mc-about-ellipse-large" aria-hidden="true" />
                <img src="/static/icons/ellipse-small.svg" alt="" className="mc-about-ellipse-small" aria-hidden="true" />

                <h2 className="mc-about-heading">About McMurtry</h2>

                <div className="mc-about-collage">
                    <figure className="mc-about-card mc-about-card-1">
                        <img src="/static/general_pics/mcm-quad.png" alt="" className="mc-about-card-img" />
                        <figcaption className="mc-about-card-caption">McMurtry Commons</figcaption>
                    </figure>
                    <figure className="mc-about-card mc-about-card-2">
                        <img src="/static/general_pics/yurt.jpg" alt="" className="mc-about-card-img" />
                        <figcaption className="mc-about-card-caption">Inside the Yurt</figcaption>
                    </figure>
                    <figure className="mc-about-card mc-about-card-3">
                        <img src="/static/general_pics/building.jpg" alt="" className="mc-about-card-img" />
                        <figcaption className="mc-about-card-caption">McMurtry College</figcaption>
                    </figure>
                </div>

                <div className="mc-about-body">
                    <p className="mc-about-lede">{aboutLead}</p>
                    <p className="mc-about-para">{aboutBody1}</p>
                    <hr className="mc-divider" aria-hidden="true" />
                    <p className="mc-about-para">{aboutBody2Intro}</p>
                    <ul className="mc-about-list">
                        {aboutAmenities.map((a) => (
                            <li key={a}>{a}</li>
                        ))}
                    </ul>
                    <hr className="mc-divider" aria-hidden="true" />
                    <p className="mc-about-para">{aboutBody3}</p>
                </div>
            </section>

            <section className="mc-burt" aria-label="Burt and Deedee McMurtry">
                <img src="/static/icons/burt-swoosh.svg" alt="" className="mc-burt-swoosh" aria-hidden="true" />
                <img src="/static/icons/ellipse-large.svg" alt="" className="mc-burt-ellipse-large" aria-hidden="true" />
                <img src="/static/icons/ellipse-small.svg" alt="" className="mc-burt-ellipse-small" aria-hidden="true" />

                <h2 className="mc-burt-heading">Bert &amp; Deedee Murt</h2>

                <div className="mc-burt-body">
                    <p className="mc-burt-para">{burtBody1}</p>
                    <hr className="mc-divider" aria-hidden="true" />
                    <p className="mc-burt-para">{burtBody2}</p>
                    <hr className="mc-divider" aria-hidden="true" />
                    <p className="mc-burt-para">{burtBody3}</p>
                </div>

                <div className="mc-burt-collage">
                    <figure className="mc-burt-card mc-burt-card-1">
                        <img src="/static/general_pics/burt-deedee.png" alt="" className="mc-burt-card-img" />
                        <figcaption className="mc-burt-card-caption">Burt &amp; Deedee McMurtry</figcaption>
                    </figure>
                    <figure className="mc-burt-card mc-burt-card-2">
                        <img src="/static/general_pics/associates.jpg" alt="" className="mc-burt-card-img" />
                        <figcaption className="mc-burt-card-caption">Associates Dinner</figcaption>
                    </figure>
                </div>
            </section>

        </div>

        <SiteFooter />
    </div>
);

export default AboutPage;


