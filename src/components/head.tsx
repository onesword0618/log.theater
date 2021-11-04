/**
 * Site Meta Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

type Props = {
  title?: string;
  description?: string;
  url?: string;
};

/**
 * Head Component Part.
 *
 * @param {Props} props meta
 * @returns {React.FC} component
 */
export const Head: React.FC<Props> = (props: Props) => {
  const { title, description, url } = props;

  const fetchMeta = useStaticQuery<GatsbyTypes.MetaQuery>(
    graphql`
      query Meta {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            locale
            facebookApplicationId
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
    site.siteMetadata.siteUrl === undefined ||
    site.siteMetadata.locale === undefined ||
    site.siteMetadata.facebookApplicationId === undefined
  ) {
    return null;
  }

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    locale,
    facebookApplicationId,
  } = site.siteMetadata;
  if (
    defaultTitle === null ||
    defaultDescription === null ||
    siteUrl === null ||
    locale === null ||
    facebookApplicationId === null
  ) {
    return null;
  }

  Head.defaultProps = {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
  };

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: url !== siteUrl ? `${siteUrl}${url}` : siteUrl,
    locale: locale,
    facebookApplicationId: facebookApplicationId,
  };

  return (
    <Helmet defer={false} title={seo.title}>
      <html lang="ja-JP" />
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
      />
      {/* TODO author */}
      <link rel="canonical" href={seo.url} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={seo.locale} />
      <meta property="fb:app_id" content={seo.facebookApplicationId} />
      <meta property="og:image" content="../images/icon.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:site" content={`@onesword0618`} />
      <meta name="twitter:image" content="../images/icon.png" />
    </Helmet>
  );
};
