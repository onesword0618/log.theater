/**
 * Author Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';

/**
 * About MySelf Introduce.
 *
 * @returns {React.ReactElement} components
 */
export default function Introduce(): React.ReactElement {
  return (
    <Layout>
      <article className="introduce">
        <h2>Introduce</h2>
      </article>
    </Layout>
  );
}
