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
const Component: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO />
    <article className="application">
      <h2>Entries</h2>
      <Entry data={data} />
    </article>
  </Layout>
);

/**
 * All Entry Page.
 */
export const pageQuery = graphql`
  query Entries {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(../entry)/.*\\.md$/"}}
      sort: {order: DESC, fields: frontmatter___created}
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
`;

export default Component;
