/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '@design';
import { Navbar, Email, Social, PrincipleText } from '@components';

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const isBiggerScreen = typeof window !== `undefined` ? window.innerWidth >= 1200 && window.innerHeight >= 650 : false;

const Layout = ({ children }) => {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `);
    return (
        <div id="root">
            <GlobalStyles />

            <StyledContent>
                <Navbar />
                <PrincipleText />
                <main>{children}</main>
                {isBiggerScreen ? <Email /> : ''}
                {isBiggerScreen ? <Social /> : ''}
            </StyledContent>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
