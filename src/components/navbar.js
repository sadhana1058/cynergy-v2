import React, { Component } from 'react';
import styled from 'styled-components';
import { LogoIcon } from '@components/icons';
import { navLinks } from '@config';
import { tsm18r } from '@design/theme';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 40px 10px 40px;
`;
const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        display: block;
        width: 300px;
        height: auto;
    }
    svg {
    }
`;
const NavLinks = styled.div`
    ${tsm18r}
    display: flex;
`;
const NavLink = styled.div`
    margin-left: 50px;
`;

class Navbar extends Component {
    render() {
        return (
            <NavbarContainer>
                <LogoWrapper>
                    <a href="/">
                        <LogoIcon />
                    </a>
                </LogoWrapper>
                <NavLinks>
                    {navLinks.map((navLink, index) => (
                        <NavLink key={index}>
                            <a href={navLink.url}>{navLink.name}</a>
                        </NavLink>
                    ))}
                </NavLinks>
            </NavbarContainer>
        );
    }
}
export default Navbar;
