import React from 'react';
import { Box } from 'rebass';
import './mcitemscheckout.css';

const McItemsCheckout = () => (
    <div className='mcitems-checkout-page'>
        <div className='oweek-hero'>
            <h1 className='oweek-main-title'>McMurtry McItems Check Out</h1>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <div>
                    <p>McMurtry College offers a variety of shared items that students may request to use for personal, academic, creative, or event-related purposes. To ensure fairness, accountability, and accessibility for everyone, all item checkouts must be submitted through the form below.</p>
                    <p><strong>Please read all instructions carefully before submitting a request.</strong></p>

                    <div className='banner-container'>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhZVcSHTxbKFDuWh9PN3sJAZ3jL-XDBTVaXpVUCgeh0ZYM-g/viewform" target="_blank" rel="noopener noreferrer">
                            <Box className="accessibility-fund-banner">
                                <p>McMurtry Items Check Out Form</p>
                            </Box>
                        </a>
                    </div>
                </div>
            </Box>
        </div>

        <h2 className='section-title'>How the McItems Check Out Process Works</h2>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Step 1: Submit the Form</h2>
                <div>
                    <p>Fill out the McMurtry Items Check Out Form with:</p>
                    <ul>
                        <li>Your name and NetID</li>
                        <li>The item you would like to check out</li>
                        <li>The date and time window you are requesting</li>
                        <li>A brief description of how you plan to use the item</li>
                    </ul>
                    <p>Please submit requests at least <strong>24 hours</strong> in advance.</p>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Step 2: Await Approval</h2>
                <div>
                    <p>Submission of the form does not guarantee approval. You will be contacted if your request is approved or if additional information is needed.</p>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Step 3: Pick Up the Item</h2>
                <div>
                    <p>Once approved, you will receive instructions on where and how to pick up the item. Items may only be picked up during the approved checkout window.</p>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Step 4: Use the Item Responsibly</h2>
                <div>
                    <p>While an item is checked out under your name, you are responsible for its care and proper use. Items may not be handed off to other individuals.</p>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Step 5: Return the McItem On Time</h2>
                <div>
                    <p>All items must be returned by the end of the approved checkout window and in the condition they were received.</p>
                    <p>Failure to return items on time or repeated misuse may result in loss of checkout privileges.</p>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Important Policies</h2>
                <div>
                    <ul>
                        <li>Items may be checked out for up to <strong>1 day (maximum 7 hours)</strong> unless otherwise approved</li>
                        <li>One form submission is required per item</li>
                        <li>Items are available on a first-come, first-served basis</li>
                        <li>Students may be held financially responsible for lost or damaged items</li>
                    </ul>
                </div>
            </Box>
        </div>

        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Why This System Exists</h2>
                <div>
                    <p>This process helps ensure that McMurtry's shared resources remain:</p>
                    <ul>
                        <li>Accessible to all students</li>
                        <li>Easy to locate and track</li>
                        <li>Well cared for and available long-term</li>
                    </ul>
                    <p>By following this system, you're helping create a more transparent and supportive community where students can confidently use shared resources to make great things happen.</p>
                </div>
            </Box>
        </div>

        <h2 className='section-title'>Questions?</h2>

        <div className='center-div'>
            <Box width={[0.8, 0.6]} className='reservation-email-link'>
                <p style={{ textAlign: 'center' }}>If you have questions, special circumstances, or are unsure whether an item fits your needs, please reach out to McMurtry leadership before submitting the form.</p>
                <a href='mailto:mcmsecretary@gmail.com' style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <h2 className='reservation-link' style={{ textAlign: 'center' }}>mcmsecretary@gmail.com</h2>
                </a>
            </Box>
        </div>
    </div>
);

export default McItemsCheckout;
