import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
const themeData = {
  subtitle: "PicassO-Week 2025",
  heroImage: "images/hero/2019AdvisingTeam.jpg",
  paragraphs: [
    "In the exhibition of 2025, New Students will enter Rice with a clean slate and the newfound freedom to decide how they wish to paint their future. Our mission for McMurtry's PicassO-Week is to equip our incoming painters with the palette to transform their blank canvas into an eventual masterpiece - a collage of academic and personal successes that they can treasure for years to come.",
    "To create an artwork from scratch, an artist needs to have a plethora of tools at their disposal: a vibrant palette, a diverse array of brushes and pens, and most importantly, an open imagination. These instruments of success are analogous to the values we hope to instill in our new Murts during PicassO-Week: spirit, inclusion, and creativity. Just as we marvel at artworks from across continents, movements, and time periods, we are so excited to admire the variety of beautiful students from all backgrounds curated together in our McMurtry museum.",
    "Here at McMurtry, we can't wait to see the first brush strokes on your canvas of memories, and we hope that the connections and celebrations of O-Week provide inspiration for your artistry. As PicassO-Week begins, don't forget that your studio is filled with hands-on helpers. A diverse and enthusiastic team of advisors, affiliates, and A-Team members are waiting to model McMurtry's characteristic spirit and inclusivity.",
    "Although only you can decide how to make your mark at Rice University, remember that you will now always have a place in the gallery we call home: McMurtry."
  ]
};

const groupsData = {
  oweek_groups: [
    { name: "The Realism Housewives",                                    image: "images/groups/therealismhousewivesgroup.jpeg" },
    { name: "The Brushlorette: One Lucky Murt",                          image: "images/groups/BrushloretteGroup.jpg" },
    { name: "The Murtropolitan Museum Of Art (McMET)",                   image: "images/groups/Murtropolitan.jpg" },
    { name: "Bohemian Tapestry - I See A Little Silhouetto Of A Murt",   image: "images/groups/BohemianTapestrygroup.png" },
    { name: "Guardians Of The Gallery",                                  image: "images/groups/guardiansofthegallery.png" },
    { name: "Candy Brush",                                               image: "images/groups/candybrush.png" },
    { name: "Pendrick Lamar: Etch Don't Kill My Vibe",                   image: "images/groups/pendricklamar.JPG" },
    { name: "Kahlo Me By Your Name",                                     image: "images/groups/kahlo.png" },
    { name: "MoMA Mia! Here We Gogh Again",                              image: "images/groups/MoMAGroup.jpeg" },
    { name: "Total Drawma Island",                                       image: "images/groups/totaldrawmaisland.jpg" },
    { name: "Tyler the McCreator: Call Me If Hue Get Lost",              image: "images/groups/callmeifhuegetlostgroupsmiley.jpg" },
    { name: "The PiCostco Guys - We Bring The Hue",                      image: "images/groups/picostcoguys.png" },
  ]
};

