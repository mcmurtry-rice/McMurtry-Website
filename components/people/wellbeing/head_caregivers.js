import React from "react";
import { Box } from "rebass";
import ContactCards from "../../general/contactcards";
import "./wellbeing.css";
import '../../events/events/events.css';
import { useSupabaseTable } from '../../../lib/useSupabaseTable';

const HEAD_CAREGIVERS_DESCRIPTION =
    'Caregiving is for us to express our culture of care, allowing for our peers ' +
    'to be able to drink and have fun in a safe environment. We are dedicated to ' +
    'giving care to those who might need it by giving them water, giving them food, ' +
    'providing a safe space to recuperate, and calling REMS if the situation ' +
    'requires it.';

const HeadCaregivers = () => {
    const { rows, isLoading } = useSupabaseTable('head_caregivers');
    const members = rows.map(({ name, email }) => ({ name, email }));

    return (
        <div className="wellbeing-page">
            <header className='ev-hero'>
                <img
                    src='/static/figma-about-swoosh.svg'
                    alt=''
                    className='ev-hero-swoosh'
                    aria-hidden='true'
                />
                <img
                    src='/static/figma-ellipse-large.svg'
                    alt=''
                    className='ev-hero-ellipse-large'
                    aria-hidden='true'
                />
                <img
                    src='/static/figma-ellipse-small.svg'
                    alt=''
                    className='ev-hero-ellipse-small'
                    aria-hidden='true'
                />

                <h1 className='ev-hero-heading'>Caregiving</h1>
            </header>

            <Box
                width={[1, 0.7, 0.6, 0.5]}
                ml="auto"
                mr="auto"
                className="wellbeing-description"
            >
                {HEAD_CAREGIVERS_DESCRIPTION}
            </Box>

            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Loading...</p>
                </div>
            ) : (
                <section className='wellbeing-section'>
                    <h2 className='division-title'>Head Caregivers</h2>
                    <ContactCards content={members} />
                </section>
            )}
        </div>
    );
};

export default HeadCaregivers;
