import React, { useState, useEffect } from 'react';
import { Box } from 'rebass';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import './index.css';

const DESCRIPTION =
    'Divisional Advisors are faculty members from each of Rice’s academic divisions ' +
    'who serve as a resource and point of contact for McMurtry students.';

const advisors = [
    {
        name: 'Christopher Jermaine',
        career: 'School of Engineering, Computer Science',
        email: 'cmj4@rice.edu',
        office: '3011 Duncan Hall',
        bio: 'I received a BA from the Mathematics Department at UCSD, an MSc from the Computer Science and Engineering Department at OSU, and a PhD from the College of Computing at Georgia Tech. I am the recipient of a 2008 Alfred P. Sloan Foundation Research Fellowship, a National Science Foundation CAREER award, and a 2007 ACM SIGMOD Best Paper Award. I have been at Rice since January 2009.\n\nIn my spare time, I enjoy running, gardening, and outdoor activities such as hiking, climbing, and whitewater boating. I’ve walked the John Muir Trail twice (250+ miles total each time) as well as Glyndwr’s Way in Wales, carrying my then-3-year-old son on my back. I’ve hiked and/or climbed 12 out of the 13 14,000-foot peaks in California. In one particular exploit, my wife and I floated a whitewater raft (home-made from scratch) over 100 miles down the Nizina River in Alaska.',
    },
    {
        name: 'Emily Houlik-Ritchey',
        career: 'School of Humanities, English',
        email: 'emily.houlik-ritchey@rice.edu',
        office: '235 Herring Hall',
        bio: 'I teach and research the literature of the Middle Ages written in medieval English and Spanish, studying the interaction of these cultural traditions with the wider medieval Mediterranean world. I received my Ph.D. at Indiana University, Bloomington, and was the Arnold Postdoctoral Fellow at UCSB before coming to Rice in 2015.\n\nI love teaching and regularly offer classes in Arthurian Literature, Geoffrey Chaucer, Medieval Romance, Race in the Middle Ages, and introductory courses to the English major. I am originally from Colorado, and my family travels back there regularly to hike, camp, ski, and see family. I use feminine pronouns, I am a sucker for really good chocolate, and I foster monarch butterfly caterpillars through their metamorphosis into butterflies.',
    },
    {
        name: 'Laura Kabiri',
        career: 'School of Natural Sciences, Kinesiology',
        email: 'laura.kabiri@rice.edu',
        office: 'S203 Tudor Field House',
        bio: 'Laura Kabiri is a human anatomy and physiology instructor in the Wiess School of Natural Sciences. She is also a licensed physical therapist with previous experience in the hospital setting. Her undergraduate degree is a BA in music (piano/voice), which made for an interesting transition into her graduate work (MS, DPT, PhD) in physical therapy.\n\nResearch interests cover pediatric health and wellness, including body composition, cardiorespiratory fitness, and motor skills. She is known to feed hungry stressed-out McMurts during finals with her regular Sweet and Salty event. Dr. Kabiri is a busy wife and mother of twin boys who enjoys reading, live music, playing with her Vizsla Hannah, and anything outdoors.',
    },
    {
        name: 'Ozge Gurcanli',
        career: 'School of Social Sciences, Psychology',
        email: 'ozge.gurcanli@rice.edu',
        office: '456 Sewall Hall',
        bio: 'Özge Gürcanlı received her Ph.D. in Cognitive Science from Johns Hopkins University in 2012 and joined Rice in January 2013. She teaches Introduction to Psychology, Developmental Psychology, Language Acquisition, and Research Methods.\n\nIn her research, she explores how monolingual and bilingual speakers (both children and adults) talk about the spatial world around them. She is a huge believer in experiential learning, and her developmental psychology course has received university-wide recognition. She also serves as a major advisor and director of the honors program in the Department of Psychology.',
    },
];

const AdvisorModal = ({ advisor, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    if (!advisor) return null;

    return (
        <div className='as-modal-overlay' onClick={onClose}>
            <div className='as-modal' onClick={e => e.stopPropagation()}>
                <button className='as-modal-close' onClick={onClose} aria-label='Close'>&times;</button>

                <div className='as-modal-media'>
                    <div className='as-modal-placeholder'>
                        <span>{advisor.name.charAt(0)}</span>
                    </div>
                </div>

                <div className='as-modal-body'>
                    <h2 className='as-modal-name'>{advisor.name}</h2>
                    <p className='as-modal-career'>{advisor.career}</p>

                    <div className='as-modal-section'>
                        <span className='as-modal-label'>Bio</span>
                        {advisor.bio.split('\n\n').map((para, i) => (
                            <p key={i} className='as-modal-text' style={i > 0 ? { marginTop: '1em' } : {}}>{para}</p>
                        ))}
                    </div>

                    <div className='as-modal-section'>
                        <span className='as-modal-label'>Contact</span>
                        <p className='as-modal-text'>
                            <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
                            <br />{advisor.office}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DivisionalAdvisorsPage = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='associates-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Divisional Advisors</h1>
                </header>

                <Box width={[0.9, 0.7, 0.6]} ml='auto' mr='auto' className='associates-mission'>
                    {DESCRIPTION}
                </Box>

                <div className='as-grid'>
                    {advisors.map((advisor) => (
                        <button
                            key={advisor.name}
                            type='button'
                            className='as-card'
                            onClick={() => setSelected(advisor)}
                        >
                            <div className='as-card-media'>
                                <div className='as-card-placeholder'>
                                    <span>{advisor.name.charAt(0)}</span>
                                </div>
                            </div>
                            <div className='as-card-body'>
                                <h3 className='as-card-name'>{advisor.name}</h3>
                                <p className='as-card-career'>{advisor.career}</p>
                                <span className='as-card-cta'>View profile <span aria-hidden='true'>&rsaquo;</span></span>
                            </div>
                        </button>
                    ))}
                </div>

                {selected ? (
                    <AdvisorModal advisor={selected} onClose={() => setSelected(null)} />
                ) : null}
            </div>

            <SiteFooter />
        </div>
    );
};

export default DivisionalAdvisorsPage;
