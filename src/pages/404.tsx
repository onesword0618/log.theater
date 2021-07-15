/**
 * Not Found Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Head } from '../components/head';
import { Layout } from '../components/layout';
import { SiteMetadata } from '@types';

type Props = PageProps<{
  site: {
    siteMetadata: SiteMetadata;
  };
}>;

/**
 * Not Found Page.
 *
 * @param  {PageProps} data pageQuery
 * @returns {React.ReactElement} component
 */
export default function Page({ data, location }: Props): React.ReactElement {
  const metaData = data.site.siteMetadata;
  metaData.title = `Not Found Page`;
  return (
    <Layout pathName={location.pathname}>
      <Head metaData={metaData} />
      <h1>Sorry, Not Found.</h1>
    </Layout>
  );
}

/**
 * Not Found Page.
 */
export const pageQuery = graphql`
  query NotFoundPage {
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
