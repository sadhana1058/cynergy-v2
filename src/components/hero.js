import React from 'react';
import styled from 'styled-components';
import { ts100b, ts80r, ts50r, colors, Section } from '@design/theme';
import { tagline } from '@config';

const HeroContainer = styled(Section)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: calc(100vh- 46px);
`;

const Greeting = styled.div`
    ${ts100b}
    span {
        color: ${colors.main};
    }
`;
const Name = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        ${ts80r}
    }
    div {
        width: inherit;
        display: inline-flex;
        align-self: center;
        svg {
            width: 360px;
            height: 62px;
            text {
                font-size: 80px;
            }
        }
    }
`;
const Tagline = styled.div`
    ${ts50r}
    opacity: 0.6;
`;
const Hero = () => {
    return (
        <HeroContainer>
            <Greeting>
                Hello<span>.</span>
            </Greeting>
            <Name>
                <span>this is&nbsp;</span>
                <div>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg">
                        <title>CYNERGY</title>
                        <g id="Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="A4" transform="translate(-60.000000, -77.000000)">
                                <g id="CynergyLogo" transform="translate(59.000000, 77.000000)">
                                    <text id="NERGY" fontFamily="DevilBreezeDemi, Devil Breeze" fontSize="80" fontWeight="400" letterSpacing="0.8" fill={colors.main}>
                                        <tspan x="110" y="62">
                                            NERGY
                                        </tspan>
                                    </text>
                                    <text id="CY" fontFamily="DevilBreezeDemi, Devil Breeze" fontSize="80" fontWeight="400" letterSpacing="0.8" fill="#FFFFFF">
                                        <tspan x="0" y="62">
                                            CY
                                        </tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </Name>
            <Tagline>{tagline}</Tagline>
        </HeroContainer>
    );
};

export default Hero;
