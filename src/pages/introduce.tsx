/**
 * Author Page.
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
 * About MySelf Introduce.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function Introduce({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <SEO title={`introduce`} url={pathname} />
      <Layout>
        <article className="introduce">
          <h2>Introduce</h2>
        </article>
      </Layout>
    </>
  );
}
