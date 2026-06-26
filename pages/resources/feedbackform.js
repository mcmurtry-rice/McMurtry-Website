import React from 'react';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import './feedbackform.css';

const FeedbackFormPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='feedback-form-page'>
            <div className='feedback-hero'>
                <h1 className='feedback-main-title'>Feedback Form</h1>
                <p className='feedback-subtitle'>We value your input! Let us know your thoughts.</p>
            </div>
            <div className='feedback-form-container'>
                <iframe
                    src='https://docs.google.com/forms/d/e/1FAIpQLScYnwkipbWdNXLR6EDBotfMoBWvSd4nNCYmMthnpS88E9OszA/viewform?embedded=true'
                    width='100%'
                    height='1200'
                    frameBorder='0'
                    marginHeight='0'
                    marginWidth='0'
                    title='Feedback Form'
                >
                    Loading…
                </iframe>
            </div>
        </div>
        <SiteFooter />
    </div>
);

export default FeedbackFormPage;
