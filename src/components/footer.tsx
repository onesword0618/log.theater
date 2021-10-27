/**
 * Blog Common Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
library.add(faFacebook, faTwitter);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import './footer.css';

/**
 * Footer Component Part.
 *
 * @returns {React.ReactElement} component
 */
export const Footer: React.FC = (): React.ReactElement => {
  return (
    <div className="container">
      <footer>
        <div className="contents">
          <div className="item">
            <div className="blog">Blog</div>
            <Link to="/about/">About</Link>
            <Link to="/introduce/">Introduce</Link>
          </div>

          <div className="item">
            <div className="products">Products</div>
            <Link to="/design/">Design</Link>
            <Link to="/code/">Code</Link>
            <Link to="/activity/">Activity</Link>
          </div>

          <div className="item">
            <div className="policy">Policy</div>
            <Link to="/terms/">Term of Service</Link>
            <Link to="/policy/privacy/">Privacy policy</Link>
          </div>
        </div>

        <div className="sns">
          <a
            className="twitter"
            href="https://twitter.com/onesword0618"
            aria-label="twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            className="facebook"
            href="https://www.facebook.com/profile.php?id=100023464906058"
            aria-label="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>

        <div className="copyright">
          <p>
            © {new Date().getFullYear()}, Build with{' '}
            <a href="https://www.gatsbyjs.com">Gatsby</a>.
          </p>
          <p>
            <a href="https://ja.gravatar.com/aoakuablog">onesword0618</a> All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
