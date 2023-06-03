/**
 * @file Call the create pages process.
 * @see https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/#steps-of-the-bootstrap-phase
 *
 * Support added in gatsby@4.9.0 -
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-nodets
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import path from 'path';
import { GatsbyNode } from 'gatsby';

type NextEges = Queries.EntriesQuery['entries']['edges'][number]['next'];
type PreviousEges =
  Queries.EntriesQuery['entries']['edges'][number]['previous'];

export type ContentPageContext = {
  id: string;
  previous: PreviousEges;
  next: NextEges;
};

/**
 * Creation ALL Entry Page Contents.
 * @param {Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["actions"]["createPage"]} createPage is an API for creating pages from templates.
 * @param {Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"]} graphql Query
 */
const createEntries = async (
  createPage: Parameters<
    NonNullable<GatsbyNode['createPages']>
  >['0']['actions']['createPage'],
  graphql: Parameters<NonNullable<GatsbyNode['createPages']>>['0']['graphql'],
) => {
  const contents = await graphql<Queries.EntriesQuery>(`
    query Entries {
      entries: allMarkdownRemark(sort: { frontmatter: { created: DESC } }) {
        edges {
          node {
            id
            frontmatter {
              path
              created
              updated
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 120, height: 90)
                }
              }
              author
              tags
              published
            }
            excerpt(format: PLAIN, truncate: true, pruneLength: 40)
          }
          previous {
            id
            frontmatter {
              path
              created
              updated
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 120, height: 90)
                }
              }
              author
              tags
              published
            }
            excerpt(format: PLAIN, truncate: true, pruneLength: 40)
          }
          next {
            id
            frontmatter {
              path
              created
              updated
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 120, height: 90)
                }
              }
              author
              tags
              published
            }
            excerpt(format: PLAIN, truncate: true, pruneLength: 40)
          }
        }
      }
    }
  `);

  if (!contents.data || contents.errors) {
    throw contents.errors;
  }

  contents.data.entries.edges.map((content) => {
    if (!content.node.frontmatter || !content.node.frontmatter.path) {
      throw new Error('could not get the frontmatter part.');
    }

    const context: ContentPageContext = {
      id: content.node.id,
      previous: content.previous,
      next: content.next,
    };

    createPage({
      path: content.node.frontmatter.path,
      component: path.resolve(`./src/templates/entryTemplate.tsx`),
      context: context,
    });
  });
};

/**
 * Creation Tag Page.
 * @param {Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["actions"]["createPage"]} createPage is an API for creating pages from templates.
 * @param {Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"]} graphql Query
 */
const createTags = async (
  createPage: Parameters<
    NonNullable<GatsbyNode['createPages']>
  >['0']['actions']['createPage'],
  graphql: Parameters<NonNullable<GatsbyNode['createPages']>>['0']['graphql'],
) => {
  const contents = await graphql<Queries.TagsQuery>(`
    query Tags {
      allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
        }
      }
    }
  `);

  if (!contents.data || contents.errors) {
    throw contents.errors;
  }

  contents.data.allMarkdownRemark.group.map(({ tag }) => {
    if (tag === null) {
      throw new Error('tag should be there');
    }
    const url = `/tag/${tag}/`;
    createPage({
      path: url,
      component: path.resolve(`./src/templates/tagTemplate.tsx`),
      context: {
        tag,
        url,
      },
    });
  });
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  await createEntries(createPage, graphql);
  await createTags(createPage, graphql);
};
