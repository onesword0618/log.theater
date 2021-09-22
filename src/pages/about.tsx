/**
 * About Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';

/**
 * Blog About Explain.
 *
 * @returns {React.ReactElement} components
 */
export default function About(): React.ReactElement {
  return (
    <Layout>
      <article className="about">
        <h2>About</h2>
      </article>
    </Layout>
  );
}
