/**
 * Entry Point File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';
import { graphql } from 'gatsby';
import Entry from './entry';
import { EntriesQuery } from '@graphql-types';

type Props = {
  data: EntriesQuery;
};

/**
 * This Application EntryPoint.
 *
 * @param {EntriesQuery} {data} initialData
 * @returns {React.FC} components
 */
const Component: React.FC<Props> = ({ data }) => (
  <div className="application">
    <Layout>
      <main>
        <h2>Entries</h2>
        <Entry content={data} />
      </main>
    </Layout>
  </div>
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
