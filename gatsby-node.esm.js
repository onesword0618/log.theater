
import path from 'path';

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
              path
            }
            id
          }
      }
    }
  `)

  if(entryResult.errors) {
    reporter.panicOnBuild(`Build Error!`)
    throw entryResult.errors;
  }

  entryResult.data.posts.nodes.map(({ frontmatter, id }) => {
    createPage({
      path: frontmatter.path,
      component: path.resolve(`./src/templates/blogTemplate.tsx`),
      context: {
        id: id,
      },
    })
  })

  // const count = 6;
  // const entries = entryResult.data.posts.nodes.length;
  // const entryPages = Math.ceil(entries / count);

  // Array.from({ length: entryPages }).forEach((_ , index) => {
  //   createPage({
  //     path: index === 0 ? `/entry/` : `/entry/${index + 1}`,
  //     component: path.resolve(`./src/templates/entryTemplate.tsx`),
  //     context: {
  //       skip: count * index,
  //       limit: count,
  //     }
  //   })
  // })
}
