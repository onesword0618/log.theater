/**
 * @file The header element.
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-header-element
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { Link } from 'gatsby';
import { ComponentType, createElement } from 'react';
import { SiteMetadata, useSiteMetaData } from '../hooks/useSiteMetaData';
import { header } from './header.module.css';

type Props = {
  url: string;
};

/**
 * Header Component Part.
 * @param {Props} url page url
 * @returns {ComponentType} component
 */
export const Header: ComponentType<Props> = ({ url }) => {
  const siteMetadata: SiteMetadata = useSiteMetaData();
  return (
    <header className={header}>
      {createElement(
        url === `/` ? `h1` : `p`,
        {
          className: `title`,
        },
        [
          <Link key="link" to="/">
            {siteMetadata.title}
          </Link>,
        ],
      )}
    </header>
  );
};
