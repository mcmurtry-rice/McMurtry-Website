import React from 'react';
import { Box } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import './mcitemscheckout.css';

const McItemsCheckoutPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='mcitems-checkout-page'>
            <div className='oweek-hero'>
                <h1 className='oweek-main-title'>McMurtry McItems Check Out</h1>
            </div>
            <div className='center-div'>
                <Box width={[0.9, 0.7]} className='room-category'>
                    <p>McMurtry College offers a variety of shared items that students may request to use for personal, academic, creative, or event-related purposes.</p>
                    <p><strong>Please read all instructions carefully before submitting a request.</strong></p>
                    <div className='banner-container'>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdhZVcSHTxbKFDuWh9PN3sJAZ3jL-XDBTVaXpVUCgeh0ZYM-g/viewform' target='_blank' rel='noopener noreferrer'>
                            <Box className='accessibility-fund-banner'>
                                <p>McMurtry Items Check Out Form</p>
                            </Box>
                        </a>
                    </div>
                </Box>
            </div>
            <h2 className='section-title'>How the McItems Check Out Process Works</h2>
            {[
                { title: 'Step 1: Submit the Form', body: <><p>Fill out the McMurtry Items Check Out Form with your name, NetID, item, date/time, and purpose.</p><p>Please submit requests at least <strong>24 hours</strong> in advance.</p></> },
                { title: 'Step 2: Await Approval', body: <p>Submission does not guarantee approval. You will be contacted if approved or if more info is needed.</p> },
                { title: 'Step 3: Pick Up the Item', body: <p>Once approved, you will receive pickup instructions. Items may only be picked up during the approved window.</p> },
                { title: 'Step 4: Use the Item Responsibly', body: <p>You are responsible for its care. Items may not be handed off to other individuals.</p> },
                { title: 'Step 5: Return the McItem On Time', body: <><p>All items must be returned by the end of the approved checkout window.</p><p>Repeated misuse may result in loss of checkout privileges.</p></> },
                { title: 'Important Policies', body: <ul><li>Items may be checked out for up to <strong>1 day (maximum 7 hours)</strong> unless otherwise approved</li><li>One form submission is required per item</li><li>Items are available on a first-come, first-served basis</li><li>Students may be held financially responsible for lost or damaged items</li></ul> },
            ].map(({ title, body }) => (
                <div className='center-div' key={title}>
                    <Box width={[0.9, 0.7]} className='room-category'>
                        <h2 className='category-subheader'>{title}</h2>
                        {body}
                    </Box>
                </div>
            ))}
            <h2 className='section-title'>Questions?</h2>
            <div className='center-div'>
                <Box width={[0.8, 0.6]} className='reservation-email-link'>
                    <p style={{ textAlign: 'center' }}>If you have questions, please reach out to McMurtry leadership before submitting the form.</p>
                    <a href='mailto:mcmsecretary@gmail.com' style={{ textDecoration: 'none' }} rel='noopener noreferrer'>
                        <h2 className='reservation-link' style={{ textAlign: 'center' }}>mcmsecretary@gmail.com</h2>
                    </a>
                </Box>
            </div>
        </div>
        <SiteFooter />
    </div>
);

export default McItemsCheckoutPage;
