import React from 'react';
import Header from '../components/Header/Header';
import SiteNavbar from '../components/navbar/Navbar';
import SiteFooter from '../components/Footer/Footer';
import './financialinclusivity.css';

const FinancialInclusivityPage = () => (
    <div className='page page-light page-with-staggered-menu'>
        <Header />
        <SiteNavbar />

        <div className='fin-inc-page'>
            <span className='fi-glow fi-glow-1' aria-hidden='true' />
            <span className='fi-glow fi-glow-2' aria-hidden='true' />

            <div className='fi-stage'>
                <span className='fi-spine' aria-hidden='true' />

                <section className='fi-node fi-node-a'>
                    <span className='fi-node-dot' aria-hidden='true' />
                    <span className='fi-node-step'>01</span>
                    <h2 className='fi-section-title'>Our Commitment</h2>
                    <p className='fi-section-body'>McMurtry College has committed to making financial accessibility an utmost priority and to be a leader in the socioeconomic inclusivity initiative at Rice.</p>
                    <p className='fi-section-body'>After holding discussions at several town halls, with the Magisters, and at cabinet meetings, McMurtry is implementing an initiative (starting in Spring 2017) to address socioeconomic inequality with regards to social life at our college. With the expectation that this proposal will be continuously improved based on tracking certain metrics, below is a summary of the current plan:</p>
                </section>

                <section className='fi-node fi-node-b'>
                    <span className='fi-node-dot' aria-hidden='true' />
                    <span className='fi-node-step'>02</span>
                    <h2 className='fi-section-title'>Our Mission</h2>
                    <p className='fi-section-body'>To create a residential college experience in which events and Murtchandise are accessible to all students regardless of socioeconomic status.</p>
                </section>

                <section className='fi-node fi-node-a'>
                    <span className='fi-node-dot' aria-hidden='true' />
                    <span className='fi-node-step'>03</span>
                    <h2 className='fi-section-title'>Guidelines</h2>
                    <ul className='fi-guideline-list'>
                        <li>Establish the Magister&apos;s Fund so students (when in need) can opt into extra funding. This fund is intended to cover ground we may miss with blanket subsidization, to offer extra support to students in difficult circumstances, and to avoid limiting students to social events that the college has deemed essential.</li>
                    </ul>
                </section>

                <section className='fi-node fi-node-b'>
                    <span className='fi-node-dot' aria-hidden='true' />
                    <span className='fi-node-step'>04</span>
                    <h2 className='fi-section-title'>Resources</h2>
                    <ul className='fi-resource-list'>
                        <li>
                            <a href='https://goo.gl/forms/KEyPplLhclljdSOm2' target='_blank' rel='noopener noreferrer'>
                                <strong>McMurtry Magisters&apos; Fund</strong>
                            </a>
                            <p>Apply for financial support to cover college event costs and merchandise</p>
                        </li>
                        <li>
                            <a href='https://aop.rice.edu/application' target='_blank' rel='noopener noreferrer'>
                                <strong>Rice Access and Opportunity Portal</strong>
                            </a>
                            <p>Apply for funding to cover academic expenses like textbooks and supplies</p>
                        </li>
                        <li>
                            <a href='https://linktr.ee/ricemutualaid' target='_blank' rel='noopener noreferrer'>
                                <strong>Rice Mutual Aid Resources</strong>
                            </a>
                            <p>Access community-based support and peer assistance networks</p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>

        <SiteFooter />
    </div>
);

export default FinancialInclusivityPage;
