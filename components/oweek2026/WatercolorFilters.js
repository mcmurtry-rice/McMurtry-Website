import React from 'react';

const WatercolorFilters = () => (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
            <filter id="paper-overlay">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="1.2"
                    numOctaves="6"
                    stitchTiles="stitch"
                    result="finegrain"
                />
                <feColorMatrix in="finegrain" type="saturate" values="0" result="bw" />
                <feBlend in="SourceGraphic" in2="bw" mode="multiply" />
            </filter>

            <filter id="watercolor-edge" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence
                    type="turbulence"
                    baseFrequency="0.03"
                    numOctaves="4"
                    seed="2"
                    result="warp"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="warp"
                    scale="15"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displaced"
                />
                <feGaussianBlur in="displaced" stdDeviation="1.2" result="softened" />
                <feComposite in="softened" in2="displaced" operator="atop" />
            </filter>

            <filter id="watercolor-blotch" x="-30%" y="-30%" width="160%" height="160%">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.012"
                    numOctaves="5"
                    seed="3"
                    result="warp"
                />
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="warp"
                    scale="55"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displaced"
                />
                <feGaussianBlur in="displaced" stdDeviation="6" result="blurred" />
                <feColorMatrix in="blurred" type="matrix"
                    values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 0.7 0"
                    result="faded"
                />
                <feMerge>
                    <feMergeNode in="faded" />
                    <feMergeNode in="displaced" />
                </feMerge>
            </filter>
        </defs>
    </svg>
);

const WatercolorBlotch = ({ color, size, style }) => (
    <div
        className="watercolor-blotch"
        style={{
            width: size,
            height: size * 0.85,
            background: `
                radial-gradient(ellipse at 35% 35%, ${color} 0%, ${color}aa 20%, ${color}55 45%, ${color}22 65%, transparent 80%),
                radial-gradient(ellipse at 60% 65%, ${color}88 0%, ${color}44 30%, transparent 60%)
            `,
            ...style,
        }}
    />
);

export { WatercolorFilters, WatercolorBlotch };
