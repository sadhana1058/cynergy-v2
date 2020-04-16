import React from 'react';
import styled from 'styled-components';
import { ts250b, ts100b } from '@design/theme';
import { media } from '@design/media';
import { principles } from '@config';

const principlesText = window.innerWidth >= 1000 ? principles.desktop : principles.mobile;

const TextWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    text-align: right;
    z-index: -1;
    right: -40px;
    margin-top: 100px;
    ${media.tablet`${ts100b}; right: -10px`};
`;
const Text = styled.h1`
    ${ts250b}
    color: rgba(91,91,91,0.1);
    ${media.phone`${ts100b}`};
    ${media.tablet`${ts100b}`};
    ${media.desktop``};
`;
const PrincipleText = () => {
    return (
        <TextWrapper>
            {principlesText.map((principle, index) => (
                <Text key={index}>{principle.toUpperCase()}</Text>
            ))}
        </TextWrapper>
    );
};

export default PrincipleText;
