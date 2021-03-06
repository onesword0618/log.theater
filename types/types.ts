export type SiteMetadata = {
  locale: string;
  title: string;
  author: {
    name: string;
    excerpt: string;
  };
  description: string;
  siteUrl: string;
  facebookApplicationId: string;
  dnsTxtCode: string;
  social: {
    twitter: string;
    github: string;
  };
};

export type Frontmatter = {
  title: string;
  path: string;
  entrytDate: string;
  updateDate: string;
  tags: string[];
};

export type MarkdownRemark = {
  id: string;
  html: string;
  frontmatter: Frontmatter;
  excerpt: string;
};