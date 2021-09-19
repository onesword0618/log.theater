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

/**
 * This Application EntryPoint.
 *
 * @param root0 root
 * @param root0.data data
 * @returns {React.ReactElement} components
 */
export default function Page({ data }): React.ReactElement {
  return (
    <div className="application">
      <Layout>
        <main>
          <h2>Entries</h2>
          <Entry content={data} />
        </main>
      </Layout>
    </div>
  );
}

/**
 * All Entry,
 */
export const query = graphql`
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
