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
import {
  faFacebook,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
library.add(faFacebook, faTwitter, faGithub);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

/**
 * Footer Component Part.
 *
 * @returns {React.ReactElement} component
 */
export const Footer: React.FC = (): React.ReactElement => {
  return (
    <div className="footer_container">
      <footer>
        <div className="footer_contents">
          <div className="footer_item">
            <p className="footer_item_header">Blog</p>
            <ul className="footer_item_unordered_list">
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/introduce/">Introduce</Link>
              </li>
              <li>
                <Link to="/activity/">Activity</Link>
              </li>
            </ul>
          </div>

          <div className="footer_item">
            <p className="footer_item_header">Policy</p>
            <ul className="footer_item_unordered_list">
              <li>
                <Link to="/terms/">Term of Service</Link>
              </li>
              <li>
                <Link to="/policy/privacy/">Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_sns">
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

          <a
            className="github"
            href="https://github.com/onesword0618"
            aria-label="github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="copyright">
          <small>
            <p>
              © {new Date().getFullYear()}, Build with{' '}
              <a href="https://www.gatsbyjs.com">Gatsby</a>.
            </p>
            <p>
              <a href="https://ja.gravatar.com/onesword0618">onesword0618</a>
            </p>
          </small>
        </div>
      </footer>
    </div>
  );
};
