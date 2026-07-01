import React, { useState, useRef, useEffect } from 'react';

const ImageFadeIn = ({ src, alt, className, style, imgStyle, ...rest }) => {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current && ref.current.complete) setLoaded(true);
    }, []);

    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            className={className}
            onLoad={() => setLoaded(true)}
            style={{
                ...style,
                ...imgStyle,
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.6s ease',
            }}
            {...rest}
        />
    );
};

export default ImageFadeIn;