const coordinatorsData = {
  coordinators: [
    {
      name: "Cara Brown",
      pronouns: "(she/her)",
      year: "Junior",
      major: "Chemistry, Art History",
      from: "Phoenix, AZ",
      image: "images/coords/cara.JPG",
      linkedin: "",
      email: "cb116@rice.edu",
      phone: "(480) 341-9841",
      bio: [
        "You're walking down the Inner Loop. You see someone wearing a stylish outfit listening to Brat by Charli XCX (with wired headphones, of course) walking to Dell Butcher Hall. You think to yourself, \"Who is that?\" The little Carlos on your shoulder whispers, \"It's THE Cara Brown!\" As the first Ca in CaCaYa, Cara is from Phoenix, AZ, but was born in Austin, TX, so she's a Texan by birth. As a dual Chemistry and Art History major (you know she had to double it), Cara can do it all: take really aesthetic pictures in Houston's museums for your Instagram, invent new molecules, and add then drop ANOTHER major in Biosciences.",
        "When she's not dazzling the academic world or running Sunday Sundaes and Fun with Chemistry like the icon she is, you can catch Cara curating a god-tier Spotify playlist, doing elite hauls at Trader Joe's, or wandering the The Museum of Fine Arts, Houston like she owns the place (she does spiritually). From chemistry research to Powderpuff, she's got range, and a keen eye for the vibes. If you're lucky, she'll take you on a museum date and tell you about her favorite TJ's snacks on the way.",
        "Cara's energy is something that everyone should experience. She really knows how to bring out the best in you and was tied with Yaz for the first overall pick in the \"Someone You Want to Be Friends With\" draft in 2025. Whether it be someone to laugh with, confide in, or cry with, Cara is your one-stop shop for it all. Set a timer on your phone until August 17th and put in your Google Calendar \"Meet Cara\" (and get ready for O-Week while you're at it). She physically cannot wait to meet you and welcome you to your new home - just like the kind, non-soccer mom caretaker energy she provides!",
        "-Carlos Cruz (McMurtry '27) and Yazmine Miles (McMurtry '27)"
      ],
      bioImageAlign: "left"
    },
    {
      name: "Carlos Cruz",
      pronouns: "(he/him)",
      year: "Junior",
      major: "Biosciences, Religion",
      from: "Houston, TX",
      image: "images/coords/carlos.JPG",
      linkedin: "https://www.linkedin.com/in/cruz-a-carlos/",
      email: "cc211@rice.edu",
      phone: "(832) 878-1009",
      bio: [
        "Somewhere off 610, a Buc-ee's pajama set just hit the pavement with a volleyball in one hand and a Chipotle chicken al pastor bowl with no toppings in the other. \"Who is that?\" you may ask. It's Carlos Cruz radiating main character energy on a casual Tuesday. The middle Ca in CaCaYa (and the heart of the group), Carlos reps Houston with pride (even though he'll tell you he's from New York) and is a walking masterclass in how to be the kindest, chillest person alive. He's the best setter on this side of the net and the friend who will drop everything to make sure you're okay, probably while handing you a Chaus drink.",
        "When he's not being a Murt icon or dominating the volleyball court, Carlos is either boarding a plane for his next adventure, going to the gym (sometimes), curating a vibe-checked playlist featuring Malcolm Todd, Peach Pit, and Dominic Fike, or making a spontaneous Panda Express run that somehow turns into a core memory. He's a connoisseur of good times and great convos, with a sixth sense for knowing exactly when the group needs a laugh, a jam session, or a spontaneous hang.",
        "Carlos is your hype man, your safe space, and the reason O-Week will feel like home before you even unpack. Whether it's a 2 a.m. heart-to-heart or a spontaneous trip to get fries from Whataburger and talk about life, Carlos is always down, and you'll be so glad he is.",
        "-Yazmine Miles (McMurtry '27) and Cara Brown (McMurtry '27)"
      ],
      bioImageAlign: "right"
    },
    {
      name: "Yazmine Miles",
      pronouns: "(she/her)",
      year: "Junior",
      major: "Sports Medicine and Exercise Physiology",
      from: "Yuma, AZ",
      image: "images/coords/yazmine.JPG",
      linkedin: "https://www.linkedin.com/in/yazmine-miles-b175b6289/",
      email: "yam1@rice.edu",
      phone: "(928) 304-4418",
      bio: [
        "A hot new bombshell just entered the villa, and her name starts with Y and ends in azmine! Yaz \"Lil Puff\" Miles is the Ya in CaCaYa, and she comes all the way from Yuma, a border town in Arizona. Speaking of towns, Yaz is also a dual-citizen of FunnyVille - Population: 1. When you're blessed with her presence, count down the seconds it will take for you to burst into laughter. Even though she's not as funny as Carlos, she is probably better in every other possible way! As a Sports Medicine major, Yaz's kindness shines as she hopes to take care of her co-coords when we're older. Right, Yaz?",
        "When she's not saving the world one Rice 360 project at a time or running Murt like a boss (seriously, she is the McMinistry), you can find Yaz rewatching Dance Moms with Olympic-level passion and generating perfect PicassO-Week graphics with ChatGPT. She's got J. Cole in her ears, fire in her soul, and sunglasses on her face (do y'all want to see the 0.5 pictures??).",
        "On move-in day during BistrO-Week 2023, we remember seeing someone confident, hilarious, and kind - an immediate friend crush. You truly are not going to meet someone else with as big of a heart as Yaz (unless their names are Cara or Carlos). We are so excited to see you meet Yaz because she is someone you cannot and don't want to forget. Yaz is unbelievably ecstatic to see y'all, so start packing for O-Week!!!",
        "-Cara Brown (McMurtry '27) and Carlos Cruz (McMurtry '27)"
      ],
      bioImageAlign: "left"
    }
  ],
  leadership: {
    mailingAddress: {
      lines: [
        "(Your name here)",
        "McMurtry College",
        "1605 Rice Blvd.",
        "Houston, TX 77005"
      ],
      note: "You can only mail or ship things to arrive after August 14th. Our space is limited and not secure, so please bring important items with you. There will be plenty of time to purchase other personal items during and after O-Week."
    },
    president: {
      role: "College President",
      name: "Berny Guerra Arthur",
      email: "mcmurtrypresident@gmail.com"
    },
    coordinator: {
      role: "College Coordinator",
      name: "Jackie Carrizales",
      email: "jjc3@rice.edu",
      office: "(713) 348-4583",
      fax: "(713) 348-3135"
    },
    magisters: {
      role: "Magisters",
      name: "Elizabeth Vann & Jeffery Fleisher",
      emails: ["evann@rice.edu", "jfleisher@rice.edu"],
      phone: "(713) 348-4908"
    }
  }
};
import './index.css';

