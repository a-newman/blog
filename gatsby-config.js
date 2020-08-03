module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Annie Makes Tech Styles`,
    author: `Anelise`,
    description: `a description`,
    siteUrl: `https://a-newman.github.io/blog/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: process.env.GATSBY_PREVIEW ? [] : [`**/drafts/*`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: "<!-- end excerpt -->",
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // used to generate different image widths
              maxWidth: 800,
              // showCaptions: true,
              markdownCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-174136095-1",
      },
    },
    `gatsby-plugin-feed`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
