/**
 * Blog Layout.
 * Common Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Footer } from './footer';
import { Header } from './header';

type Props = {
  pathName?: string;
  children: React.ReactNode;
};

/**
 *  Layout Component Part.
 * @param {Props} props children: React.ReactNode
 * @returns {React.ReactElement} component
 */
export const Layout: React.FC<Props> = ({
  pathName,
  children,
}: Props): React.ReactElement => {
  const path = pathName === undefined ? `` : pathName;

  return (
    <div className="layout">
      <Header url={path} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
