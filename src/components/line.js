import React from 'react';

const Line = ({ style, orientation, maxLength }) => {
    let x1,
        y1,
        x2,
        y2,
        height,
        width = 0;
    if (orientation === 'vertical') {
        x1 = x2 = y1 = 0;
        y2 = maxLength;
        height = maxLength;
        width = 2;
    } else {
        y1 = y2 = x1 = 0;
        x2 = maxLength;
        height = 2;
        width = maxLength;
    }
    return (
        <svg height={height} width={width}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} style={style} />
        </svg>
    );
};

export default Line;