const config = {
    year: 2025,
    themeName: 'PicassO-Week',
    themeSubtitle: 'PicassO-Week 2025',
    moveInDate: '2026-08-17',
    pdfFilename: 'oweekbook.pdf',
    pdfDownloadName: 'McMurtry-OWeek-Book-2025.pdf',
    generalEmail: 'mcmurtryoweek@gmail.com',
    carousel: [
        { src: 'images/coords/groupphoto.JPG', alt: '2025 O-Week Coordinators',  caption: 'Meet Your 2025 O-Week Coordinators!',  description: 'Leading you through an unforgettable week' },
        { src: 'images/hero/arrival.jpg',       alt: 'O-Week Arrival',             caption: 'O-Week Arrival Day',                   description: 'Experience the magic of McMurtry traditions' },
        { src: 'images/hero/welcome.png',       alt: 'O-Week Welcome',             caption: 'Welcome to Your New Home',             description: 'Where lifelong friendships begin' },
        { src: 'images/hero/cardmovin.jpg',     alt: 'Moving In',                  caption: 'Move-In Day',                          description: 'Your journey at McMurtry starts here' },
        { src: '/static/general_pics/building.jpg', alt: 'McMurtry Building',          caption: 'McMurtry College',                     description: 'Your home away from home' },
        { src: 'images/hero/whatisoweek.png',   alt: 'What is O-Week',             caption: 'What is O-Week?',                      description: 'A week of bonding, fun, and Rice traditions' },
    ],
};

const IMG = (rel) => `/static/oweek/2025-2026/${rel}`;
const PDF_PATH = `/static/oweek/2025-2026/${config.pdfFilename}`;

const coords = coordinatorsData.coordinators;
const { mailingAddress, president, coordinator, magisters } = coordinatorsData.leadership;
const groups = groupsData.oweek_groups;
const carouselImages = config.carousel.map(s => ({ ...s, src: s.src.startsWith('/') ? s.src : IMG(s.src) }));

const SECTIONS = [
    { id: 'home',      label: 'O-Week Home' },
    { id: 'theme',     label: 'About the Theme' },
    { id: 'coords',    label: 'Meet the Coords' },
    { id: 'groups',    label: 'O-Week Groups' },
    { id: 'mcmtour',   label: 'Tour of McMurtry' },
    { id: 'yourroom',  label: 'Your Room' },
    { id: 'oweekbook', label: 'O-Week Book' },
    { id: 'contact',   label: 'Contact Info' },
];

/* ---- Countdown ---- */
const useCountdown = (dateStr) => {
    const target = React.useMemo(() => { const [y,m,d] = dateStr.split('-').map(Number); return new Date(y, m-1, d); }, [dateStr]);
    const [parts, setParts] = useState(null);
    useEffect(() => {
        const calc = () => {
            const diff = target - Date.now();
            if (diff <= 0) { setParts(null); return; }
            const s = Math.floor(diff / 1000);
            const days = Math.floor(s / 86400);
            const hrs  = Math.floor((s % 86400) / 3600);
            const mins = Math.floor((s % 3600) / 60);
            const secs = s % 60;
            setParts({ days, hrs, mins, secs });
        };
        calc();
        const id = setInterval(calc, 1000);
        return () => clearInterval(id);
    }, [target]);
    return parts;
};

