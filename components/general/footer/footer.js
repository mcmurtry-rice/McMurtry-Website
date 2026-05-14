import React from 'react';

import './footer.css';

const Footer = () => (
    <footer className='footer-container'>
        <div className='footer-inner'>
            <div className='footer-brand'>
                <h2 className='footer-wordmark'>
                    <span>McMurtry</span>
                    <span>College</span>
                </h2>
            </div>
            <div className='footer-contact'>
                <p className='footer-line'>McMurtry College · MS 761 · Rice University</p>
                <p className='footer-line'>1605 Rice Blvd · Houston, TX 77005</p>
                <p className='footer-line'>Phone: (713) 348-4583 · Fax: (713) 348-3135</p>
                <p className='footer-line'>
                    <a href='mailto:mcmurtry@rice.edu' className='footer-email'>mcmurtry@rice.edu</a>
                </p>
                <p className='footer-copyright'>© McMurtry College, 2026</p>
            </div>
        </div>
    </footer>
)

export default Footer;
