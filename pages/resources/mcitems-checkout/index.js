import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { useSiteLink } from '../../../tools/database/useSiteLinks';
import './index.css';

// Fallback: rendered on first paint and whenever Supabase is unreachable.
// Live value is the 'mcitems_checkout_form' row in site_links.
const CHECKOUT_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdhZVcSHTxbKFDuWh9PN3sJAZ3jL-XDBTVaXpVUCgeh0ZYM-g/viewform';

const STEPS = [
    {
        num: '01',
        title: 'Submit the Form',
        body: 'Fill out the McMurtry Items Check Out Form with your name, NetID, item, date/time, and purpose. Submit at least 24 hours in advance.',
    },
    {
        num: '02',
        title: 'Await Approval',
        body: 'Submission does not guarantee approval. You will be contacted if approved or if more information is needed.',
    },
    {
        num: '03',
        title: 'Pick Up the Item',
        body: 'Once approved, you will receive pickup instructions. Items may only be picked up during the approved window.',
    },
    {
        num: '04',
        title: 'Use Responsibly',
        body: 'You are responsible for the item\'s care. Items may not be handed off to other individuals.',
    },
    {
        num: '05',
        title: 'Return On Time',
        body: 'All items must be returned by the end of the approved checkout window. Repeated misuse may result in loss of checkout privileges.',
    },
];

const POLICIES = [
    'Items may be checked out for up to 1 day (maximum 7 hours) unless otherwise approved',
    'One form submission is required per item',
    'Items are available on a first-come, first-served basis',
    'Students may be held financially responsible for lost or damaged items',
];

const McItemsCheckoutPage = () => {
    const checkoutFormUrl = useSiteLink('mcitems_checkout_form', CHECKOUT_FORM_URL);

    return (
        <div className='page page-light'>
            <Header />
            <SiteNavbar />
            <div className='mcitems-page'>

                <header className='ev-hero'>
                    <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>McItems Checkout</h1>
                    <p className='ev-hero-lede'>McMurtry College offers shared items for personal, academic, creative, or event-related use.</p>
                </header>

                {/* CTA banner */}
                <div className='mci-banner'>
                    <div className='mci-banner-left'>
                        <p className='mci-banner-text'>Request shared items through the <strong>McMurtry Items Check Out Form</strong></p>
                        <div className='mci-banner-deadlines'>
                            <span className='mci-strip-label'>Heads Up</span>
                            <ul className='mci-banner-deadline-list'>
                                <li>Submit at least <strong>24 hours</strong> in advance</li>
                                <li>Approval is <strong>not guaranteed</strong>, you will be contacted</li>
                            </ul>
                        </div>
                    </div>
                    <a
                        className='mci-banner-cta'
                        href={checkoutFormUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Open Checkout Form <span aria-hidden='true' className='mci-banner-arrow'>&rarr;</span>
                    </a>
                </div>

                {/* Horizontal timeline */}
                <div className='mci-timeline-wrap'>
                    <h2 className='mci-timeline-heading'>How It Works</h2>
                    <div className='mci-timeline'>
                        {/* Connecting line */}
                        <div className='mci-timeline-track' aria-hidden='true' />
                        {STEPS.map(({ num, title, body }, i) => (
                            <div className='mci-step' key={num}>
                                <div className='mci-step-node'>
                                    <span className='mci-step-num'>{num}</span>
                                </div>
                                <div className={`mci-step-card ${i % 2 === 0 ? 'mci-step-card-below' : 'mci-step-card-above'}`}>
                                    <h3 className='mci-step-title'>{title}</h3>
                                    <p className='mci-step-body'>{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Policies */}
                <div className='mci-policies-wrap'>
                    <div className='mci-policies'>
                        <h2 className='mci-policies-title'>Important Policies</h2>
                        <ul className='mci-policy-list'>
                            {POLICIES.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                    </div>
                </div>

                {/* Contact */}
                <div className='mci-contact-row'>
                    <p>Questions? Reach out to McMurtry leadership before submitting.</p>
                    <a href='mailto:mcmsecretary@gmail.com' className='mci-contact-email'>mcmsecretary@gmail.com</a>
                </div>

            </div>
            <SiteFooter />
        </div>
    );
};

export default McItemsCheckoutPage;
