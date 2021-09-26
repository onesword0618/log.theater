/**
 * Blog Base Layout.
 * Common Component Parts.
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
 *  Layout Component Parts.
 *
 * @param {Props} prop children: React.ReactNode
 * @returns {React.ReactElement} component
 */
export const Layout: React.FC<Props> = (prop: Props): React.ReactElement => {
  const { children } = prop;
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};
