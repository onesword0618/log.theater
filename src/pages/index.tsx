/**
 * Application Entry Point File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { Entry } from '../components/entry';
import { Head } from '../components/head';

type Props = {
  data: GatsbyTypes.EntriesQuery;
};

/**
 * This Application Entry Point.
 *
 * @param {Props} data entries
 * @returns {React.FC} component
 */
const Application: React.FC<Props> = ({ data }) => {
  const { site } = data;
  if (
    site === undefined ||
    site?.siteMetadata === undefined ||
    site.siteMetadata?.siteUrl === undefined
  ) {
    return null;
  }

  const { siteUrl } = site.siteMetadata;
  if (siteUrl === null) {
    return null;
  }

  return (
    <Layout>
      <Head url={siteUrl} />
      <article className="application">
        <h2>記事一覧</h2>
        <Entry contents={data} />
      </article>
    </Layout>
  );
};

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
        frontmatter {
          title
          path
        }
        excerpt(format: PLAIN, truncate: true)
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default Application;
