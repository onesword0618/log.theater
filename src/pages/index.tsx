/**
 * Entry Point File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';
import { Posts } from './posts';

/**
 * This Application EntryPoint.
 *
 * @returns {React.ReactElement} components
 */
export default function Page(): React.ReactElement {
  return (
    <div className="application">
      <Layout>
        <main>
          <h2>Posts</h2>
          <Posts />
        </main>
      </Layout>
    </div>
  );
}
