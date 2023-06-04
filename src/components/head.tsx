/**
 * @file The Document Metadata elements.
 * @see https://date-fns.org/v2.30.0/docs/Locale
 * @see https://date-fns.org/v2.30.0/docs/parse
 * @see https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
 * @see https://html.spec.whatwg.org/multipage/semantics.html#the-head-element
 * @see https://html.spec.whatwg.org/multipage/semantics.html#the-title-element
 * @see https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element
 * @see https://ogp.me/
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-body-element
 *
 * Support added in gatsby@4.19.0 -
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { parse } from 'date-fns';
import ja from 'date-fns/locale/ja';
import { ComponentType } from 'react';
import { SiteMetadata } from '../hooks/useSiteMetaData';

type Props = {
  title?: string;
  description?: string;
  metaData: SiteMetadata;
  created?: string;
  updated?: string;
  image?: string;
};

/**
 * Head Component Part.
 * @param {Props} props meta data compose
 * @returns {ComponentType} component
 */
export const Head: ComponentType<Props> = ({
  title,
  description,
  metaData,
  image,
  created,
  updated,
}) => {
  const published = !created
    ? new Date(`July 16 2021`).toISOString()
    : parse(created, `yyyy-MM-dd`, new Date(), { locale: ja });
  const modified = !updated
    ? new Date().toISOString()
    : parse(updated, `yyyy-MM-dd`, new Date(), { locale: ja });

  return (
    <>
      <html lang="ja-JP" />
      <body />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
      />
      <meta
        name="description"
        content={description !== undefined ? description : metaData.description}
      />
      <meta property="og:site_name" content={metaData.title} />
      <meta property="og:type" content={`blog`} />
      <meta property="og:locale" content={metaData.locale} />
      <meta
        property="og:title"
        content={title !== undefined ? title : metaData.title}
      />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={`${metaData.siteUrl}${image}`} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="og:image:alt" content="thumbnail" />
      <meta property="article:published_time" content={`${published}`} />
      <meta property="article:modified_time" content={`${modified}`} />
      <meta property="article:author" content={metaData.author.name} />
      <meta property="article:section" content={`Technology`} />
      <meta property="og:article:tag" content={`blog`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metaData.title} />
      <meta name="twitter:creator" content={metaData.author.name} />
      <meta
        name="twitter:title"
        content={title !== undefined ? title : metaData.title}
      />
      <meta name="twitter:description" content={metaData.description} />
      <meta
        name="twitter:image"
        content={
          image !== undefined
            ? `${metaData.siteUrl}${image}`
            : metaData.siteIcon
        }
      />
      <meta name="twitter:image:alt" content={`site icon`} />
      <meta property="fb:app_id" content={metaData.facebookApplicationId} />
      <meta name="google-site-verification" content={metaData.dnsTxtCode} />
    </>
  );
};
