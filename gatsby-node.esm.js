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
}
