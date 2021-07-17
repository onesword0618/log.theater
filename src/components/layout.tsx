import React from 'react';
import Header from './header';

type Props = {
  children : React.ReactNode
}

const Layout: React.FC<Props> = (prop) => (
  <div className="wrapper">
    <Header />
    <div className="content">{prop}</div>
  </div>
  );

export default Layout;