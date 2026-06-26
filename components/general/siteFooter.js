import React from 'react';

/*
 * Site-wide footer — purple block with massive italic "McMurtry / College"
 * wordmark + contact info, faded yurt silhouette behind.
 *
 * Classes live in components/splashpage/intropage.css (.mc-footer-*).
 * Already imported globally via pages/_app.js, so this component renders
 * correctly on any page that uses it.
 */
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
