/**
 * Activity Page.
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
 * Activity Explain.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function Activity({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <SEO title={`activity`} url={pathname} />
      <Layout>
        <article className="activity">
          <h2>Activity</h2>
        </article>
      </Layout>
    </>
  );
}
