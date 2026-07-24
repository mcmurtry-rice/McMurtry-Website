import React, { useEffect, useState } from 'react';

const CONCEPT3D_MAP_ID = 473;
const CONCEPT3D_SRC = `https://map.concept3d.com/?id=${CONCEPT3D_MAP_ID}#!ce/12631?m/119194?s/?sbc/`;

// Public client key, taken from the map.concept3d.com embed itself.
const CONCEPT3D_KEY = '0001085cc708b9cef47080f064612ca5';
const CONCEPT3D_CONFIG = `https://api.concept3d.com/config?map=${CONCEPT3D_MAP_ID}&key=${CONCEPT3D_KEY}`;

const GOOGLE_SRC =
    'https://www.google.com/maps?q=McMurtry+College+Rice+University+1605+Rice+Blvd+Houston+TX+77005&output=embed';

const PROBE_TIMEOUT_MS = 5000;

// The Concept3D campus map fails soft: when Rice's map is deactivated the embed
// still returns 200 and fires `load`, it just paints an error page, and being
// cross-origin we cannot read that. Its config endpoint is CORS-open and carries
// a `status` field, so ask that instead and fall back to Google Maps unless the
// map is confirmed active.
const FindUsMap = () => {
    const [source, setSource] = useState(null);

    useEffect(() => {
        let cancelled = false;
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), PROBE_TIMEOUT_MS);

        fetch(CONCEPT3D_CONFIG, { signal: controller.signal })
            .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
            .then((config) => {
                if (!cancelled) setSource(config.status === 'active' ? 'concept3d' : 'google');
            })
            .catch(() => {
                if (!cancelled) setSource('google');
            })
            .finally(() => clearTimeout(timer));

        return () => {
            cancelled = true;
            clearTimeout(timer);
            controller.abort();
        };
    }, []);

    if (!source) {
        return <div className='mc-find-us-map mc-find-us-map-loading' aria-hidden='true' />;
    }

    return (
        <iframe
            title='Map to McMurtry College at Rice University'
            className='mc-find-us-map'
            src={source === 'concept3d' ? CONCEPT3D_SRC : GOOGLE_SRC}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen=''
        />
    );
};

export default FindUsMap;
