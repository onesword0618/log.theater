/**
 * Blog Common Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { HeaderComponentQuery } from '@graphql-types';

/**
 * Header Component Parts.
 *
 * @returns {React.ReactElement} components
 */
export const Header: React.FC = (): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const fetchHeader = useStaticQuery<HeaderComponentQuery>(
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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const title: string = fetchHeader.site?.siteMetadata?.title as string;

  return (
    <header>
      <h1 className="title">
        <Link to="/">{title}</Link>
      </h1>
    </header>
  );
};
