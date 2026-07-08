import React from 'react';
import './Footer.css';
const SiteFooter = ({ oweekSignature }) => (
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
            {oweekSignature && (
                <img
                    src="/static/oweek/2026/signature.png"
                    alt="Let It GrO-Week 2026 - McMurtry College"
                    className="mc-footer-signature"
                />
            )}
        </div>
        <address className="mc-footer-contact">
            <p>McMurtry College &middot; MS 761 &middot; Rice University</p>
            <p>1605 Rice Blvd &middot; Houston, TX 77005</p>
            <p className="mc-footer-row">
                <span aria-hidden="true" className="mc-footer-icon">&#9742;</span>
                <a href="tel:+17133484583">(713) 348-4583</a>
            </p>
            <p className="mc-footer-row">
                <span aria-hidden="true" className="mc-footer-icon">&#9993;</span>
                <a href="mailto:mcmurtry@rice.edu">mcmurtry@rice.edu</a>
            </p>
        </address>
    </footer>
);

export default SiteFooter;
