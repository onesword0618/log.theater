import { Header } from '../components/header';
import React from 'react';

export const Layout: React.FC = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="content">{children}</div>
  </div>
);