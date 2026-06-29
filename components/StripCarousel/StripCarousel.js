import React, { useEffect, useRef, useCallback } from 'react';
import './StripCarousel.css';

const StripCarousel = ({ images, fadeWidth = '15%', fadeColor = '255,255,255' }) => {
    const stripRef = useRef(null);
    const speedRef = useRef({ current: 1, target: 1 });
    const dragRef = useRef({
        active: false, startX: 0, startScroll: 0,
        moved: false, lastX: 0, lastT: 0, velocity: 0
    });
    const inertiaVelRef = useRef(0);

    const handleScroll = useCallback(() => {
        const el = stripRef.current;
        if (!el) return;
        const half = el.scrollWidth / 2;
        if (!half) return;
        const quarter = half / 2;
        if (el.scrollLeft >= half + quarter) {
            el.scrollLeft = el.scrollLeft - half;
        } else if (el.scrollLeft <= quarter) {
            el.scrollLeft = el.scrollLeft + half;
        }
    }, []);

    useEffect(() => {
        const el = stripRef.current;
        if (!el) return;
        const id = requestAnimationFrame(() => {
            const half = el.scrollWidth / 2;
            if (half > 0) el.scrollLeft = half;
        });
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const AUTO_SPEED = window.matchMedia('(max-width: 768px)').matches ? 0.5 : 1.2;
        const FRICTION = 0.94;
        const VEL_FLOOR = 0.05;
        let raf;
        let scrollAcc = null;
        const tick = () => {
            const el = stripRef.current;
            if (el && !dragRef.current.active) {
                const s = speedRef.current;
                s.current = s.target;
                if (scrollAcc === null) scrollAcc = el.scrollLeft;
                if (Math.abs(scrollAcc - el.scrollLeft) > 1) scrollAcc = el.scrollLeft;
                if (Math.abs(inertiaVelRef.current) > VEL_FLOOR) {
                    scrollAcc += inertiaVelRef.current;
                    inertiaVelRef.current *= FRICTION;
                } else {
                    inertiaVelRef.current = 0;
                    scrollAcc += AUTO_SPEED * s.current;
                }
                el.scrollLeft = scrollAcc;
            }
            raf = window.requestAnimationFrame(tick);
        };
        raf = window.requestAnimationFrame(tick);
        return () => window.cancelAnimationFrame(raf);
    }, []);

    const onPointerDown = (e) => {
        const el = stripRef.current;
        if (!el) return;
        dragRef.current = {
            active: true, startX: e.clientX, startScroll: el.scrollLeft,
            moved: false, lastX: e.clientX,
            lastT: e.timeStamp || performance.now(), velocity: 0
        };
        inertiaVelRef.current = 0;
        el.setPointerCapture && el.setPointerCapture(e.pointerId);
        el.classList.add('mc-strip-dragging');
    };

    const onPointerMove = (e) => {
        const d = dragRef.current;
        if (!d.active) return;
        const el = stripRef.current;
        if (!el) return;
        const dx = e.clientX - d.startX;
        if (Math.abs(dx) > 5) d.moved = true;
        const instX = e.clientX - d.lastX;
        el.scrollLeft -= instX;
        const now = e.timeStamp || performance.now();
        const dt = Math.max(now - d.lastT, 1);
        d.velocity = -instX * (16.67 / dt);
        d.lastX = e.clientX;
        d.lastT = now;
    };

    const onPointerUp = (e) => {
        const el = stripRef.current;
        const d = dragRef.current;
        const moved = d.moved;
        const releaseVel = d.velocity;
        d.active = false;
        if (!el) return;
        try { el.releasePointerCapture && el.releasePointerCapture(e.pointerId); } catch (_) {}
        el.classList.remove('mc-strip-dragging');
        inertiaVelRef.current = Math.max(-40, Math.min(40, releaseVel));
        if (moved) {
            const block = (ev) => { ev.preventDefault(); ev.stopPropagation(); };
            el.addEventListener('click', block, { capture: true, once: true });
            setTimeout(() => el.removeEventListener('click', block, true), 0);
        }
    };

    const doubled = [...images, ...images];

    return (
        <section className='mc-strip' aria-label='College highlights'>
            <div
                className='mc-strip-row'
                ref={stripRef}
                onScroll={handleScroll}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
            >
                {doubled.map((item, i) => (
                    <figure className='mc-strip-card' key={`${item.caption}-${i}`}>
                        <div className='mc-strip-image-wrap'>
                            <img
                                src={item.src}
                                alt={i < images.length ? (item.alt || item.caption) : ''}
                                className='mc-strip-image'
                                draggable={false}
                            />
                        </div>
                        <figcaption className='mc-strip-caption'>
                            <span className='mc-strip-caption-main'>{item.caption}</span>
                            {item.subcap && <span className='mc-strip-caption-sub'>{item.subcap}</span>}
                        </figcaption>
                    </figure>
                ))}
            </div>
            <div className='mc-strip-fade mc-strip-fade-left' style={{ width: fadeWidth, background: `linear-gradient(to right, rgba(${fadeColor},1) 0%, rgba(${fadeColor},0) 100%)` }} aria-hidden='true' />
            <div className='mc-strip-fade mc-strip-fade-right' style={{ width: fadeWidth, background: `linear-gradient(to left, rgba(${fadeColor},1) 0%, rgba(${fadeColor},0) 100%)` }} aria-hidden='true' />
        </section>
    );
};

export default StripCarousel;
