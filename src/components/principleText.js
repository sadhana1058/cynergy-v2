import React from 'react';
import styled from 'styled-components';
import { ts250b } from '@design/theme';
import { principles } from '@config';

const TextWrapper = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    flex-direction: column;
    text-align: right;
    z-index: -1;
    right: -40px;
    margin-top: 100px;
`;
const Text = styled.h1`
    ${ts250b}
    color: rgba(91,91,91,0.1);
`;
const PrincipleText = () => {
    return (
        <TextWrapper>
            {principles.map((principle, index) => (
                <Text key={index}>{principle.toUpperCase()}</Text>
            ))}
        </TextWrapper>
    );
};

export default PrincipleText;
