import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            className={'groweek-scroll-top' + (visible ? ' groweek-scroll-top-visible' : '')}
            onClick={scrollUp}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
};

export default ScrollToTop;
