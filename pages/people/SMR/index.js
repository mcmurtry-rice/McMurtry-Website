import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { useSupabaseTable } from '../../../tools/database/useSupabaseTable';
import './index.css';
import { mailHref, MAIL_TARGET } from '../../../tools/emailLink';

const SMRPage = () => {
    const { rows: smr, isLoading } = useSupabaseTable('smr');
    const person = smr[0];

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='smr-page'>
                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Student Maintenance Rep</h1>
                </header>

                {isLoading || !person ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : (
                    <section className='smr-detail'>
                        <div className='smr-portrait'>
                            <img src={person.image} alt={person.name} className='smr-portrait-image' />
                        </div>
                        <div className='smr-info'>
                            <span className='smr-role'>Student Maintenance Rep</span>
                            <h2 className='smr-name'>{person.name}</h2>
                            {person.email ? (
                                <a href={mailHref(person.email)} {...MAIL_TARGET} className='smr-email'>
                                    {person.email}
                                </a>
                            ) : null}
                            <p className='smr-bio'>{person.body}</p>
                        </div>
                    </section>
                )}
            </div>

            <SiteFooter />
        </div>
    );
};

export default SMRPage;


