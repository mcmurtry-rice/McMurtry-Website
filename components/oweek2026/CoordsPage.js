import React from 'react';
import { WatercolorFilters, WatercolorBlotch } from './WatercolorFilters';
import ScrollToTop from './ScrollToTop';
import Sidebar from './Sidebar';
import PageNav from './PageNav';

// Bios transcribed from "Meet The McCoordinators" (The O-Week Book, pages 35-40) -
// written by the other coords about each other, kept in their original voice.
const COORDINATORS = [
    {
        name: 'Ava Casperson',
        slug: 'ava',
        major: 'Business Management, Political Science',
        from: 'Kingwood, TX',
        photo: '/static/oweek/2026/coords/ava.jpg',
        bio: [
            'HEY MURT!!! (Hey what?!?)',
            'Those chants you’re hearing aren’t just coming from any Murt… you’re hearing McMurtry’s very own POWERHOUSE of a hypewoman, Ava Casperson.',
            'You may know her as an O-Week Coord or Murt’s External Vice President, but everyone else (us included) know her well as THE. BACK. TO. BACK. Swim and Dive Team conference champion (if you doubt it, ask her close personal friend selena2trim). A Kingwood, TX native (she’ll say she’s from Houston), Business/Political Science/ChatGPT triple major, you KNOW you can count on Ava “Clap-that-asperson” to rally all of McMurtry college in the loudest and strongest way possible.',
            'Doing all of that must make her tired, but luckily enough, another one of her favorite pastimes is phone. Ava wears her screentime like a badge of HONOR. And you can hear it too. Any conversation with Ava is genuinely like rolling the dice on a hidden sleeper agent – any given word will trigger an exact one-to-one replica of any viral or recognizable sound, quote, song etc.',
            'Get to know her at all, and you will automatically be the next lucky recipient of a free weekly subscription to a new vocal stim (seriously, we’ve been singing “Sunflower” for wayyyyy too long at this point). She gon call me baby boo.',
            'Whether it’s making the prettiest and most OD-looking color-coded spreadsheet, sharing her cursed “for you” page, or curating the perfect O-Week playlist, Ava knows what it means to be dedicated. That same dedication carries the most to her friendships, where it truly shows that Ava is a fierce, loyal friend who always stands all ten toes down when it comes to defending and helping the people she cares about.',
            'And you know for SURE that that dedication is what makes McMurtry what it is today - and what will make your Let It GrO-Week experience so special. We hope you’re sufficiently hyped to meet Ava this year so that she can call you baby boo too <3.',
        ],
        bioBy: 'Collin DeSoto (McMurtry ‘28) and Chad Federico (McMurtry ‘28)',
    },
    {
        name: 'Chad Federico',
        slug: 'chad',
        major: 'Sports Analytics, Statistics',
        from: 'Long Island, NY',
        photo: '/static/oweek/2026/coords/chad.jpg',
        bio: [
            'Welcome back to the broadcast, coming at you LIVE from MCM Commons where our next batter is up: Chaaaaaaaaaad “C-Fed” Federico!',
            'Hailing all the way from Long Island, New York, Chad is our resident sports encyclopedia, Sports Analytics and Statistics double major, and the person you should find if you ever wished for the human version of ESPN and need a full explanation of a stat you did not know existed. As a general rule of thumb, if you want to know whether Chad is in a good mood, check the Yankees score first.',
            'When he’s not being McMurtry’s Sports Committee Head or working with the Rice Baseball Analytics Team, you can catch Chad living his y2k college student dreams, listening to a Rihanna or Katy Perry classic. Thought his baseball knowledge was impressive? Chad can name ALL 1,025 Pokemon just by seeing them. And somehow, he still has time to work on his Animal Crossing island, which probably took more hours to perfect than the Lorax movie.',
            'More than that, Chad is one of those people who notices the details everyone else misses. Whether it was something you said and forgot about or something you overlooked in your work, Chad always pays attention and remembers. If you ever think he’s wrong about something, he’ll even patiently wait for about 10 seconds until you realize that you were actually in fact wrong the whole time. He’s so dedicated to his teams, that he’ll even ask if it’s ok to use the restroom or eat food while working on a group project. With Chad, no stone gets left unturned, no one gets left behind and no tears are left to cry.',
            'We cannot wait for y’all to meet him, and he cannot wait to meet you - as long as the Yankees are doing okay ;)',
        ],
        bioBy: 'Collin DeSoto (McMurtry ‘28) and Ava Casperson (McMurtry ‘28)',
    },
    {
        name: 'Collin DeSoto',
        slug: 'collin',
        major: 'Psychology, Medical Humanities',
        from: 'Denton, TX',
        photo: '/static/oweek/2026/coords/collin.jpg',
        bio: [
            'If you see a pair of Birkenstock clogs moving through McMurtry with purpose, follow them. There is a strong chance you’ll find Collin DeSoto, with AirPods in, calendar full, listening to his niche music, and already on his way to make someone’s day 1000 times better. From Denton, Texas, Collin is resident host to any and every Murt ready for a fun time! Collin is a Psychology major, making him one of the wisest people in the Greater Houston Area. Collin is knowledgeable in more than just school, 67 times out of 10 he will understand ANY reference that you have seen online.',
            'If you’re ever looking for the definition of someone who “bleeds purple” for McMurtry, you don’t have to look further than Collin. O-Week Coord, McMurtry Prime Minister, and Socials Head by day, 5-star Doordasher/UberEats-er/Instacart-er by night. It’s hard to miss Collin around McMurtry and around Rice.',
            'From his infectious smile, common treks to working at his lab, or taking scooter shortcuts around campus (do NOT ask him what happened this past January), Collin’s familiar face will be your constant reminder that this is where you belong. We can say wholeheartedly that Collin will do his absolute best to make you feel comfortable at your new home. I mean, have you seen how well furnished his room is?!? But even more than that, just wait until you see the home that Collin has prepared to welcome you to at McMurtry. With every McMurtry event throughout O-Week and the school year, you’ll see Collin’s heart and soul poured into it. In fact, the best public of the year, McMurtry Y2K, would not have happened without him!!! As soon as you arrive and join the McMurtry community, you too will understand the whole new meaning he’s given to “purple” by Olivia Rodrigo.',
        ],
        bioBy: 'Chad Federico (McMurtry ‘28) and Ava Casperson (McMurtry ‘28)',
    },
];

