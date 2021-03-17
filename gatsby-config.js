module.exports = {
  siteMetadata: {
    title: `鳥に生まれることができなかった人へ`,
    subTitle: `Powered by Gatsby`,
    siteUrl: `https://blog.toriwatari.work/page/1/`,
    author: {
      name: `Kento Yoshizu`,
      summary: `Front-end engineer in Shiga, Japan`,
    },
    description: `IT技術ブログとその他趣味`,
    social: {
      twitter: `potsunen15`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            offsetY: `30`,
            icon: false,
            className: `custom-class`,
            maintainCase: true,
          },
        },
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-emoji`,
            options: {
              emojiConversion: 'shortnameToUnicode',
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 830,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-177277170-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2948ff`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}