
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const entryResult = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          excerpt(format: PLAIN, truncate: true)
          frontmatter {
            path
            title
          }
          id
        }
      }
    }
  `)

  if(entryResult.errors) {
    reporter.panicOnBuild(`Build Error!`)
    return
  }

  entryResult.data.allMarkdownRemark.nodes.forEach(({ frontmatter, id }) => {
    createPage({
      path: frontmatter.path,
      component: path.resolve(`./src/templates/blogTemplate.tsx`),
      context: {
        id: id,
      },
    })
  })
}

