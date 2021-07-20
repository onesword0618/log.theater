/*
 * Copyright (c) 2021 onesword0618
 */
import * as React from 'react';

/**
 * Footer Components Parts.
 *
 * @returns {React.ReactElement} components
 */
export const Footer: React.FC = (): React.ReactElement => (
  <div className="footer-container">
    <footer>
      <h6 className="copyright">
        © Copyright {new Date().getFullYear()} All rights reserved
      </h6>
      <h6 className="author">
        createdBy <a href="https://twitter.com/onesword0618">@onesword0618</a>
      </h6>
    </footer>
  </div>
);
