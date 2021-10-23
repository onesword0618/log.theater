/**
 * Blog Common Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import './header.css';

/**
 * Header Component Part.
 *
 * @returns {React.ReactElement} component
 */
export const Header: React.FC = (): React.ReactElement => {
  const fetchHeader = useStaticQuery<GatsbyTypes.HeaderComponentQuery>(
    graphql`
      query HeaderComponent {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  let title = `No Title`;
  const { site } = fetchHeader;
  if (
    site === undefined ||
    site?.siteMetadata === undefined ||
    site?.siteMetadata?.title === undefined
  ) {
    return <h1>{title}</h1>;
  }

  if (site.siteMetadata.title !== null) {
    title = site.siteMetadata.title;
  }

  return (
    <header>
      <h1 className="title">
        <Link to="/">{title}</Link>
      </h1>
    </header>
  );
};
