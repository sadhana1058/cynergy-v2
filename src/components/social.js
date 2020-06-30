import React from 'react';
import { SideLine } from '@components';

import styled from 'styled-components';
import { tsm18r } from '@design/theme';

const RotateContainer = styled.div`
    ${tsm18r}
    position: relative;
    display: block;
    writing-mode: vertical-rl;
    padding-bottom: 12px;
`;
const Social = () => {
    return (
        <SideLine position="left">
            <RotateContainer>
                <div>this is social</div>
            </RotateContainer>
        </SideLine>
    );
};
export default Social;
