import React, { useState } from 'react';

const ImageFadeIn = ({ src, alt, className, style, imgStyle, ...rest }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
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
