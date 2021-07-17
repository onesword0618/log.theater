import React from 'react';
import Header from './header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (prop) => {
  const { children } = prop;
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
