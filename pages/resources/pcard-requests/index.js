import React from 'react';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import CustomCalendar from '../../../components/CustomCalendar/CustomCalendar';
import './index.css';

const ACTIONS = [
    {
        num: '01',
        title: 'Check Out a P-Card',
        steps: [
            'Fill out the McExpenses Form and select "Check Out P-Card."',
            'Await approval from the P-Card owner.',
            'Receive a lockbox code via text once approved.',
            'Retrieve the P-Card from the lockbox and make your purchase.',
            'Return the P-Card to the lockbox ASAP and submit your receipt.',
        ],
        warning: 'Absolutely no handing off a P-Card to anyone else.',
    },
    {
        num: '02',
        title: 'Return a P-Card',
        steps: [
            'Return the P-Card to the lockbox immediately after use.',
            'Fill out the McExpenses Form and select "Return P-Card."',
            'Upload itemized receipt(s) and event flyer.',
        ],
    },
    {
        num: '03',
        title: 'Online Purchase',
        steps: [
            'Fill out the McExpenses Form and select "Make an Online Purchase."',
            'Provide direct product links, total cost, and purpose.',
            'Await approval and processing.',
        ],
    },
];

const PCardManagementPage = () => (
    <div className='page page-light'>
        <Header />
        <SiteNavbar />
        <div className='pcard-page'>

            <header className='ev-hero'>
                <img src='/static/icons/about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                <img src='/static/icons/ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                <img src='/static/icons/ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                <h1 className='ev-hero-heading'>P-Card Requests</h1>
                <p className='ev-hero-lede'>McMurtry College uses P-Cards to make approved, tax-exempt purchases for college events, committees, and operations.</p>
            </header>

            {/* Top CTA banner */}
            <div className='pc-banner'>
                <div className='pc-banner-left'>
                    <p className='pc-banner-text'>All P-Card activity is managed through the <strong>McExpenses Form</strong></p>
                    <div className='pc-banner-deadlines'>
                        <span className='pc-strip-label'>Submission Deadlines</span>
                        <ul className='pc-banner-deadline-list'>
                            <li><strong>Under $500</strong> at least 24 hours in advance</li>
                            <li><strong>$500 or over</strong> at least 3 days in advance</li>
                        </ul>
                        <span className='pc-strip-note'>Late submissions may not be approved.</span>
                    </div>
                </div>
                <a
                    className='pc-banner-cta'
                    href='https://docs.google.com/forms/d/e/1FAIpQLScAaMPGQ4CU2LQauBLf7mYsqlTP7tu6zuYGPNX1lAABECF1bA/viewform?usp=header'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Open McExpenses Form <span aria-hidden='true' className='pc-banner-arrow'>&rarr;</span>
                </a>
            </div>

            {/* Action cards */}
            <div className='pc-cards-wrap'>
                <div className='pc-cards'>
                    {ACTIONS.map(({ num, title, steps, warning }) => (
                        <div className='pc-card' key={num}>
                            <div className='pc-card-header'>
                                <span className='pc-card-num'>{num}</span>
                                <h2 className='pc-card-title'>{title}</h2>
                            </div>
                            <ol className='pc-card-steps'>
                                {steps.map((s, i) => <li key={i}>{s}</li>)}
                            </ol>
                            {warning && (
                                <div className='pc-card-warn'>
                                    <span className='pc-warn-label'>Important</span>
                                    <p>{warning}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Calendar — full width */}
            <div className='pc-calendar-section'>
                <h2 className='pc-calendar-heading'>P-Card Availability</h2>
                <div className='pc-calendar-box'>
                    <CustomCalendar calendarId='bdd18a12e18cb6dc90287fb25f54978e20a6c6b9881d8b9300a196ecf12f5e42@group.calendar.google.com' />
                </div>
            </div>

            <div className='pc-contact-row'>
                <p>Questions? Email <a href='mailto:mcmurtrytreasurer@gmail.com'>mcmurtrytreasurer@gmail.com</a>.</p>
            </div>

        </div>
        <SiteFooter />
    </div>
);

export default PCardManagementPage;
