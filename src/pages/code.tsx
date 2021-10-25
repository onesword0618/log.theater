/**
 * Code Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Head } from '../components/head';
import { Layout } from '../components/layout';

type Props = {
  location: {
    pathname: string;
  };
};

/**
 * Code Explain.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function Code({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <Head title={`code`} url={pathname} />
      <Layout>
        <article className="code">
          <h2>Code</h2>
        </article>
      </Layout>
    </>
  );
}
