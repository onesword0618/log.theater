/**
 * @file The footer element.
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-footer-element
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { Link } from 'gatsby';
import { ComponentType } from 'react';
import { container, item, header, sns, copyright } from './footer.module.css';
import { Icon } from './icon';

/**
 * Footer Component Part.
 * @returns {ComponentType} component
 */
export const Footer: ComponentType = () => {
  return (
    <footer className={container}>
      <div className={item}>
        <p className={header}>Blog</p>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/introduce">Introduce</Link>
          </li>
          <li>
            <Link to="/activity">Activity</Link>
          </li>
        </ul>

        <p className={header}>Policy</p>
        <ul>
          <li>
            <Link to="/terms" aria-label={`term-of-service`}>
              Term of Service
            </Link>
          </li>
          <li>
            <Link to="/privacy/policy" aria-label={`privacy-policy`}>
              Privacy policy
            </Link>
          </li>
        </ul>
      </div>

      <div className={sns}>
        <Link to="https://twitter.com/onesword0618" aria-label={`twitter`}>
          <Icon name={`twitter`} />
        </Link>

        <Link
          to="https://www.facebook.com/profile.php?id=100023464906058"
          aria-label={`facebook`}
        >
          <Icon name={`facebook`} />
        </Link>

        <Link to="https://github.com/onesword0618" aria-label={`github`}>
          <Icon name={`github`} />
        </Link>
      </div>

      <small className={copyright}>
        © {new Date().getFullYear()},
        <Link to="https://ja.gravatar.com/onesword0618" aria-label={`creator`}>
          onesword0618
        </Link>
      </small>
    </footer>
  );
};
