import type { GatsbyConfig } from 'gatsby';

const config : GatsbyConfig = {
  siteMetadata: {
    siteUrl: "https://onesword0618.jp",
    author: "onesword0618",
    description: 'blog',
    email: "ao.akua.leo@gmail.com",
    title: "log.theater",
  },
  plugins: ["gatsby-plugin-gatsby-cloud"],
};

export default config;
