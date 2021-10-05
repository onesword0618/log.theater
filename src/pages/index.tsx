/**
 * Entry Point File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { graphql } from 'gatsby';
import { EntriesQuery } from '@graphql-types';

import { Layout } from '../components/layout';
import Entry from '../components/entry';
import { SEO } from '../components/seo';

type Props = {
  data: EntriesQuery;
};

/**
 * This Application Entry Point.
 *
 * @param {EntriesQuery} data entries
 * @returns {React.FC} component
 */
const Component: React.FC<Props> = ({ data }) => {
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
      <SEO url={siteUrl} />
      <article className="application">
        <h2>Entries</h2>
        <Entry data={data} />
      </article>
    </Layout>
  );
};

/**
 * All Entry Page.
 */
export const pageQuery = graphql`
  query Entries {
    allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(../entry)/.*\\.md$/"}}
    sort: {order: DESC, fields: frontmatter___created}
    skip: 0
    limit: 8
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
  site {
    siteMetadata {
      siteUrl
    }
  }
  }
`;

export default Component;
