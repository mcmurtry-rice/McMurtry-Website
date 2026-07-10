import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import './index.css';

const RESOURCES = [
    {
        href: 'https://goo.gl/forms/KEyPplLhclljdSOm2',
        title: "McMurtry Magisters' Fund",
        body: 'Apply for financial support to cover college event costs and merchandise.',
    },
    {
        href: 'https://aop.rice.edu/application',
        title: 'Rice Access and Opportunity Portal',
        body: 'Apply for funding to cover academic expenses like textbooks and supplies.',
    },
    {
        href: 'https://linktr.ee/ricemutualaid',
        title: 'Rice Mutual Aid Resources',
        body: 'Access community-based support and peer assistance networks.',
    },
];

const FinancialInclusivityPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />

        <div className='fin-inc-page'>

            <header className='ev-hero'>
                <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                <h1 className='ev-hero-heading'>Financial Inclusivity</h1>
            </header>

            <section className='fi-intro'>
                <p className='fi-intro-body'>McMurtry College has committed to making financial accessibility an utmost priority and to be a leader in the socioeconomic inclusivity initiative at Rice. This ongoing initiative, developed through town halls, conversations with the Magisters, and cabinet meetings, addresses socioeconomic inequality in social life at the college. It continues to evolve based on student feedback and outcomes we track over time.</p>

                <div className='fi-mission-card'>
                    <span className='fi-mission-label'>Our Mission</span>
                    <p className='fi-mission-text'>To create a residential college experience in which events and Murtchandise are accessible to all students regardless of socioeconomic status.</p>
                </div>
            </section>

            <section className='fi-support'>
                <h2 className='fi-section-heading'>How We Support You</h2>
                <div className='fi-support-card'>
                    <h3 className='fi-support-title'>The Magisters&apos; Fund</h3>
                    <p className='fi-support-body'>Students can opt into extra funding when in need. This fund is intended to cover ground we may miss with blanket subsidization, to offer extra support to students in difficult circumstances, and to avoid limiting students to only the social events that the college has deemed essential.</p>
                </div>
            </section>

            <section className='fi-resources'>
                <h2 className='fi-section-heading'>Resources</h2>
                <div className='fi-resource-grid'>
                    {RESOURCES.map((resource) => (
                        <a
                            key={resource.href}
                            href={resource.href}
                            className='fi-resource-card'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <h3 className='fi-resource-title'>{resource.title}</h3>
                            <p className='fi-resource-body'>{resource.body}</p>
                            <span className='fi-resource-cta'>
                                Open <span aria-hidden='true'>&rsaquo;</span>
                            </span>
                        </a>
                    ))}
                </div>
            </section>

        </div>

        <SiteFooter />
    </div>
);

export default FinancialInclusivityPage;
