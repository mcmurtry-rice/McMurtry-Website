import React from 'react';
import './Footer.css';
const SiteFooter = () => (
    <footer className="mc-footer" role="contentinfo">
        <img
            src="/static/logos/yurt-band.png"
            alt=""
            className="mc-footer-silhouette"
            aria-hidden="true"
        />
        <div className="mc-footer-wordmark">
            <span>McMurtry</span>
            <span>College</span>
        </div>
        <address className="mc-footer-contact">
            <p>McMurtry College Â· MS 761 Â· Rice University</p>
            <p>1605 Rice Blvd Â· Houston, TX 77005</p>
            <p className="mc-footer-row">
                <span aria-hidden="true" className="mc-footer-icon">â˜Ž</span>
                <a href="tel:+17133484583">(713) 348-4583</a>
            </p>
            <p className="mc-footer-row">
                <span aria-hidden="true" className="mc-footer-icon">âœ‰</span>
                <a href="mailto:mcmurtry@rice.edu">mcmurtry@rice.edu</a>
            </p>
        </address>
    </footer>
);

export default SiteFooter;
