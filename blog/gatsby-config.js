require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Epic Blog`,
    description: `IT-DEV-164 Gatsby Blog`,
    author: "Giuseppe Cannizzo",
    contact: {
          name: "Giuseppe Cannizzo",
          company: "Blogs Are Cool",
          address: "1403 W Css Lane"
        }
  },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-styled-components`,
          {
              resolve: 'gatsby-source-contentful',
              options: {
                  spaceId: `cm2q9el3kkvp`,
                  accessToken: `S5ObXW3tAcy_RKTcAAya4d8J91KJpROah7R5dstFCSw`
              },
          },
          {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `images`,
                path: `${__dirname}/src/images`,
              }
      },
     `gatsby-transformer-remark`,
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
          {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
          }
      }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
