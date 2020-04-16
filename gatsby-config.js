module.exports = {
    siteMetadata: {
        title: `Cynergy Coding Club`,
        description: `Official coding club of RUAS.`,
        author: `Cynergy | Coding Club`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Cynergy | Coding Club`,
                short_name: `cynergy`,
                start_url: `/`,
                background_color: `#919191`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/cynergy-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-webpack-size`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
