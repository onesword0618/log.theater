/**
 * Design Page.
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
 * Design Explain.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function Design({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <SEO title={`design`} url={pathname} />
      <Layout>
        <article className="design">
          <h2>Design</h2>
        </article>
      </Layout>
    </>
  );
}
