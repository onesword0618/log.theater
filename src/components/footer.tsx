/**
 * Blog Common Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
// eslint-disable-next-line import/order
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
              <li className="footer_list">
                <Link to="/about/" className="footer_link">
                  About
                </Link>
              </li>
              <li className="footer_list">
                <Link to="/introduce/" className="footer_link">
                  Introduce
                </Link>
              </li>
              <li className="footer_list">
                <Link to="/activity/" className="footer_link">
                  Activity
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer_item">
            <p className="footer_item_header">Policy</p>
            <ul className="footer_item_unordered_list">
              <li className="footer_list">
                <Link to="/terms/" className="footer_link">
                  Term of Service
                </Link>
              </li>
              <li className="footer_list">
                <Link to="/policy/privacy/" className="footer_link">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_sns">
          <a
            className="icon"
            href="https://twitter.com/onesword0618"
            aria-label="twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size={'2x'} />
          </a>

          <a
            className="icon"
            href="https://www.facebook.com/profile.php?id=100023464906058"
            aria-label="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size={'2x'} />
          </a>

          <a
            className="icon"
            href="https://github.com/onesword0618"
            aria-label="github"
          >
            <FontAwesomeIcon icon={faGithub} size={'2x'} />
          </a>
        </div>

        <div className="copyright">
          <small>
            © {new Date().getFullYear()},{' '}
            <a href="https://ja.gravatar.com/onesword0618">onesword0618</a>
          </small>
        </div>
      </footer>
    </div>
  );
};
