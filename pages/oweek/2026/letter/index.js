import '../oweek2026.css';
import Header from '../../../../components/Header/Header';
import SiteNavbar from '../../../../components/navbar/Navbar';
import SiteFooter from '../../../../components/Footer/Footer';
import { WatercolorFilters, WatercolorBlotch } from '../../../../components/oweek2026/WatercolorFilters';
import ScrollToTop from '../../../../components/oweek2026/ScrollToTop';
import Sidebar from '../../../../components/oweek2026/Sidebar';
import PageNav from '../../../../components/oweek2026/PageNav';

const OWeek2026Letter = () => (
    <div className="page page-light groweek-page">
        <Header />
        <SiteNavbar />
        <div className="groweek">
                <WatercolorFilters />
                <Sidebar />
                <ScrollToTop />
                <WatercolorBlotch color="#e8a4c8" size={400} style={{ top: '0%', right: '-10%' }} />
                <WatercolorBlotch color="#c4aeda" size={350} style={{ top: '5%', left: '-8%' }} />
                <WatercolorBlotch color="#f0d86e" size={320} style={{ top: '40%', right: '-9%' }} />
                <WatercolorBlotch color="#7db87a" size={300} style={{ bottom: '10%', left: '-7%' }} />

                <section className="groweek-section" style={{ paddingTop: '2.5rem' }}>
                    <h1 className="groweek-section-title">Letter to Parents</h1>
                    <div className="groweek-mission">
                        <img
                            className="groweek-float-img groweek-float-right groweek-letter-photo"
                            src="/static/oweek/2026/letter/coordspole.jpg"
                            alt="Ava, Chad, and Collin peeking out from behind the McMurtry College sign"
                        />
                        <p>Dear Families, Guardians, and Loved Ones of New Students,</p>
                        <p>We are more excited than imaginable to welcome your New Student to McMurtry College. We&apos;re confident that throughout O-Week and their first year at Murt, they&apos;ll develop a love for our college&apos;s tight knit community as deep as ours! We are a loving, diverse community of over 500 students (including your New Student!) and have a culture that focuses on deep connections and building community. Your New Student is matriculating into a college where they will be welcomed, accepted, and appreciated for their strengths and individuality.</p>
                        <p>Throughout O-Week, your New Student will be introduced to all of the resources Rice has to offer, including, but not limited to, our Center for Career Development (CCD), Office of Academic Advising (OAA), and the Wellbeing &amp; Counseling Center (WCC). While a lot of time during O-Week is spent reviewing the opportunities Rice affords its students, your New Student will also participate in activities geared toward helping them build friendships with their O-Week Groups and other members of Murt. They&apos;ll also create meaningful relationships with upperclassmen mentors, who will help introduce them to the culture here and at other Residential Colleges, extracurricular opportunities, and answer any questions they have about Rice. These upperclassmen, also called &quot;Advisors,&quot; have gone through an extensive application and interview process to be in their position and are dedicated to the success of your New Student. These Advisors will be a support system for them throughout their first year and beyond!</p>
                        <p>We know that sending your New Student to college could be a new and unfamiliar experience, but rest assured they are in great hands! We, your Let-It-GrO-Week Coordinators, have spent countless hours since January on creating a program that will properly introduce them to our Murt family. This summer we have been reviewing their New Student forms, creating their roommate pairings, placing them in an O-Week group, and meticulously planning O-Week in general. We are beyond excited for them to join the Murt family and are ready to embrace them with open arms!</p>
                        <p style={{ marginTop: '2rem', fontSize: '1.15rem' }}>
                            O-Week is forever,<br />
                            <cite className="groweek-coord-bio-by" style={{ display: 'block', marginTop: '0.5rem', fontSize: '2.25rem' }}>Ava, Chad, and Collin</cite>
                            <span style={{ display: 'block', fontSize: '1.05rem', color: 'var(--gw-ink-soft)', marginTop: '0.25rem' }}>Your 2026 Let-It-GrO-Week Coordinators</span>
                        </p>
                    </div>
                </section>

                <section className="groweek-section groweek-last-section">
                    <h2 className="groweek-section-title">Family Dismissal Procedures</h2>
                    <div className="groweek-mission">
                        <p>On move-in day, families of New Students will get to participate in the excitement of O-Week as they help unpack their student&apos;s bags and attend lunch at McMurtry College. Afterward, families will have time to say their final goodbyes to their New Students before leaving McMurtry. We know that leaving your New Student can be extremely difficult and emotional, but it is important to exit McMurtry when we dismiss you to be in compliance with university policies. Once you say your final goodbyes during the allotted time, you will not be allowed to re-enter Murt until after O-Week. New Students have an extremely packed schedule during these 6 days, and this ensures that your New Student can focus on making new friends, selecting classes, and transitioning to college life throughout the week!</p>
                        <p>After you leave Murt, you will be welcomed to Rice University and be addressed by President Reginald DesRoches and Dean of Undergraduates Bridgett Gorman. You will also have a day full of informational programming from the University before you leave campus.</p>
                    </div>
                </section>

                <PageNav />
            </div>
        <SiteFooter />
    </div>
);

export default OWeek2026Letter;
