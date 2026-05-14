import React from 'react';
import Link from 'next/link';
import './intropage.css';

const aboutContent = [
    "A LEED Gold certified building located on the northeastern edge of campus, McMurtry sits at the optimal location for those seeking the shortest path between their dorms and some of the most popular locations on campus, such as the academic quad (home to many buildings in which students will most likely have classes), Duncan Hall (for all things engineering), and the West Servery (the best place to eat at Rice).",
    "The college also boasts many fantastic amenities like a campfire pit in the middle of the quad, a wide roof with a lovely city view and a kitchen on every level. We affectionately call our commons the \"Yurt.\" Other facilities include:",
    null,
    "McMurtry first opened its doors in the fall of 2009. The first generation of Murts numbered in the low seventies so Rice administration recruited some Will Rice College students to fill the remaining space. McMurtry survived the \"colonization\" and the two groups have learned to coexist peacefully as sister colleges...until Beer Bike 2019."
];

const aboutAmenities = [
    "Burt's Teahouse and Deedee's Lounge on 5th floor",
    "the game room",
    "music room",
    "TV room",
    "gym",
    "the McMurtry Innovation Space (MIS) on the 1st floor, with a plethora of study rooms throughout the college."
];

const burtDeedeeContent = [
    "Burt and Deedee McMurtry graduated from Rice University in 1956 and moved to the Bay Area in 1957 after Burt's fifth year at Rice. Burt received Bachelor of Arts and Bachelor of Science degrees in Electrical Engineering from Rice in 1956 and 1957, respectively. He continued his education at Stanford, where he earned a Master of Science and a doctoral degree in electrical engineering in 1959 and 1962, respectively. A Rice trustee emeritus, Burt McMurtry was a private investor and a founding partner of Technology Venture Investors and Institutional Venture Associates in California. His venture firms have backed such companies as KLA-Tencor, Adaptec, Altera, Compaq, Intuit, Linear Technology Corp. and Microsoft. Burt passed away on September 2nd, 2018 at his home in Palo Alto. Deedee McMurtry is an active volunteer, a trustee of the American Conservatory Theater (ACT) in San Francisco, and is involved with arts advisory committees at Stanford.",
    "Burt served seventeen years on the Rice University board, eleven years on the Stanford University board (the last four as chairman, ending July 1, 2008,) and seven years on the board of the Carnegie Institution of Washington. Burt played a role in planning the residential college system back when he was a student at Rice. He was a student representative on the 1955 committee that set out the original mission and basic organizational design of the residential colleges.",
    "The McMurtrys have a long history of support to Rice. They have established two endowed professorships and two endowed scholarships. The McMurtrys have also given to the Rice Annual Fund, the Class of 1956 Scholarship Fund and Anne and Charles Duncan Hall, where McMurtry Auditorium is named in their honor, in addition to many other areas of the campus."
];

const heroPills = [
    { label: 'O-Week', href: '/oweek' },
    { label: 'College', href: '/about' },
    { label: 'Calendar', href: '/about/calendar' },
    { label: 'The McMurtry Show', href: '/events' },
    { label: 'Events', href: '/events/artevents' }
];

const tripleStrip = [
    {
        src: '../../static/mcm_cohorts.jpg',
        caption: 'Rich traditions'
    },
    {
        src: '../../static/mcm_commons.jpg',
        caption: 'McMurtry Commons'
    },
    {
        src: '../../static/mcm10/yurt.jpg',
        caption: 'The amazing 5th views'
    }
];

const Intro = () => (
    <div className='intro-page'>
        {/* HERO */}
        <section className='hero'>
            <div className='hero-image-wrap'>
                <img src='../../static/oweek/building.jpg' alt='McMurtry College building' className='hero-image' />
                <div className='hero-overlay' />
            </div>
            <div className='hero-content'>
                <h1 className='hero-title'>
                    <span className='hero-title-word'>McMurtry</span>
                    <img src='../../static/logo.svg' alt='' className='hero-crest' />
                    <span className='hero-title-word'>College</span>
                </h1>
                <div className='hero-pills'>
                    {heroPills.map((pill) => (
                        <Link href={pill.href} key={pill.label}>
                            <a className='hero-pill'>{pill.label}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        {/* YURT ILLUSTRATION */}
        <section className='yurt-band'>
            <img src='/static/YurtTrees.svg' alt='' className='yurt-image' />
        </section>

        {/* TRIPLE PHOTO STRIP */}
        <section className='triple-strip'>
            {tripleStrip.map((item) => (
                <figure className='triple-card' key={item.caption}>
                    <div className='triple-image-wrap'>
                        <img src={item.src} alt={item.caption} className='triple-image' />
                    </div>
                    <figcaption className='triple-caption'>{item.caption}</figcaption>
                </figure>
            ))}
        </section>

        {/* ABOUT MCMURTRY */}
        <section className='about-section'>
            <div className='about-grid'>
                <div className='about-left'>
                    <h2 className='about-heading'>About McMurtry</h2>
                    <div className='about-collage'>
                        <img src='../../static/mcm_commons.jpg' alt='' className='about-collage-img about-collage-img-1' />
                        <img src='../../static/oweek/building.jpg' alt='' className='about-collage-img about-collage-img-2' />
                        <img src='../../static/mcm10/yurt.jpg' alt='' className='about-collage-img about-collage-img-3' />
                    </div>
                </div>
                <div className='about-right'>
                    <p className='about-lede'>
                        McMurtry College is the 10th residential college to grace the Rice University campus.
                    </p>
                    {aboutContent.map((para, idx) => {
                        if (para === null) {
                            return (
                                <ul className='about-amenities' key='amenities'>
                                    {aboutAmenities.map((a, i) => (
                                        <li key={i}>{a}</li>
                                    ))}
                                </ul>
                            );
                        }
                        return <p className='about-para' key={idx}>{para}</p>;
                    })}
                </div>
            </div>
        </section>

        {/* BURT & DEEDEE */}
        <section className='burt-section'>
            <div className='burt-grid'>
                <div className='burt-left'>
                    {burtDeedeeContent.map((para, idx) => (
                        <p className='burt-para' key={idx}>{para}</p>
                    ))}
                </div>
                <div className='burt-right'>
                    <h2 className='burt-heading'>Burt &amp; Deedee McMurtry</h2>
                    <img src='../../static/burt_deedee.jpg' alt='Burt and Deedee McMurtry' className='burt-image' />
                </div>
            </div>
        </section>
    </div>
);

export default Intro;
