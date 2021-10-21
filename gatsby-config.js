/**
 * Gatsby Config File.
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
    description: 'log.theater は、Inoue Kenichi @onesword0618 のブログです.',
    email: 'ao.akua.leo@gmail.com',
    title: 'log.theater',
    locale: 'ja-JP',
    facebookApplicationId: '588287979288774'
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        outputPath: `${__dirname}/types/graphql-types.d.ts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `entry`,
        path: `${__dirname}/content/entry/`,
        ignore: [`${__dirname}/types/graphql-types.d.ts`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `log.theater`,
        short_name: `log.theater`,
        start_url: `/`,
        background_color: `#FCA400`,
        theme_color: `#FCA400`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-code-titles`,
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `70`,
              className: `anchor-link`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          'gatsby-remark-table',
        ]
      }
    },
  ],
};
