import React from 'react';
import { useSupabaseTable } from '../../../lib/useSupabaseTable';
import './smr.css';
import '../../events/events/events.css';

const SMR = () => {
    const { rows: smr, isLoading } = useSupabaseTable('smr');

    const person = smr[0];

    return (
        <div className='smr-page'>
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

                <h1 className='ev-hero-heading'>Student Maintenance Rep</h1>
            </header>

            {isLoading || !person ? (
                <div className='loading-container'>
                    <div className='loading-spinner'></div>
                    <p className='loading-text'>Loading...</p>
                </div>
            ) : (
                <section className='smr-detail'>
                    <div className='smr-portrait'>
                        <img src={person.image} alt={person.name} className='smr-portrait-image' />
                    </div>
                    <div className='smr-info'>
                        <span className='smr-role'>Student Maintenance Rep</span>
                        <h2 className='smr-name'>{person.name}</h2>
                        {person.email ? (
                            <a href={`mailto:${person.email}`} className='smr-email'>
                                {person.email}
                            </a>
                        ) : null}
                        <p className='smr-bio'>{person.body}</p>
                    </div>
                </section>
            )}
        </div>
    );
};

export default SMR;
