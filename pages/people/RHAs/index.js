import React from 'react';
import { Box } from 'rebass';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import Cards from '../../../components/ContactCard/ContactCard';
import { useSupabaseTable, distinctInOrder } from '../../../tools/database/useSupabaseTable';
import './index.css';

const RHA_PAGE_DESCRIPTION =
    'RHAs are students who have been trained on a variety of wellbeing topics. ' +
    'These students work at their college to provide health education opportunities, ' +
    'health supplies and peer guidance. RHAs also act as a liaison between the ' +
    'Student Wellbeing Office and the residential colleges, staying up to date on ' +
    'campus-wide wellbeing programming.';

const PHOTO_PLACEHOLDER =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';

const processMembers = (members) => members.map(m => ({
    ...m,
    photo: m.photo && m.photo.trim() !== '' ? m.photo : PHOTO_PLACEHOLDER,
}));

const RHAsPage = () => {
    const { rows, isLoading } = useSupabaseTable('rhas');
    const tabNames = distinctInOrder(rows, 'tab');

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='wellbeing-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Rice Health Advisors</h1>
                </header>

                <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='wellbeing-description'>
                    {RHA_PAGE_DESCRIPTION}
                </Box>

                {isLoading ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : (
                    tabNames.map((tabName) => {
                        const members = rows
                            .filter(r => r.tab === tabName)
                            .map(({ name, pronouns, bio, phone, email, photo }) =>
                                ({ name, pronouns, bio, phone, email, photo }));
                        return (
                            <section className='wellbeing-section' key={tabName}>
                                <h2 className='division-title'>{tabName}</h2>
                                <Cards content={processMembers(members)} />
                            </section>
                        );
                    })
                )}
            </div>

            <SiteFooter />
        </div>
    );
};

export default RHAsPage;


