// tools/scrollLock.js
//
// Freezes the page behind a modal.
//
// `overflow: hidden` on <body> is not enough on its own: iOS Safari
// ignores it and keeps scrolling the page under a finger that drags on
// the scrim. Pinning the body with `position: fixed` (offset by the
// current scroll so nothing visibly jumps) is what actually holds it
// still everywhere, and the scroll position is put back on unlock.
//
// Locks nest: a person's picture can be opened from inside the
// McMinistry role modal, and closing the picture must not unfreeze the
// page while the role modal is still up. Only the last unlock restores.
//
// Usage:
//   useEffect(() => {
//       if (!open) return undefined;
//       return lockScroll();   // returns its own unlock
//   }, [open]);

let depth = 0;
let saved = null;

export function lockScroll() {
    if (typeof document === 'undefined') return () => {};

    if (depth === 0) {
        const { body } = document;
        const y = window.scrollY;
        saved = {
            y,
            hash: window.location.hash,
            style: {
                position: body.style.position,
                top: body.style.top,
                left: body.style.left,
                right: body.style.right,
                width: body.style.width,
                overflow: body.style.overflow,
            },
        };
        Object.assign(body.style, {
            position: 'fixed',
            top: `-${y}px`,
            left: '0',
            right: '0',
            width: '100%',
            overflow: 'hidden',
        });
    }
    depth += 1;

    let released = false;
    return () => {
        if (released) return;
        released = true;
        depth -= 1;
        if (depth > 0 || !saved) return;

        const { y, hash, style } = saved;
        saved = null;
        Object.assign(document.body.style, style);

        // global.css sets `scroll-behavior: smooth` on the root; putting
        // the page back where it was should be instant, not a glide.
        const root = document.documentElement;
        const prevBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';
        window.scrollTo(0, y);
        root.style.scrollBehavior = prevBehavior;

        // A link inside the modal (e.g. "People's Council ↓") changed the
        // hash while the page was pinned, so the browser's own jump went
        // nowhere. Follow it now that the page can move again.
        if (window.location.hash && window.location.hash !== hash) {
            const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
}
