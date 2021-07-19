module.exports = {
  siteMetadata: {
    siteUrl: 'https://onesword0618.jp',
    author: 'onesword0618',
    description: 'blog',
    email: 'ao.akua.leo@gmail.com',
    title: 'log.theater',
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          './__generated__/gatsby-introspection.json': true,
        },
      }
    }
  ],
};
