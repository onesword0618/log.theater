/**
 * @file The footer element.
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-footer-element
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */

import { Link } from 'gatsby';
import { ComponentType } from 'react';
import { Icon } from './icon';

/**
 * Footer Component Part.
 * @returns {ComponentType} component
 */
export const Footer: ComponentType = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-contents">
          <div className="footer-item">
            <p className="footer-item-header">Blog</p>
            <ul className="footer-item-unordered-list">
              <li className="footer-list">
                <Link to="/about/" className="footer-link">
                  About
                </Link>
              </li>
              <li className="footer-list">
                <Link to="/introduce/" className="footer-link">
                  Introduce
                </Link>
              </li>
              <li className="footer-list">
                <Link to="/activity/" className="footer-link">
                  Activity
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <p className="footer-item-header">Policy</p>
            <ul className="footer-item-unordered-list">
              <li className="footer-list">
                <Link to="/terms/" className="footer-link">
                  Term of Service
                </Link>
              </li>
              <li className="footer-list">
                <Link to="/policy/privacy/" className="footer-link">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-sns">
          <a
            className="icon"
            href="https://twitter.com/onesword0618"
            aria-label="twitter"
          >
            <Icon name={`twitter`} />
          </a>

          <a
            className="icon"
            href="https://www.facebook.com/profile.php?id=100023464906058"
            aria-label="facebook"
          >
            <Icon name={`facebook`} />
          </a>

          <a
            className="icon"
            href="https://github.com/onesword0618"
            aria-label="github"
          >
            <Icon name={`github`} />
          </a>
        </div>

        <div className="copyright">
          <small className="year">
            © {new Date().getFullYear()},
            <a className="creator" href="https://ja.gravatar.com/onesword0618">
              onesword0618
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
};
