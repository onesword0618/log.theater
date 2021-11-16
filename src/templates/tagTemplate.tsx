/**
 * Tag  Page Template.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '../components/layout';
import { Article } from '../components/article';
import { Head } from '../components/head';
import { MarkdownRemark, SiteMetadata } from '@types';

type Props = PageProps<{
  allMarkdownRemark: {
    nodes: MarkdownRemark[];
  };
  site: {
    siteMetadata: SiteMetadata;
  };
}>;

const TagTemplate: React.FC<Props> = ({ data, location }: Props) => {
  const metaData = data.site.siteMetadata;
  const articles = data.allMarkdownRemark.nodes;
  return (
    <Layout pathName={location.pathname}>
      <Head metaData={metaData} />
      <h2>Category</h2>
      {articles.map((content) => (
        <Article content={content} key={content.id} />
      ))}
    </Layout>
  );
};

/**
 * Tag Template.
 */
export default TagTemplate;

/**
 * Building Tag Pages.
 */
export const tagQuery = graphql`
  query Tags($tag: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___created }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        id
        excerpt(format: PLAIN, truncate: true)
        frontmatter {
          title
          path
          entrytDate: created(formatString: "YYYY.MM.DD")
          updateDate: updated(formatString: "YYYY.MM.DD")
          tags
        }
      }
    }
    site {
      siteMetadata {
        locale
        title
        author {
          name
          excerpt
        }
        description
        siteUrl
        facebookApplicationId
        social {
          twitter
          github
        }
      }
    }
  }
`;
