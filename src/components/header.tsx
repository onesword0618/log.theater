/**
 * Blog Common Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';

type Props = {
  url: string;
};

/**
 * Header Component Part.
 * @param {Props} url place
 * @returns {React.ReactElement} component
 */
export const Header: React.FC<Props> = ({ url }: Props): React.ReactElement => {
  const fetchHeader = useStaticQuery(
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

  const metaData = fetchHeader.site?.siteMetadata;
  return (
    <header>
      {React.createElement(
        url === `/` ? `h1` : `p`,
        {
          className: `title`,
        },
        [
          <Link key="link" to="/">
            {metaData?.title}
          </Link>,
        ],
      )}
    </header>
  );
};
