/**
 * Term Of Service Explain.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Head } from '../../components/head';
import { Layout } from '../../components/layout';

type Props = {
  location: {
    pathname: string;
  };
};

/**
 * Term Of Service Explain.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function Cookie({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <Head title="Cookie" url={pathname} />
      <Layout>
        <article className="cookie">
          <h2>Cookie</h2>
        </article>
      </Layout>
    </>
  );
}
