/**
 * Blog Base Layout.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Header } from './header';
import { Footer } from './footer';

type Props = {
  children: React.ReactNode;
};

/**
 *  Layout Components Parts.
 *
 * @param {Props} prop children: React.ReactNode
 * @returns {React.ReactElement} components
 */
export const Layout: React.FC<Props> = (prop: Props): React.ReactElement => {
  const { children } = prop;
  return (
    <div className="layout-container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};
