import React from 'react';
import { Box } from 'rebass';
import './pcardmanagement.css';
import CustomCalendar from '../../events/CustomCalendar';

const PCardManagement = () => (
    <div className='pcard-management-page'>
        <div className='oweek-hero'>
            <h1 className='oweek-main-title'>P-Card Requests & Purchases</h1>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <div>
                    <p>McMurtry College uses P-Cards to make approved, tax-exempt purchases for college events, committees, and operations. All P-Card activity is managed through the Spring 2026 McExpenses Form.</p>
                    <p><strong>Please read the instructions carefully before submitting.</strong></p>

                    <div className='banner-container'>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScAaMPGQ4CU2LQauBLf7mYsqlTP7tu6zuYGPNX1lAABECF1bA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                            <Box className="accessibility-fund-banner">
                                <p>Spring 2026 McExpenses Form</p>
                            </Box>
                        </a>
                    </div>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Important Deadlines</h2>
                <div>
                    <ul>
                        <li><strong>Purchases $499 or under:</strong> Submit the form at least 24 hours in advance</li>
                        <li><strong>Purchases $500 or over:</strong> Submit the form at least 3 days in advance</li>
                    </ul>
                    <p><strong>Late submissions may not be approved.</strong></p>
                </div>
            </Box>
        </div>

        <h2 className='section-title'>P-Card Availability Calendar</h2>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <div>
                    <p>Check the live calendar below to see:</p>
                    <ul>
                        <li>Which P-Cards are currently checked out</li>
                        <li>When cards are expected to be returned</li>
                        <li>Who is using each card and for what event</li>
                    </ul>
                    <p><strong>Please verify availability before submitting your request.</strong></p>
                </div>
            </Box>
        </div>

        <Box width={[1, 1, 0.9, 0.85]} ml='auto' mr='auto' mb={[10, 20]} mt={[0, 0]} className='event-calendar-container'>
            <CustomCalendar calendarId="bdd18a12e18cb6dc90287fb25f54978e20a6c6b9881d8b9300a196ecf12f5e42@group.calendar.google.com" />
        </Box>

        <div className='center-div'>
            <Box className='room-category'>
                <p>Having trouble seeing the calendar? Uncheck "Prevent cross-site tracking" in your browser settings.</p>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Option 1: Check Out a P-Card</h2>
                <div>
                    <p>Use this option if you need to physically check out a McMurtry P-Card to make an in-person purchase.</p>

                    <p><strong>How it works:</strong></p>
                    <ol>
                        <li>Fill out the Spring 2026 McExpenses Form and select "Check Out P-Card."</li>
                        <li>Await approval from the P-Card owner.</li>
                        <li>Once approved, you will receive a lockbox code via text.</li>
                        <li>Retrieve the P-Card from the lockbox.</li>
                        <li>Make your purchase, ensuring it is tax-exempt.</li>
                        <li>After completing your purchase, return the P-Card to the lockbox ASAP.</li>
                        <li>Fill out the form again to submit your itemized receipt and confirm return.</li>
                    </ol>

                    <p className='pcard-alert'><strong>Absolutely no handing off a P-Card to anyone else.</strong></p>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Option 2: Return a P-Card</h2>
                <div>
                    <p>Use this option after you have completed your purchase and are returning the card.</p>

                    <p><strong>Steps:</strong></p>
                    <ol>
                        <li>Return the P-Card to the lockbox immediately after use.</li>
                        <li>Fill out the Spring 2026 McExpenses Form and select "Return P-Card."</li>
                        <li>Upload:
                            <ul>
                                <li>Itemized receipt(s)</li>
                                <li>Event flyer or screenshot of the announcement (email / GroupMe)</li>
                            </ul>
                        </li>
                    </ol>

                    <p>Your submission confirms the card has been returned and the purchase recorded.</p>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Option 3: Make an Online Purchase (No Physical Checkout)</h2>
                <div>
                    <p>Use this option if you do not need to physically pick up a P-Card and are requesting an online purchase to be made on your behalf.</p>

                    <p><strong>Steps:</strong></p>
                    <ol>
                        <li>Fill out the Spring 2026 McExpenses Form and select "Make an Online Purchase."</li>
                        <li>Provide:
                            <ul>
                                <li>Direct product link(s)</li>
                                <li>Total cost</li>
                                <li>Event or purpose description</li>
                            </ul>
                        </li>
                        <li>Await approval and processing.</li>
                        <li>Once the purchase is completed, submit receipts through the form if prompted.</li>
                    </ol>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Tax-Exempt Purchasing</h2>
                <div>
                    <p>All P-Card purchases must be tax-exempt.</p>
                    <p>If a vendor cannot process tax-exempt purchases, you may not use a P-Card.</p>

                    <div className='banner-container'>
                        <a href="https://docs.google.com/document/d/1DTBWkO9k0MB0wAhD42sM4_pUgH6ok2MGPZdtFhy3Qg8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                            <Box className="accessibility-fund-banner">
                                <p>List of Common Tax-Exempt Vendors & Instructions</p>
                            </Box>
                        </a>
                    </div>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Failure to Follow Procedures</h2>
                <div>
                    <p>Failure to submit the expense form or properly return the P-Card may result in:</p>
                    <ul>
                        <li><strong>1st offense:</strong> Warning</li>
                        <li><strong>2nd offense:</strong> A percentage of your committee's budget may be cut</li>
                        <li><strong>3rd offense:</strong> Personal housing points may be deducted</li>
                    </ul>
                </div>
            </Box>
        </div>

        <h2 className='section-title'>Questions?</h2>

        <div className='center-div'>
            <Box width={[0.8, 0.6]} className='reservation-email-link'>
                <p style={{ textAlign: 'center' }}>If you have questions, concerns, or unusual purchasing needs, please reach out to McMurtry treasurers and/or McMurtry leadership before submitting the form.</p>
                <a href='mailto:mcmurtrytreasurer@gmail.com' style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <h2 className='reservation-link' style={{ textAlign: 'center' }}>mcmurtrytreasurer@gmail.com</h2>
                </a>
            </Box>
        </div>
    </div>
);

export default PCardManagement;
