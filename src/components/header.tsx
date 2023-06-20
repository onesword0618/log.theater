/**
 * @file The header element.
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-header-element
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { Link } from 'gatsby';
import { ComponentType } from 'react';
import { SiteMetadata } from '../hooks/useSiteMetaData';
import { header } from './header.module.css';

type Props = {
  metaData: SiteMetadata;
};

/**
 * Header Component Part.
 * @param {{metaData:SiteMetadata}} siteMetadata site meta data
 * @returns {ComponentType} component
 */
export const Header: ComponentType<Props> = ({ metaData }) => {
  return (
    <header className={header}>
      <h1>
        <Link to="/">{metaData.title}</Link>
      </h1>
    </header>
  );
};
