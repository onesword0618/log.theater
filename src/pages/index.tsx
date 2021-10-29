/**
 * Application Entry Point File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '../components/layout';
import { Article } from '../components/article';
import { Head } from '../components/head';
import { SiteMetadata, MarkdownRemark } from '@types';
import 'ress';

type Props = PageProps<{
  allMarkdownRemark: {
    nodes: MarkdownRemark[];
  };
  site: {
    siteMetadata: SiteMetadata;
  };
}>;

/**
 * This Application Entry Point.
 *
 * @param {PageProps} data pageQuery
 * @returns {React.FC} component
 */
const Application: React.FC<Props> = ({ data, location }) => {
  const metaData = data.site.siteMetadata;
  const articles = data.allMarkdownRemark.nodes;
  return (
    <Layout pathName={location.pathname}>
      <Head url={metaData.siteUrl} />
      <h2>Articles</h2>
      {articles.map((content) => (
        <Article content={content} key={content.id} />
      ))}
    </Layout>
  );
};

export default Application;

/**
 * Building Entry Pages.
 */
export const pageQuery = graphql`
  query Entries {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(../content/entry)/.*\\.md$/"}}
      sort: {order: DESC, fields: frontmatter___created}
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
        title
        author {
          name
          excerpt
        }
        description
        siteUrl
        social {
          twitter
          github
        }
      }
    }
  }
`;
