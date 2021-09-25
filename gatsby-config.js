/**
 * Config your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://onesword0618.jp',
    author: 'onesword0618',
    description: 'blog',
    email: 'ao.akua.leo@gmail.com',
    title: 'log.theater',
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphql-types.d.ts`,
        documentPaths: [
          `./node_modules/gatsby-*/**/*.js`,
          `./src/**/*.{ts,tsx}`,
          `node_modules/gatsby-transformer-sharp/!(node_modules)/**/*.js`
        ]
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `entry`,
        path: `${__dirname}/src/entry/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
};
