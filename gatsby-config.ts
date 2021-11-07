import type { GatsbyConfig } from "gatsby"
import { resolve } from "path"

const plugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-sass`,
  `gatsby-plugin-typegen`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  `gatsby-plugin-mdx`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `src/posts`,
      name: `posts`,
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
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      // theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  title: `CSS Animation & Tips`,
  description: `CSSだけでできる色々なことの解説`,
  lang: `ja`,
  siteUrl: `https://cssanimation-and-tips.netlify.app`,
  locale: `ja_JP`,
  author: {
    name: `Kento Yoshizu`,
  },
  //description: `A starter blog demonstrating what Gatsby can do.`,
  social: {
    //twitter: `kylemathews`,
  },
}

const config: GatsbyConfig = {
  plugins,
  siteMetadata
}

export default config