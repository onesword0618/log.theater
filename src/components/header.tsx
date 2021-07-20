/*
 * Copyright (c) 2021 onesword0618
 */
import * as React from 'react';
import { Link } from 'gatsby';

/**
 * Header Components Parts.
 *
 * @returns {React.ReactElement} components
 */
export const Header: React.FC = (): React.ReactElement => (
  <div className="header-container">
    <header>
      <h1 className="title">
        <Link to="/"> Log Theater </Link>
      </h1>
    </header>
  </div>
);
