const siteMetadata = {
  title: `Gatsby TS starter, w/ chakra-ui & mdx api redirect`,
  description: `Gatsby TypeScript starter with styled-components. Built with the Gatsby default starter.`,
  authorName: `Eric Anderson, (help from scottspence.com)`,
  image: `/gatsby-astronaut.png`,
  siteUrl: `https://testurl.com`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `@pretendaccount`,
  favicon: `./static/favicon.png`,
  backgroundColor: `#609`,
  themeColor: `#639`,
}

module.exports = {
  siteMetadata,

  plugins: [
    `gatsby-plugin-styled-components`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/../content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: `minimal-ui`,
        icon: siteMetadata.favicon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cambay\:400,700`,
          `arvo\:400,700`,
          `ubuntu mono\:400,700`,
        ],
      },
      display: 'swap',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
