/**
 * @file The header element.
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-header-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { Link } from 'gatsby';
import { ComponentType, createElement } from 'react';
import { SiteMetadata, useSiteMetaData } from 'src/hooks/useSiteMetaData';

type Props = {
  url: string;
};

/**
 * Header Component Part.
 * @param {Props} url page url
 * @returns {ComponentType} component
 */
export const Header: ComponentType<Props> = ({ url }) => {
  const siteMetaData: SiteMetadata = useSiteMetaData();
  return (
    <header>
      {createElement(
        url === `/` ? `h1` : `p`,
        {
          className: `title`,
        },
        [
          <Link key="link" to="/">
            {siteMetaData.title}
          </Link>,
        ],
      )}
    </header>
  );
};
