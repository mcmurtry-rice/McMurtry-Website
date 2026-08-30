import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { useSiteLink, asEmbeddedForm } from '../../../tools/database/useSiteLinks';
import './index.css';

// Fallback: rendered on first paint and whenever Supabase is unreachable.
// Live value is the 'mcfund_request_form' row in site_links. Stored WITHOUT
// ?embedded=true - asEmbeddedForm() adds it, so an editor can paste whatever
// link Google's share dialog hands them and the frame still renders clean.
const MCFUND_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdHfWng8IW37QGSMz9lObCNHCRC1ifZjGxola_7udR-4A-f-Q/viewform';

const McFundPage = () => {
    const formUrl = useSiteLink('mcfund_request_form', MCFUND_FORM_URL);

    return (
        <div className='page page-light'>
            <Header />
            <SiteNavbar />
            <div className='mcfund-page'>

                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>McFUNd Requests</h1>
                    <p className='ev-hero-lede'>McFUNd supports student-led initiatives at McMurtry. Fill out the form below to request funding for your event, project, or program. Requests are reviewed by the McMurtry government.</p>
                </header>

                <div className='mcfund-form-wrap'>
                    <iframe
                        src={asEmbeddedForm(formUrl)}
                        width='100%'
                        height='3200'
                        frameBorder='0'
                        marginHeight='0'
                        marginWidth='0'
                        title='McFUNd Request Form'
                    >
                        Loading...
                    </iframe>
                </div>

            </div>
            <SiteFooter />
        </div>
    );
};

export default McFundPage;
