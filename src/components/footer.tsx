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
import {
  container,
  contents,
  item,
  header,
  sns,
  ul,
  list,
  link,
  creator,
  year,
} from './footer.module.css';
import { Icon } from './icon';

/**
 * Footer Component Part.
 * @returns {ComponentType} component
 */
export const Footer: ComponentType = () => {
  return (
    <footer className={container}>
      <div className={contents}>
        <div className={item}>
          <p className={header}>Blog</p>
          <ul className={ul}>
            <li className={list}>
              <Link to="/about/" className={link}>
                About
              </Link>
            </li>
            <li className={list}>
              <Link to="/introduce/" className={link}>
                Introduce
              </Link>
            </li>
            <li className={list}>
              <Link to="/activity/" className={link}>
                Activity
              </Link>
            </li>
          </ul>
        </div>

        <div className={item}>
          <p className={header}>Policy</p>
          <ul className={ul}>
            <li className={list}>
              <Link to="/terms/" className={link}>
                Term of Service
              </Link>
            </li>
            <li className={list}>
              <Link to="/policy/privacy/" className={link}>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={sns}>
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
        <small className={year}>
          © {new Date().getFullYear()},
          <a className={creator} href="https://ja.gravatar.com/onesword0618">
            onesword0618
          </a>
        </small>
      </div>
    </footer>
  );
};
