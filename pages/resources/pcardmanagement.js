import React from 'react';
import { Box } from 'rebass';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import CustomCalendar from '../../components/CustomCalendar/CustomCalendar';
import './pcardmanagement.css';

const PCardManagementPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <SiteNavbar />
        <div className='pcard-management-page'>
            <div className='oweek-hero'>
                <h1 className='oweek-main-title'>P-Card Requests &amp; Purchases</h1>
            </div>
            <div className='center-div'>
                <Box width={[0.9, 0.7]} className='room-category'>
                    <p>McMurtry College uses P-Cards to make approved, tax-exempt purchases for college events, committees, and operations. All P-Card activity is managed through the Spring 2026 McExpenses Form.</p>
                    <p><strong>Please read the instructions carefully before submitting.</strong></p>
                    <div className='banner-container'>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLScAaMPGQ4CU2LQauBLf7mYsqlTP7tu6zuYGPNX1lAABECF1bA/viewform?usp=header' target='_blank' rel='noopener noreferrer'>
                            <Box className='accessibility-fund-banner'><p>Spring 2026 McExpenses Form</p></Box>
                        </a>
                    </div>
                </Box>
            </div>
            <div className='center-div'>
                <Box width={[0.9, 0.7]} className='room-category'>
                    <h2 className='category-subheader'>Important Deadlines</h2>
                    <ul>
                        <li><strong>Purchases $499 or under:</strong> Submit the form at least 24 hours in advance</li>
                        <li><strong>Purchases $500 or over:</strong> Submit the form at least 3 days in advance</li>
                    </ul>
                    <p><strong>Late submissions may not be approved.</strong></p>
                </Box>
            </div>
            <h2 className='section-title'>P-Card Availability Calendar</h2>
            <Box width={[1, 1, 0.9, 0.85]} ml='auto' mr='auto' mb={[10, 20]} mt={[0, 0]} className='event-calendar-container'>
                <CustomCalendar calendarId='bdd18a12e18cb6dc90287fb25f54978e20a6c6b9881d8b9300a196ecf12f5e42@group.calendar.google.com' />
            </Box>
            <div className='center-div'>
                <Box width={[0.9, 0.7]} className='room-category'>
                    <h2 className='category-subheader'>Option 1: Check Out a P-Card</h2>
                    <ol>
                        <li>Fill out the Spring 2026 McExpenses Form and select "Check Out P-Card."</li>
                        <li>Await approval from the P-Card owner.</li>
                        <li>Once approved, you will receive a lockbox code via text.</li>
                        <li>Retrieve the P-Card from the lockbox and make your purchase.</li>
                        <li>Return the P-Card to the lockbox ASAP and submit your receipt.</li>
                    </ol>
                    <p className='pcard-alert'><strong>Absolutely no handing off a P-Card to anyone else.</strong></p>
                </Box>
            </div>
            <div className='center-div'>
                <Box width={[0.9, 0.7]} className='room-category'>
                    <h2 className='category-subheader'>Option 2: Return a P-Card</h2>
                    <ol>
                        <li>Return the P-Card to the lockbox immediately after use.</li>
                        <li>Fill out the Spring 2026 McExpenses Form and select "Return P-Card."</li>
                        <li>Upload itemized receipt(s) and event flyer.</li>
                    </ol>
                </Box>
            </div>
            <div className='center-div'>
                <Box width={[0.9, 0.7]} className='room-category'>
                    <h2 className='category-subheader'>Option 3: Make an Online Purchase</h2>
                    <ol>
                        <li>Fill out the Spring 2026 McExpenses Form and select "Make an Online Purchase."</li>
                        <li>Provide direct product links, total cost, and purpose.</li>
                        <li>Await approval and processing.</li>
                    </ol>
                </Box>
            </div>
            <h2 className='section-title'>Questions?</h2>
            <div className='center-div'>
                <Box width={[0.8, 0.6]} className='reservation-email-link'>
                    <a href='mailto:mcmurtrytreasurer@gmail.com' style={{ textDecoration: 'none' }} rel='noopener noreferrer'>
                        <h2 className='reservation-link' style={{ textAlign: 'center' }}>mcmurtrytreasurer@gmail.com</h2>
                    </a>
                </Box>
            </div>
        </div>
        <SiteFooter />
    </div>
);

export default PCardManagementPage;
