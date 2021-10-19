import path from 'path';

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const entryResult = await graphql(`
    {
      posts:allMarkdownRemark(
        sort: {order: DESC, fields: frontmatter___created}
        limit: 1000
      ) {
          nodes {
            id
            frontmatter {
              title
              path
            }
            excerpt(format: PLAIN, truncate: true)
          }
      }
    }
  `)

  if(entryResult.errors) {
    throw entryResult.errors;
  }

  const entries = entryResult.data.posts.nodes;

  entries.map(({ frontmatter, id }) => {
    createPage({
      path: frontmatter.path,
      component: path.resolve(`./src/templates/blogTemplate.tsx`),
      context: {
        id: id,
      },
    })
  })

  const count = 6;
  const pages = entryResult.data.posts.nodes.length;
  const entryPages = Math.ceil(pages / count);

  Array.from({ length: entryPages }).forEach((_ , index) => {
    createPage({
      path: index === 0 ? `/entry/` : `/entry/${index + 1}`,
      component: path.resolve(`./src/templates/entryTemplate.tsx`),
      context: {
        skip: count * index,
        limit: count,
      },
    })
  })
}
