import React, { useState, useEffect } from 'react';

const STORAGE_KEY = 'groweek2026_unlocked';
const PASSWORD = 'letitgro123';

// Client-side only: this is a soft gate to keep the page out of search engines
// and casual link-sharing before O-Week, NOT real security. The site is a static
// GitHub Pages export with no server, so the real content never reaches the
// exported HTML until this component unlocks it - but the password itself is
// still readable in the shipped JS bundle by anyone who opens devtools.
const OWeekGate = ({ children }) => {
    const [unlocked, setUnlocked] = useState(false);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (window.localStorage.getItem(STORAGE_KEY) === 'true') {
            setUnlocked(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === PASSWORD) {
            window.localStorage.setItem(STORAGE_KEY, 'true');
            setUnlocked(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    if (unlocked) return children;

    return (
        <div className="groweek groweek-gate-page">
            <div className="groweek-gate-card">
                <h2 className="groweek-section-title">Let It GrO-Week 2026</h2>
                <p>This page is password protected. Enter the O-Week password to continue.</p>
                <form onSubmit={handleSubmit} className="groweek-gate-form">
                    <input
                        type="password"
                        className="groweek-gate-input"
                        placeholder="Password"
                        value={input}
                        onChange={(e) => { setInput(e.target.value); setError(false); }}
                        autoFocus
                    />
                    <button type="submit" className="groweek-gate-button">Unlock</button>
                </form>
                {error && <p className="groweek-gate-error">That's not quite it - try again.</p>}
            </div>
        </div>
    );
};

export default OWeekGate;
