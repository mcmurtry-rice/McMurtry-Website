import React from 'react';
import { Box } from 'rebass';
import Header from '../../../components/Header/Header';
import SiteNavbar from '../../../components/navbar/Navbar';
import SiteFooter from '../../../components/Footer/Footer';
import { oweekCoordinators, oweekLeadership, oweekConfig } from '../../../lib/oweek';
import './oweek.css';

const OweekContactPage = () => {
    const { mailingAddress, president, coordinator, magisters } = oweekLeadership;
    return (
        <div className='page page-with-staggered-menu'>
            <Header />
            <SiteNavbar />
            <div className='oweek-page'>
                <div className='oweek-hero'>
                    <h1 className='oweek-main-title'>Contact Information</h1>
                </div>
                <Box className='about-text' width={[0.9, 0.85, 0.8, 0.75]} ml='auto' mr='auto' mb={[3, 3]} mt={[0, 0]}>
                    <h2 className='section-title'>Your McMurtry Mailing Address</h2>
                    <div className='contact-card'>
                        <div className='contact-address-box'>
                            {mailingAddress.lines.map((line, i) => (
                                <p key={i} className='contact-address-line'>
                                    {i === 0 ? <strong>{line}</strong> : line}
                                </p>
                            ))}
                        </div>
                        <div className='contact-note'>
                            <p><strong>Important:</strong> {mailingAddress.note}</p>
                        </div>
                    </div>
                </Box>
                <Box className='about-text' width={[0.9, 0.85, 0.8, 0.75]} ml='auto' mr='auto' mb={[3, 3]}>
                    <h2 className='section-title'>O-Week Coordinators</h2>
                    <div className='contact-card' style={{ marginBottom: '1.5rem' }}>
                        <p className='contact-label'>General Email</p>
                        <a href={`mailto:${oweekConfig.generalEmail}`} className='contact-email-link'>{oweekConfig.generalEmail}</a>
                    </div>
                    <div className='contact-grid'>
                        {oweekCoordinators.map((coord, i) => (
                            <div key={i} className='contact-person-card'>
                                <h3 className='contact-person-name'>{coord.name}</h3>
                                <div className='contact-person-details'>
                                    <div className='contact-detail-item'>
                                        <span className='contact-icon'>📧</span>
                                        <a href={`mailto:${coord.email}`} className='contact-link'>{coord.email}</a>
                                    </div>
                                    <div className='contact-detail-item'>
                                        <span className='contact-icon'>📱</span>
                                        <a href={`tel:${coord.phone.replace(/[^0-9]/g, '')}`} className='contact-link'>{coord.phone}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Box>
                <Box className='about-text' width={[0.9, 0.85, 0.8, 0.75]} ml='auto' mr='auto' mb={[4, 5]}>
                    <h2 className='section-title'>College Leadership</h2>
                    <div className='contact-person-card' style={{ marginBottom: '1.5rem' }}>
                        <div className='contact-role-badge'>{president.role}</div>
                        <h3 className='contact-person-name'>{president.name}</h3>
                        <div className='contact-person-details'>
                            <div className='contact-detail-item'>
                                <span className='contact-icon'>📧</span>
                                <a href={`mailto:${president.email}`} className='contact-link'>{president.email}</a>
                            </div>
                        </div>
                    </div>
                    <div className='contact-person-card' style={{ marginBottom: '1.5rem' }}>
                        <div className='contact-role-badge'>{coordinator.role}</div>
                        <h3 className='contact-person-name'>{coordinator.name}</h3>
                        <div className='contact-person-details'>
                            <div className='contact-detail-item'><span className='contact-icon'>📧</span><a href={`mailto:${coordinator.email}`} className='contact-link'>{coordinator.email}</a></div>
                            <div className='contact-detail-item'><span className='contact-icon'>📞</span><span className='contact-link'>Office: {coordinator.office}</span></div>
                            <div className='contact-detail-item'><span className='contact-icon'>📠</span><span className='contact-link'>Fax: {coordinator.fax}</span></div>
                        </div>
                    </div>
                    <div className='contact-person-card'>
                        <div className='contact-role-badge'>{magisters.role}</div>
                        <h3 className='contact-person-name'>{magisters.name}</h3>
                        <div className='contact-person-details'>
                            <div className='contact-detail-item'>
                                <span className='contact-icon'>✉️</span>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {magisters.emails.map((em, i) => (
                                        <React.Fragment key={em}>
                                            <a href={`mailto:${em}`} className='contact-link'>{em}</a>
                                            {i < magisters.emails.length - 1 && <span className='contact-link'>|</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            <div className='contact-detail-item'><span className='contact-icon'>📞</span><span className='contact-link'>{magisters.phone}</span></div>
                        </div>
                    </div>
                </Box>
            </div>
            <SiteFooter />
        </div>
    );
};

export default OweekContactPage;
