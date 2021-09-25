/**
 * Site Meta Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { MetaQuery } from '@graphql-types';

type Props = {
  title?: string;
  description?: string;
};

/**
 * Meta Component Parts.
 *
 * @param {Props} props meta
 * @returns {React.FC} components
 */
export const SEO: React.FC<Props> = (props: Props) => {
  const { title, description } = props;

  const fetchMeta = useStaticQuery<MetaQuery>(
    graphql`
      query Meta {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
          }
        }
      }
    `,
  );

  const { defaultTitle, defaultDescription } = fetchMeta.site?.siteMetadata;

  SEO.defaultProps = {
    title: defaultTitle,
    description: defaultDescription,
  };

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet>
      <html lang="ja" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet>
  );
};
