/**
 * Entry Point File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';
import { graphql } from 'gatsby';
import Entry from '../components/entry';
import { EntriesQuery } from '@graphql-types';
import { SEO } from '../components/seo';

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
