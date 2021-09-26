/**
 * Not Found Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';

type Props = {
  location: {
    pathname: string;
  };
};

/**
 * Not Found Page.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function Page({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <SEO title="Not Found Page." url={pathname} />
      <Layout>
        <h1>Sorry, Not Found.</h1>
      </Layout>
    </>
  );
}
