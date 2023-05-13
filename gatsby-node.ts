/**
 * Call Create Gatsby Node Process.
 * Creation Static Contents.
 *
 * Copyright (c) 2021.
 * @author Kenichi Inoue.
 */
import path from 'path';
import { GatsbyNode } from 'gatsby';

/**
 * Creation Entry Page.
 * @param {Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["actions"]["createPage"]} createPage is an API for creating pages from templates.
 * @param {Parameters<NonNullable<GatsbyNode["createPages"]>>["0"]["graphql"]} graphql Query
 */
const createEntries = async (
  createPage: Parameters<
    NonNullable<GatsbyNode['createPages']>
  >['0']['actions']['createPage'],
  graphql: Parameters<NonNullable<GatsbyNode['createPages']>>['0']['graphql'],
) => {
  const contents = await graphql<Queries.AllEntryQuery>(`
    query AllEntry {
      entries: allMarkdownRemark(sort: { frontmatter: { created: DESC } }) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
            excerpt(format: PLAIN, truncate: true)
          }
          previous {
            id
            frontmatter {
              title
              path
            }
          }
          next {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `);

  if (!contents.data || contents.errors) {
    throw contents.errors;
  }

  contents.data.entries.edges.map(({ node, previous, next }) => {
    if (!node.frontmatter || node.frontmatter.path === null) {
      throw new Error('frontmatter be there.');
    }

    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`./src/templates/entryTemplate.tsx`),
      context: {
        id: node.id,
        previous: previous,
        next: next,
      },
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
  const contents = await graphql<Queries.AllTagQuery>(`
    query AllTag {
      tag: allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
        }
      }
    }
  `);

  if (!contents.data || contents.errors) {
    throw contents.errors;
  }

  const tags = contents.data.tag.group;
  tags.map(({ tag }) => {
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
