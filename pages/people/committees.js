import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SiteNavbar from '../../components/navbar/Navbar';
import SiteFooter from '../../components/Footer/Footer';
import Cards from '../../components/ContactCard/ContactCard';
import { useSupabaseTable, distinctInOrder } from '../../lib/useSupabaseTable';
import './committees.css';

const CommitteesPage = () => {
    const { rows: committees, isLoading: loadingCommittees } = useSupabaseTable('committees');
    const { rows: members,   isLoading: loadingMembers }    = useSupabaseTable('committee_members');

    const divisionNames = distinctInOrder(committees, 'division');
    const [activeDivision, setActiveDivision] = useState(null);
    const [activeCommittee, setActiveCommittee] = useState(null);

    const effectiveDivision = activeDivision && divisionNames.includes(activeDivision)
        ? activeDivision
        : (divisionNames[0] || null);

    const committeesInDivision = committees.filter(c => c.division === effectiveDivision);
    const effectiveCommittee = activeCommittee && committeesInDivision.some(c => c.name === activeCommittee)
        ? activeCommittee
        : (committeesInDivision[0]?.name || null);

    const current = committeesInDivision.find(c => c.name === effectiveCommittee) || null;

    const heads   = members.filter(m => m.committee_name === effectiveCommittee && m.role === 'head');
    const regular = members.filter(m => m.committee_name === effectiveCommittee && m.role === 'member');

    const isLoading = loadingCommittees || loadingMembers;

    return (
        <div className='page page-light page-with-staggered-menu'>
            <Header />
            <SiteNavbar />

            <div className='committee-page'>
                <header className='ev-hero'>
                    <img src='/static/figma-about-swoosh.svg' alt='' className='ev-hero-swoosh' aria-hidden='true' />
                    <img src='/static/figma-ellipse-large.svg' alt='' className='ev-hero-ellipse-large' aria-hidden='true' />
                    <img src='/static/figma-ellipse-small.svg' alt='' className='ev-hero-ellipse-small' aria-hidden='true' />
                    <h1 className='ev-hero-heading'>Committees</h1>
                </header>

                <nav className='cm-tabs cm-tabs-division' aria-label='Divisions'>
                    {divisionNames.map(name => (
                        <button
                            key={name}
                            type='button'
                            className={`cm-tab ${effectiveDivision === name ? 'cm-tab-active' : ''}`}
                            onClick={() => {
                                setActiveDivision(name);
                                setActiveCommittee(null);
                            }}
                        >
                            {name}
                        </button>
                    ))}
                </nav>

                <nav className='cm-tabs cm-tabs-committee' aria-label='Committees'>
                    {committeesInDivision.map(c => (
                        <button
                            key={c.id}
                            type='button'
                            className={`cm-chip ${effectiveCommittee === c.name ? 'cm-chip-active' : ''}`}
                            onClick={() => setActiveCommittee(c.name)}
                        >
                            {c.name}
                        </button>
                    ))}
                </nav>

                {isLoading ? (
                    <div className='loading-container'>
                        <div className='loading-spinner'></div>
                        <p className='loading-text'>Loading...</p>
                    </div>
                ) : current ? (
                    <section className='cm-detail fade-in' key={current.id}>
                        <h2 className='division-title'>{current.name}</h2>

                        {current.image ? (
                            <div className='cm-image-wrap'>
                                <img src={current.image} alt={current.name} className='cm-image' />
                            </div>
                        ) : null}

                        {current.description ? (
                            <div
                                className='cm-description'
                                dangerouslySetInnerHTML={{ __html: current.description }}
                            />
                        ) : null}

                        {heads.length > 0 && (
                            <React.Fragment>
                                <h3 className='cm-subtitle'>Committee Heads</h3>
                                <Cards content={heads.map(({ name, email }) => ({ name, email }))} />
                            </React.Fragment>
                        )}

                        {regular.length > 0 && (
                            <React.Fragment>
                                <h3 className='cm-subtitle'>Committee Members</h3>
                                <Cards content={regular.map(({ name, email }) => ({ name, email }))} />
                            </React.Fragment>
                        )}
                    </section>
                ) : null}
            </div>

            <SiteFooter />
        </div>
    );
};

export default CommitteesPage;
