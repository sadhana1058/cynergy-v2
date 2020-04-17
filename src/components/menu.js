import React from 'react';
import styled from 'styled-components';
import { navLinks } from '@config';
import { tsm18r } from '@design/theme';
import { Quote } from '@components';

const StyledMenu = styled.div`
    width: 75vw;
    height: 100vh;
    background-color: #1f1f1f;
    position: absolute;
    left: auto;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;
const QuoteContainer = styled.div`
    background-color: #272727;
    width: 100%;
    padding: 4px 12px;
`;

const NavLinks = styled.div`
    ${tsm18r}
`;
const NavLink = styled.div`
    margin-top: 20%;
    text-align: center;
`;

const Menu = () => {
    return (
        <StyledMenu>
            <NavLinks>
                {navLinks.map((navLink, index) => (
                    <NavLink key={index}>
                        <a href={navLink.url}>{navLink.name}</a>
                    </NavLink>
                ))}
            </NavLinks>
            <QuoteContainer>
                <Quote />
            </QuoteContainer>
        </StyledMenu>
    );
};

export default Menu;
