/**
 * @file The Document Metadata elements.
 * @see https://html.spec.whatwg.org/multipage/semantics.html#the-head-element
 *
 * Support added in gatsby@4.19.0 -
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { ComponentType } from 'react';
import ogImage from '../../static/icon.png';
import { SiteMetadata, useSiteMetaData } from '../hooks/useSiteMetaData';

type Props = {
  title?: string;
};

/**
 * Head Component Part.
 * @param {Props} title page title
 * @returns {ComponentType} component
 */
export const Head: ComponentType<Props> = ({ title }) => {
  const siteMetaData: SiteMetadata = useSiteMetaData();
  return (
    <>
      <html lang="ja-JP" />
      <body />
      <title>{title === undefined ? siteMetaData.title : title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={siteMetaData.description} />
      <meta name="google-site-verification" content={siteMetaData.dnsTxtCode} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
      />
      <meta property="og:site_name" content={siteMetaData.title} />
      <meta property="og:title" content={siteMetaData.title} />
      <meta property="og:description" content={siteMetaData.description} />
      <meta property="og:url" content={siteMetaData.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteMetaData.locale} />
      <meta property="fb:app_id" content={siteMetaData.facebookApplicationId} />
      <meta property="og:image" content={siteMetaData.siteIcon} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={siteMetaData.title} />
      <meta name="twitter:description" content={siteMetaData.description} />
      <meta name="twitter:site" content={`@onesword0618`} />
      <meta
        name="twitter:image"
        content={`${siteMetaData.siteIcon}${ogImage}`}
      />
    </>
  );
};