const CountdownDisplay = ({ dateStr }) => {
    const parts = useCountdown(dateStr);
    if (!parts) return null;
    return (
        <div className='ow-countdown'>
            {[['Days', parts.days], ['Hours', parts.hrs], ['Mins', parts.mins], ['Secs', parts.secs]].map(([label, val]) => (
                <div className='ow-countdown-unit' key={label}>
                    <span className='ow-countdown-num'>{String(val).padStart(2, '0')}</span>
                    <span className='ow-countdown-label'>{label}</span>
                </div>
            ))}
        </div>
    );
};

/* ---- Sticky section nav ---- */
const SectionNav = () => {
    const [active, setActive] = useState('home');
    const innerRef = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
        }, { rootMargin: '-40% 0px -55% 0px' });
        SECTIONS.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
        return () => obs.disconnect();
    }, []);
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollNav = (dir) => {
        if (innerRef.current) innerRef.current.scrollBy({ left: dir * 160, behavior: 'smooth' });
    };
    return (
        <nav className='ow-section-nav' aria-label='Page sections'>
            <button className='ow-section-nav-arrow ow-section-nav-arrow-left' onClick={() => scrollNav(-1)} aria-label='Scroll left'>&#8249;</button>
            <div className='ow-section-nav-inner' ref={innerRef}>
                {SECTIONS.map(s => (
                    <button
                        key={s.id}
                        className={`ow-section-nav-btn${active === s.id ? ' ow-section-nav-btn-active' : ''}`}
                        onClick={() => scrollTo(s.id)}
                    >
                        {s.label}
                    </button>
                ))}
            </div>
            <button className='ow-section-nav-arrow ow-section-nav-arrow-right' onClick={() => scrollNav(1)} aria-label='Scroll right'>&#8250;</button>
        </nav>
    );
};

