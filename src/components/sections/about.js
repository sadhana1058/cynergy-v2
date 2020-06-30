import React from 'react';
import styled from 'styled-components';
import { Section } from '@design/theme';
import { Heading } from '@components';

const AboutContainer = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 80vh;
`;

const About = () => {
    return (
        <AboutContainer>
            <Heading orientation="vertical">about</Heading>
        </AboutContainer>
    );
};

export default About;
