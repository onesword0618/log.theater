/**
 * @file Gatsby Config File.
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 *
 * Support added in gatsby@4.9.0 -
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-configts
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import type { GatsbyConfig } from 'gatsby';

// GraphiQL described in gatsby-config.ts does not perform automatic type generation.
// Definition to pass type inspection.
type Feed = {
  node: {
    id: string;
    frontmatter: {
      title: string;
      path: string;
      updated: string;
    };
    excerpt: string;
    html: string;
  };
};

const config: GatsbyConfig = {
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
    siteIcon: `${__dirname}/static/icon.png`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allMarkdownRemark },
            }: {
              query: {
                site: Queries.SiteMetaDataQuery['site'];
                allMarkdownRemark: { edges: Feed[] };
              };
            }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.updated,
                  url: `${site?.siteMetadata?.siteUrl}${edge.node.frontmatter.path}`,
                  guid: `${site?.siteMetadata?.siteUrl}${edge.node.frontmatter.path}`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(sort: {frontmatter: {created: DESC}}) {
                  edges {
                    node {
                      id
                      frontmatter {
                        title
                        path
                        updated
                      }
                      excerpt(format: PLAIN, truncate: true)
                      html
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'log.theater RSS feed',
          },
        ],
      },
    },
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
        sitemap: `https://onesword0618.jp/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `entry`,
        path: `${__dirname}/contents/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `log.theater`,
        short_name: `log.theater`,
        start_url: `/`,
        background_color: `#FDDEA5`,
        theme_color: `#FDDEA5`,
        display: `standalone`,
        icon: `static/icon.png`,
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
          // afetr gatsby-remark-autolink-headers plugin.
          {
            resolve: `gatsby-remark-check-links`,
            options: {
              verbose: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-plugin-typescript`,
            options: {
              isTSX: true,
              jsxPragma: `jsx`,
              allExtensions: true,
            },
          },
        ],
      },
    },
  ],
};

export default config;
