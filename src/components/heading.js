import React from 'react';
import styled from 'styled-components';
import { media } from '@design/media';
import { ts60b, colors } from '@design/theme';
import { Line } from '@components';

const HeadingContainer = styled.div`
    display: flex;

    .vertical {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Text = styled.h2`
    ${ts60b}
    writing-mode: ${props => (props.orientation === 'vertical' ? 'vertical-rl' : 'horizontal-lr')};
    transform: rotate(-180deg);
    direction: rtl;
    ${media.phone`
    font-size:20px;
`}
`;

const Heading = ({ orientation, children, maxLength1, maxLength2 }) => {
    return (
        <HeadingContainer>
            <div className="vertical" style={{ height: '325px', width: '10px' }}>
                <Text orientation={orientation}>{children}</Text>
                <Line
                    orientation="vertical"
                    maxLength={maxLength1}
                    style={{
                        stroke: colors.text,
                        strokeWidth: '4px',
                    }}
                />
            </div>
            <div>
                <Line
                    orientation="horizontal"
                    maxLength={maxLength2}
                    style={{
                        stroke: colors.text,
                        strokeWidth: '4px',
                    }}
                />
            </div>
        </HeadingContainer>
    );
};

export default Heading;
