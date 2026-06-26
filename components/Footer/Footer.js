import React from 'react';
import './Footer.css';
const SiteFooter = () => (
    <footer className="mc-footer" role="contentinfo">
        <img
            src="/static/figma-yurt-band.png"
            alt=""
            className="mc-footer-silhouette"
            aria-hidden="true"
        />
        <div className="mc-footer-wordmark">
            <span>McMurtry</span>
            <span>College</span>
        </div>
        <address className="mc-footer-contact">
            <p>McMurtry College · MS 761 · Rice University</p>
            <p>1605 Rice Blvd · Houston, TX 77005</p>
            <p className="mc-footer-row">
                <span aria-hidden="true" className="mc-footer-icon">☎</span>
                <a href="tel:+17133484583">(713) 348-4583</a>
            </p>
            <p className="mc-footer-row">
                <span aria-hidden="true" className="mc-footer-icon">✉</span>
                <a href="mailto:mcmurtry@rice.edu">mcmurtry@rice.edu</a>
            </p>
        </address>
    </footer>
);

export default SiteFooter;
