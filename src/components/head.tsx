/**
 * Site Meta Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadata } from '@types';
import ogImage from '../../static/icon.png';

type Props = {
  metaData: SiteMetadata;
};

/**
 * Head Component Part.
 *
 * @param {Props} props meta
 * @returns {React.FC} component
 */
export const Head: React.FC<Props> = (props: Props) => {
  const { metaData } = props;

  const fetchMeta = useStaticQuery<GatsbyTypes.MetaQuery>(
    graphql`
      query Meta {
        site {
          siteMetadata {
            locale
            defaultTitle: title
            author {
              name
              excerpt
            }
            defaultDescription: description
            siteUrl
            facebookApplicationId
            social {
              twitter
              github
            }
            siteIcon
          }
        }
      }
    `,
  );

  const { site } = fetchMeta;
  if (site === undefined || site === null) {
    throw new Error('no site contents');
  }

  if (site.siteMetadata === undefined || site.siteMetadata === null) {
    throw new Error('no siteMetadata contents');
  }

  if (
    site.siteMetadata.defaultTitle === null ||
    site.siteMetadata.defaultDescription === null ||
    site.siteMetadata.locale === null ||
    site.siteMetadata.facebookApplicationId === null ||
    site.siteMetadata.siteIcon === null ||
    site.siteMetadata.siteUrl === null
  ) {
    throw new Error('no contents');
  }

  const seo = {
    title: metaData.title || site.siteMetadata.defaultTitle,
    description: metaData.description || site.siteMetadata.defaultDescription,
    url:
      metaData.siteUrl !== site.siteMetadata.siteUrl
        ? `${site.siteMetadata.siteUrl}${metaData.siteUrl}`
        : site.siteMetadata.siteUrl,
    locale: site.siteMetadata.locale,
    facebookApplicationId: site.siteMetadata.facebookApplicationId,
    icon: `${metaData.siteUrl}${ogImage}`,
  };

  return (
    <Helmet defer={false} title={seo.title}>
      <html lang="ja-JP" />
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta
        name="google-site-verification"
        content="7tocuDO8uh5y587N2xWlBEsThHfZCc5V-iyItl3s2-k"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
      />
      {/* TODO author */}
      <meta property="og:site_name" content={site.siteMetadata.defaultTitle} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={seo.locale} />
      <meta property="fb:app_id" content={seo.facebookApplicationId} />
      <meta property="og:image" content={seo.icon} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:site" content={`@onesword0618`} />
      <meta name="twitter:image" content={seo.icon} />
    </Helmet>
  );
};
