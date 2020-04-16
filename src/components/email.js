import React from 'react';
import { SideLine } from '@components';
import styled from 'styled-components';
import { email } from '@config';
import { tsm18r } from '@design/theme';

const RotateContainer = styled.div`
    ${tsm18r}
    position: relative;
    display: block;
    writing-mode: vertical-lr;
    padding-bottom: 12px;
`;
const Email = () => {
    return (
        <SideLine position="right">
            <RotateContainer>
                {' '}
                <a href={`mailto:${email}`}>{email} </a>
            </RotateContainer>
        </SideLine>
    );
};

export default Email;
