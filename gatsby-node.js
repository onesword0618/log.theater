
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const entryResult = await graphql(`
    {
      posts:allMarkdownRemark(
        sort: {order: DESC, fields: frontmatter___created}
        filter: {fileAbsolutePath: {regex: "/src/entry/"}},
        limit: 1000
      ) {
          nodes {
            excerpt(format: PLAIN, truncate: true)
            frontmatter {
              title
            }
            id
          }
      }
    }
  `)

  if(entryResult.errors) {
    console.log(JSON.stringify(entryResult));
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

