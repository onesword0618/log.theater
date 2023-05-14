/**
 * Term Of Service Explain.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { Head } from '../../components/head';
import { Layout } from '../../components/layout';

type Props = PageProps<{
  site: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    siteMetadata: any;
  };
}>;

/**
 * Term Of Service Explain.
 * @param  {PageProps} data pageQuery
 * @returns {React.ReactElement} component
 */
export default function Cookie({ data, location }: Props): React.ReactElement {
  const metaData = data.site.siteMetadata;
  metaData.title = `Cookie`;
  return (
    <>
      <Layout pathName={location.pathname}>
        <Head metaData={metaData} />
        <article className="cookie">
          <h2>Cookie</h2>
        </article>
      </Layout>
    </>
  );
}

/**
 * Term Page.
 */
export const pageQuery = graphql`
  query CookiePage {
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
