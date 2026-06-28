import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
import './index.css';

const SECTIONS = [
    {
        title: 'Anti-Racism and Policing',
        links: [
            { href: 'https://www.brookings.edu/blog/up-front/2020/05/30/bad-apples-come-from-rotten-trees-in-policing/', label: 'Brookings: Bad apples come from rotten trees in policing' },
        ],
    },
    {
        title: 'ICE and Immigration',
        links: [
            { href: 'https://qz.com/1316098/what-is-ice-supposed-to-do-the-strange-history-of-us-immigration-and-customs-enforcement/amp', label: 'Quartz: No one really knows what ICE is supposed to be' },
            { href: 'https://www.ice.gov/history', label: 'History of ICE' },
            { href: 'https://www.nytimes.com/2020/07/10/us/ice-coronavirus-deportation.html', label: 'New York Times: How ICE Helped Spread the Coronavirus' },
            { href: 'https://www.washingtonpost.com/local/education/ice-rule-harvard-international-students-rescinded/2020/07/14/319fdae0-c607-11ea-a99f-3bbdffb1af38_story.html', label: 'Washington Post: Trump administration backs off plan for international students' },
        ],
    },
    {
        title: 'Prison Abolition',
        links: [
            { href: 'https://www.vox.com/policy-and-politics/2020/7/9/21307137/abolish-ice-police-immigrant-black-lives-matter', label: 'Vox: How "abolish ICE" helped bring abolitionist ideas into the mainstream' },
            { href: 'https://www.politico.com/magazine/story/2018/08/15/abolish-prisons-is-the-new-abolish-ice-219361', label: "Politico: 'Abolish Prisons' Is the New 'Abolish ICE'" },
        ],
    },
    {
        title: 'First-Gen / Low-Income',
        links: [
            { href: 'https://www.howtocollegefirstgen.org/episodes/episode-01', label: 'How to College: First Gen Podcast, Episode 1' },
        ],
    },
    {
        title: 'Dia de los Muertos',
        links: [
            { href: 'https://www.nationalgeographic.com/travel/destinations/north-america/mexico/top-ten-day-of-dead-mexico/', label: 'National Geographic: Top 10 things to know about Day of the Dead' },
        ],
    },
    {
        title: 'Minority and Local Business',
        links: [
            { href: 'https://forms.gle/1BMAgmQVyEjRVWxKA', label: 'Suggestions Form' },
            { href: 'https://docs.google.com/spreadsheets/d/18nF8CY0eRnPWQ4yITqaLYVGfbHMUVrhx9u5kwbrj0Hk/edit?usp=sharing', label: 'Local/Minority Owned Businesses' },
        ],
    },
];

const DiversityResourcesPage = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <div className='dr-page'>

            <header className='ev-hero'>
                <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                <h1 className='ev-hero-heading'>Diversity Resources</h1>
                <p className='ev-hero-lede'>A curated collection of resources on equity, inclusion, and community at McMurtry.</p>
            </header>

            {/* McMurtry Resources Guide PDF */}
            <section className='dr-pdf-section'>
                <h2 className='dr-section-heading'>McMurtry Resources Guide</h2>
                <PDFViewer
                    src='/static/documents/mcmurtry_resources.pdf'
                    title='McMurtry Resources Guide'
                    height={760}
                />
            </section>

            {/* External resource link sections */}
            <section className='dr-links-section'>
                <h2 className='dr-section-heading'>External Resources</h2>
                <div className='dr-categories'>
                    {SECTIONS.map((section) => (
                        <div className='dr-category' key={section.title}>
                            <h3 className='dr-category-title'>{section.title}</h3>
                            <div className='dr-link-list'>
                                {section.links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className='dr-link-card'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <svg className='dr-link-icon' width='16' height='16' viewBox='0 0 16 16' fill='none' aria-hidden='true'>
                                            <path d='M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            <path d='M9 2h5v5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            <path d='M14 2 8 8' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
                                        </svg>
                                        <span>{link.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
        <SiteFooter />
    </div>
);

export default DiversityResourcesPage;
