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
  url?: string;
};

/**
 * Meta Component Parts.
 *
 * @param {Props} props meta
 * @returns {React.FC} component
 */
export const SEO: React.FC<Props> = (props: Props) => {
  const { title, description, url } = props;

  const fetchMeta = useStaticQuery<MetaQuery>(
    graphql`
      query Meta {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
          }
        }
      }
    `,
  );

  const { site } = fetchMeta;
  if (
    site === undefined ||
    site?.siteMetadata === undefined ||
    site?.siteMetadata?.defaultDescription === undefined ||
    site?.siteMetadata?.defaultTitle === undefined ||
    site.siteMetadata.siteUrl === undefined
  ) {
    return null;
  }

  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;
  if (
    defaultTitle === null ||
    defaultDescription === null ||
    siteUrl === null
  ) {
    return null;
  }

  SEO.defaultProps = {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
  };

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: url !== siteUrl ? `${siteUrl}${url}` : siteUrl,
  };

  return (
    <Helmet>
      <html lang="ja" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
};
