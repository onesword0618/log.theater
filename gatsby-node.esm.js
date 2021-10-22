/**
 * Creation Static Contents.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import path from 'path';

/**
 * Creation Entry Page.
 *
 * @param graphql
 * @param actions
 */
const createEntries = async ( graphql, actions ) => {
  const { createPage } = actions;

  const contents = await graphql(`
    {
      entries: allMarkdownRemark(
        sort: {order: DESC, fields: frontmatter___created}
      ) {
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
  `)

  if(contents.errors) {
    throw contents.errors;
  }

  const entries = contents.data.entries.edges;

  entries.map(({ node, previous, next }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`./src/templates/entryTemplate.tsx`),
      context: {
        id: node.id,
        previous: previous,
        next: next
      },
    })
  })
}

/**
 * Creation Tag Page.
 *
 * @param graphql
 * @param actions
 */
const createTags = async ( graphql, actions ) => {
  const { createPage } = actions;

  const contents = await graphql(`
    {
      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  if(contents.errors) {
    throw contents.errors;
  }

  const tags = contents.data.tags.group;

  tags.map(({ tag }) => {
    const url = `/tag/${tag}/`;
    createPage({
      path: url,
      component: path.resolve(`./src/templates/tagTemplate.tsx`),
      context: {
        tag,
        url,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createEntries(graphql, actions);
  await createTags(graphql, actions);
}