const CoordsPage = () => (
    <div className="groweek">
        <WatercolorFilters />
        <Sidebar />
        <ScrollToTop />
        <WatercolorBlotch color="#e8a4c8" size={400} style={{ top: '0%', left: '-10%' }} />
        <WatercolorBlotch color="#c4aeda" size={350} style={{ top: '5%', right: '-8%' }} />
        <WatercolorBlotch color="#f0d86e" size={380} style={{ top: '35%', left: '-9%' }} />
        <WatercolorBlotch color="#c8e2f0" size={320} style={{ top: '60%', right: '-7%' }} />
        <WatercolorBlotch color="#7db87a" size={300} style={{ bottom: '5%', left: '-8%' }} />

        <section className="groweek-coords groweek-last-section" style={{ paddingTop: '2.5rem' }}>
            <h1 className="groweek-section-title">Meet Your Coordinators</h1>
            <p className="groweek-coords-contact-note">
                Questions for any of us? Reach us at{' '}
                <a href="mailto:mcmurtryoweek@gmail.com">mcmurtryoweek@gmail.com</a>.
            </p>

            <div className="groweek-coord-group-photo-wrap">
                <img
                    className="groweek-coord-group-photo"
                    src="/static/oweek/2026/coords/group.jpg"
                    alt="Ava Casperson, Chad Federico, and Collin DeSoto"
                />
                <a className="groweek-coord-group-name" href="#coord-chad" style={{ left: '21%' }}>Chad &apos;28</a>
                <a className="groweek-coord-group-name" href="#coord-ava" style={{ left: '54%' }}>Ava &apos;28</a>
                <a className="groweek-coord-group-name" href="#coord-collin" style={{ left: '81%' }}>Collin &apos;28</a>
            </div>

            {COORDINATORS.map((coord, i) => (
                <div className="groweek-coord-bio" id={'coord-' + coord.slug} key={coord.name}>
                    <h3 className="groweek-coord-bio-title">{coord.name}</h3>
                    <div className="groweek-coord-bio-badges">
                        <span className="groweek-coord-bio-badge">{coord.major}</span>
                        <span className="groweek-coord-bio-badge">{coord.from}</span>
                    </div>
                    <img
                        className={'groweek-float-img ' + (i % 2 === 1 ? 'groweek-float-right' : 'groweek-float-left')}
                        src={coord.photo}
                        alt={coord.name}
                    />
                    {coord.bio.map((para, pi) => (
                        <p key={pi} className="groweek-coord-bio-p">{para}</p>
                    ))}
                    <cite className="groweek-coord-bio-by">— {coord.bioBy}</cite>
                </div>
            ))}
        </section>

        <PageNav />
    </div>
);

export default CoordsPage;
