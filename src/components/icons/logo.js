import React from 'react';
import { colors, tsd80d, ts32b } from '@design/theme';
import styled from 'styled-components';

const Logo = styled.div`
    #CY,
    #NERGY {
        ${tsd80d}
    }
    #CODING-CLUB {
        ${ts32b}
    }
`;

const LogoIcon = () => (
    <Logo>
        <svg viewBox="0 0 518 64" role="img" xmlns="http://www.w3.org/2000/svg">
            <title>CynergyLogo</title>
            <desc>Created with Sketch.</desc>
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
                        <line x1="376.5" y1="1.5" x2="376.5" y2="62.5" id="Line" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square"></line>
                        <text id="CODING-CLUB" fontFamily="ProductSans-Medium, Product Sans Medium" fontSize="32" fontWeight="normal" line-spacing="32" letterSpacing="0.32" fill={colors.main}>
                            <tspan x="391" y="31">
                                CODING
                            </tspan>
                            <tspan x="391" y="63">
                                CLUB
                            </tspan>
                        </text>
                    </g>
                </g>
            </g>
        </svg>
    </Logo>
);

export default LogoIcon;
