import React from 'react';
import { Box } from 'rebass';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import './diversityResources.css';

const resources = {
    "resources": [
        {
            "title": "Resources on Anti-racism and Policing",
            "links": [
                { "link": "https://www.brookings.edu/blog/up-front/2020/05/30/bad-apples-come-from-rotten-trees-in-policing/", "descr": "Brookings - Bad apples come from rotten trees in policing" }
            ]
        },
        {
            "title": "Resources on ICE",
            "links": [
                { "link": "https://qz.com/1316098/what-is-ice-supposed-to-do-the-strange-history-of-us-immigration-and-customs-enforcement/amp", "descr": "Quartz - No one really knows what the ICE is supposed to be" },
                { "link": "https://www.ice.gov/history", "descr": "History of ICE" },
                { "link": "https://www.nytimes.com/2020/07/10/us/ice-coronavirus-deportation.html", "descr": "The New York Times - How ICE Helped Spread the Coronavirus" },
                { "link": "https://www.washingtonpost.com/local/education/ice-rule-harvard-international-students-rescinded/2020/07/14/319fdae0-c607-11ea-a99f-3bbdffb1af38_story.html", "descr": "The Washington Post - Trump administration backs off plan requiring international students to take face-to-face classes" }
            ]
        },
        {
            "title": "Resources on Prison Abolition",
            "links": [
                { "link": "https://www.vox.com/policy-and-politics/2020/7/9/21307137/abolish-ice-police-immigrant-black-lives-matter", "descr": "Vox - How â€œabolish ICEâ€ helped bring abolitionist ideas into the mainstream" },
                { "link": "https://www.politico.com/magazine/story/2018/08/15/abolish-prisons-is-the-new-abolish-ice-219361", "descr": "Politico - 'Abolish Prisons' Is the New 'Abolish ICE'" }
            ]
        },
        {
            "title": "Resources on First-Gen/Low-Income",
            "links": [
                { "link": "https://www.howtocollegefirstgen.org/episodes/episode-01", "descr": "How to College: First Gen Podcast: Episode 1" }
            ]
        },
        {
            "title": "Resources on Dia de los Muertos",
            "links": [
                { "link": "https://www.nationalgeographic.com/travel/destinations/north-america/mexico/top-ten-day-of-dead-mexico/", "descr": "National Geographic - Top 10 things to know about the Day of the Dead" }
            ]
        },
        {
            "title": "Resources on Minority and Local Business",
            "links": [
                { "link": "https://forms.gle/1BMAgmQVyEjRVWxKA", "descr": "Suggestions Form" },
                { "link": "https://docs.google.com/spreadsheets/d/18nF8CY0eRnPWQ4yITqaLYVGfbHMUVrhx9u5kwbrj0Hk/edit?usp=sharing", "descr": "Suggestions Results" }
            ]
        }
    ]
};

const DiversityResourcesPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='diversity-resources-page'>
            <div className='dr-hero'>
                <h1 className='dr-main-title'>Diversity Resources</h1>
            </div>
            <div className='dr-center-container'>
                <Link href='/resources/BlackLivesMatter'>
                    <div className='blm-banner-card'>
                        <h2 className='blm-title'>Black Lives Matter</h2>
                        <p className='blm-subtitle'>McMurtry College stands with the movement &#8594;</p>
                    </div>
                </Link>
            </div>
            <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto' mb={[20, 50]} mt={[10, 20]} px={[0, 0, 'auto', 'auto']}>
                <h2 className='dr-section-title'>McMurtry Resources Guide</h2>
                <PDFViewer src='/static/documents/mcmurtry_resources.pdf' />
                <div className='doc-link-container'>
                    <a href='../../../static/documents/mcmurtry_resources.pdf' target='_blank' rel='noopener noreferrer' className='dr-download-link'>
                        <img src='/static/icons/file.svg' alt='' />
                        <span>Open Full Guide</span>
                    </a>
                </div>
            </Box>
            {resources.resources.map((section, i) => (
                <Box key={i} width={[0.95, 0.8]} mx='auto' mb={5}>
                    <div className='dr-subtitle-container'>
                        <h2 className='dr-subtitle'>{section.title}</h2>
                    </div>
                    <div className='dr-links-grid'>
                        {section.links.map(resource => (
                            <a href={resource.link} className='dr-link-card' key={resource.descr} target='_blank' rel='noopener noreferrer'>
                                <div className='dr-card-icon'>
                                    <img src='/static/icons/file.svg' alt='' />
                                </div>
                                <p className='dr-link-text'>{resource.descr}</p>
                            </a>
                        ))}
                    </div>
                </Box>
            ))}
        </div>
        <SiteFooter />
    </div>
);

export default DiversityResourcesPage;
