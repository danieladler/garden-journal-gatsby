module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    testProp: 'I\'m new here!',
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts/`,
      },
    },
    // test query after installing this plugin and adding test .md file:
    //
    // allFile {
    //   edges {
    //     node {
    //       extension
    //     }
    //   }
    // }
    //
    `gatsby-transformer-remark`,
    // test query after installing this plugin and updating test .md file to have front matter:
    //
    //
    // allMarkdownRemark {
    //    totalCount
    //    edges {
    //      node {
    //        frontmatter {
    //          title
    //          slug
    //          date(formatString: "MMMM DD, YYYY")
    //        }
    //        excerpt
    //        timeToRead
    //      }
    //    }
    //  }
    `gatsby-plugin-netlify-cms`
  ],
}