/* ---- Page ---- */
const OWeekPage = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <div className='ow-page'>

            {/* ===== HOME ===== */}
            <section id='home' className='ow-section'>
                <header className='ev-hero ow-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Welcome to McMurtry!</h1>
                    <p className='ev-hero-lede'>{config.themeSubtitle}</p>
                </header>
                <div className='ow-carousel-wrap'>
                    <ImageCarousel images={carouselImages} autoplay={true} />
                </div>
                <div className='ow-info-grid'>
                    <div className='ow-info-card'>
                        <h3 className='ow-info-card-title'>What is O-Week?</h3>
                        <p className='ow-info-card-body'>Orientation Week (O-Week) is an exciting introduction to life at Rice University and McMurtry College. Led by our dedicated O-Week coordinators and advisors, you'll participate in fun activities, college traditions, and bonding experiences that will help you make lifelong friends and feel at home.</p>
                    </div>
                    <div className='ow-info-card'>
                        <h3 className='ow-info-card-title'>What to Expect</h3>
                        <p className='ow-info-card-body'>From icebreakers and team-building activities to exploring campus and learning about Rice traditions, O-Week is packed with memorable moments. You'll meet your college family, discover resources, and prepare for your academic journey while having an incredible time!</p>
                    </div>
                </div>
            </section>

            <SectionNav />

            {/* ===== THEME ===== */}
            <section id='theme' className='ow-section ow-content-section'>
                <h2 className='ow-section-title'>About the Theme</h2>
                <div className='ow-prose-wrap'>
                    <img src={IMG(themeData.heroImage)} alt='' className='ow-float-img ow-float-left' />
                    {themeData.paragraphs.map((p, i) => <p key={i} className='ow-prose'>{p}</p>)}
                </div>
            </section>

            {/* ===== COORDS ===== */}
            <section id='coords' className='ow-section ow-content-section'>
                <h2 className='ow-section-title'>Meet the Coords</h2>
                <div className='ow-coord-cards'>
                    {coords.map(({ name, pronouns, year, major, from, image, linkedin }) => (
                        <div className='ow-coord-card' key={name}>
                            {linkedin ? (
                                <a href={linkedin} target='_blank' rel='noopener noreferrer' className='ow-coord-img-link'>
                                    <img src={IMG(image)} alt={name} className='ow-coord-img' />
                                </a>
                            ) : (
                                <img src={IMG(image)} alt={name} className='ow-coord-img' />
                            )}
                            <div className='ow-coord-info'>
                                <p className='ow-coord-name'>{name}</p>
                                <p className='ow-coord-meta'>{pronouns}</p>
                                <p className='ow-coord-meta'>{year} &middot; {major}</p>
                                <p className='ow-coord-meta'>{from}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {coords.map(({ name, image, bio, bioImageAlign }) => (
                    <div key={name} className='ow-prose-wrap ow-coord-bio'>
                        <h3 className='ow-subsection-title'>{name}</h3>
                        <img
                            src={IMG(image)}
                            alt={name}
                            className={`ow-float-img ${bioImageAlign === 'right' ? 'ow-float-right' : 'ow-float-left'}`}
                        />
                        {bio.map((line, i) => <p key={i} className='ow-prose'>{line}</p>)}
                    </div>
                ))}
            </section>

            {/* ===== GROUPS ===== */}
            <section id='groups' className='ow-section ow-content-section'>
                <h2 className='ow-section-title'>O-Week Groups</h2>
                {[
                    ['What is an O-Week Group?', "Your O-Week group consists of 10-14 New Students and 4-5 upperclassmen Advisors (one will be a Co-Advisor and one may be an Affiliate) who are beyond excited to welcome you to the best residential college on campus! All throughout O-Week, you will be preparing for registration and academic life at Rice and interacting with the rest of your incoming class at McMurtry, but your O-Week group is designed primarily to give you more of a personal support system during the week and throughout the year."],
                    ['What is an Advisor?', "Advisors are a diverse group of students from McMurtry who are so enthusiastic about welcoming you to Rice that they don't mind returning here almost two full weeks before classes start to help you move in and start your time at Rice! These fantastic people have been hand-selected to act as your guides throughout O-Week; they'll make sure you get to all activities and meetings, answer any questions you might have, and serve as all-around resources."],
                    ['What is a Co-Advisor?', "Co-Advisors make up about a fourth of our team and are students who are equally friendly and enthusiastic about welcoming you to Rice, but they hail from other residential colleges! Co-Advisors love McMurtry so much that they choose to join McMurtry's O-Week as an ambassador of their home college."],
                    ['What is an Affiliate?', "Affiliates are O-Week personnel who serve specific roles designed to help you with your transition to Rice. Most O-Week groups will have at least one Affiliate. These Affiliate positions include: Peer Academic Advisors, Diversity Facilitators, Photographer, Videographer, Gopher, Rice Health Advisor, Associates Liaison, Athletic Liaison, Student Maintenance Representative, Chief Justice, and President."],
                ].map(([title, body]) => (
                    <div key={title} className='ow-prose-wrap'>
                        <h3 className='ow-subsection-title'>{title}</h3>
                        <p className='ow-prose'>{body}</p>
                    </div>
                ))}
                <h3 className='ow-subsection-title' style={{ textAlign: 'center', marginBottom: '32px' }}>Find Your O-Week Group</h3>
                <div className='ow-groups-grid'>
                    {groups.map(({ name, image }) => (
                        <div className='ow-group-card' key={name}>
                            <img src={IMG(image)} alt={name} className='ow-group-img' />
                            <p className='ow-group-name'>{name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== MCM TOUR ===== */}
            <section id='mcmtour' className='ow-section ow-content-section'>
                <h2 className='ow-section-title'>Tour of McMurtry</h2>
                <div className='ow-prose-wrap'>
                    <h3 className='ow-subsection-title'>McMurtry Double and Facilities Tour</h3>
                    <div className='ow-video-wrap'>
                        <iframe
                            src='https://www.youtube.com/embed/09bT6qW7mDw'
                            frameBorder='0'
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            title='McMurtry Tour Video'
                        />
                    </div>
                    <p className='ow-prose' style={{ textAlign: 'center', marginTop: '24px' }}>
                        If you were assigned a single, please email <a href='mailto:mcmurtryoweek@gmail.com' className='ow-link'>mcmurtryoweek@gmail.com</a> for your room video.
                    </p>
                </div>
            </section>

            {/* ===== YOUR ROOM ===== */}
            <section id='yourroom' className='ow-section ow-content-section'>
                <h2 className='ow-section-title'>Your Room</h2>
                <div className='ow-prose-wrap'>
                    <h3 className='ow-subsection-title'>McMurtry Doubles</h3>
                    <p className='ow-prose'>Coming in as new students to McMurtry, you will most likely be placed in doubles (a room for two people) with your roommate. We have attached a floor plan of your 18x18 to give you an idea of what your room will look like. When you get to your room on the first day, there will be a bed, desk, dresser, nightstand, and chair. Feel free to move these around as desired!</p>
                </div>
                <div className='ow-prose-wrap'>
                    <h3 className='ow-subsection-title'>Included Furniture</h3>
                    <img src={IMG('images/hero/room.JPG')} alt='McMurtry Room' className='ow-float-img ow-float-right' />
                    <p className='ow-prose'><strong>Per Person:</strong></p>
                    <ul className='ow-list'>
                        <li>1 Twin XL Sized Bed Frame</li>
                        <li>1 Twin XL Sized Mattress</li>
                        <li>1 Large Dresser</li>
                        <li>1 Small Dresser / Nightstand</li>
                        <li>1 Desk</li>
                        <li>1 Chair</li>
                    </ul>
                </div>
            </section>

            {/* ===== O-WEEK BOOK ===== */}
            <section id='oweekbook' className='ow-section ow-content-section'>
                <h2 className='ow-section-title'>O-Week Book</h2>
                <div className='ow-book-actions'>
                    <a href={PDF_PATH} download={config.pdfDownloadName} className='ow-book-btn'>
                        Download O-Week Book
                    </a>
                </div>
                <div className='ow-book-viewer'>
                    <PDFViewer src={PDF_PATH} title='McMurtry O-Week Book' height={900} />
                </div>
            </section>

            {/* ===== CONTACT ===== */}
            <section id='contact' className='ow-section ow-content-section'>
                <h2 className='ow-section-title'>Contact Info</h2>

                {/* Mailing address */}
                <div className='ow-address-box'>
                    <div className='ow-address-box-left'>
                        <p className='ow-address-box-label'>Your Mailing Address</p>
                        {mailingAddress.lines.map((line, i) => (
                            <p key={i} className='ow-address-box-line'>{line}</p>
                        ))}
                    </div>
                    <div className='ow-address-box-note'>
                        <strong>Note:</strong> {mailingAddress.note}
                    </div>
                </div>

                {/* Coordinators */}
                <h3 className='ow-subsection-title'>O-Week Coordinators</h3>
                <p className='ow-contact-email-row'>
                    General email: <a href={`mailto:${config.generalEmail}`} className='ow-link'>{config.generalEmail}</a>
                </p>
                <div className='ow-coord-contact-grid'>
                    {coords.map((c) => (
                        <div key={c.name} className='ow-coord-contact-card'>
                            <img src={IMG(c.image)} alt={c.name} className='ow-contact-photo' />
                            <div className='ow-contact-card-body'>
                                <p className='ow-contact-name'>{c.name}</p>
                                <p className='ow-contact-meta'>{c.pronouns} &middot; {c.major}</p>
                                <a href={`mailto:${c.email}`} className='ow-link ow-contact-detail'>{c.email}</a>
                                <span className='ow-contact-detail'>{c.phone}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leadership */}
                <h3 className='ow-subsection-title' style={{ marginTop: '56px' }}>College Leadership</h3>
                <div className='ow-leadership-grid'>
                    {[
                        { role: president.role, name: president.name, details: [{ label: president.email, href: `mailto:${president.email}` }] },
                        { role: coordinator.role, name: coordinator.name, details: [
                            { label: coordinator.email, href: `mailto:${coordinator.email}` },
                            { label: `Office: ${coordinator.office}` },
                            { label: `Fax: ${coordinator.fax}` },
                        ]},
                        { role: magisters.role, name: magisters.name, details: [
                            ...magisters.emails.map(e => ({ label: e, href: `mailto:${e}` })),
                            { label: magisters.phone },
                        ]},
                    ].map(({ role, name, details }) => (
                        <div key={name} className='ow-leadership-card'>
                            <span className='ow-contact-role'>{role}</span>
                            <p className='ow-contact-name'>{name}</p>
                            {details.map((d, i) => d.href
                                ? <a key={i} href={d.href} className='ow-link ow-contact-detail'>{d.label}</a>
                                : <span key={i} className='ow-contact-detail'>{d.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </div>
        <SiteFooter />
    </div>
);

export default OWeekPage;
