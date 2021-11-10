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
    locale: `ja-JP`,
    title: `log.theater`,
    author: {
      name: `onesword0618`,
      excerpt: `you reap what you sow.`,
    },
    description: `log.theater は、Inoue Kenichi (@onesword0618) のブログです.`,
    siteUrl: `https://onesword0618.jp`,
    email: `ao.akua.leo@gmail.com`,
    facebookApplicationId: `588287979288774`,
    dnsTxtCode: `7tocuDO8uh5y587N2xWlBEsThHfZCc5V-iyItl3s2-k`,
    social: {
      twitter: `onesword0618`,
      github: `onesword0618`,
    },
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://onesword0618.jp`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://onesword0618.jp`,
        sitemap: `https://onesword0618.jp/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans Mono`
        ]
      }
    },
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
          }
        ]
      }
    },
  ],
};
