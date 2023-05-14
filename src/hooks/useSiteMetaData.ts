import { useStaticQuery, graphql } from 'gatsby';

export type SiteMetadata = {
  title: string;
  locale: string;
  author: {
    name: string;
    excerpt: string;
  };
  description: string;
  siteUrl: string;
  email: string;
  facebookApplicationId: string;
  dnsTxtCode: string;
  social: {
    twitter: string;
    github: string;
  };
  siteIcon: string;
};

/**
 * Site Metadata query.
 * @returns {SiteMetadata} execute query result.
 */
export function useSiteMetaData(): SiteMetadata {
  const result = useStaticQuery<Queries.SiteMetaDataQuery['site']>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            locale
            author {
              name
              excerpt
            }
            description
            siteUrl
            email
            facebookApplicationId
            dnsTxtCode
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

  if (!result || !result.siteMetadata) {
    throw new Error('not found contents.');
  }

  const metaData = result.siteMetadata;
  if (
    !metaData.title ||
    !metaData.locale ||
    !metaData.author ||
    !metaData.author.name ||
    !metaData.author.excerpt ||
    !metaData.description ||
    !metaData.siteUrl ||
    !metaData.email ||
    !metaData.facebookApplicationId ||
    !metaData.dnsTxtCode ||
    !metaData.social ||
    !metaData.social.github ||
    !metaData.social.twitter ||
    !metaData.siteIcon
  ) {
    throw new Error('data source is invalid.');
  }

  const siteMetaData: SiteMetadata = {
    title: metaData.title,
    locale: metaData.locale,
    author: {
      name: metaData.author.name,
      excerpt: metaData.author.excerpt,
    },
    description: metaData.description,
    siteUrl: metaData.siteUrl,
    email: metaData.email,
    facebookApplicationId: metaData.facebookApplicationId,
    dnsTxtCode: metaData.dnsTxtCode,
    social: {
      github: metaData.social.github,
      twitter: metaData.social.twitter,
    },
    siteIcon: metaData.siteIcon,
  };
  return siteMetaData;
}
