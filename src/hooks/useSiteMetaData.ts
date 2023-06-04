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
  const { site }: Queries.SiteMetaDataQuery = useStaticQuery(
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

  const metadata = site?.siteMetadata;
  if (
    !metadata?.title ||
    !metadata?.locale ||
    !metadata?.author ||
    !metadata?.author.name ||
    !metadata?.author.excerpt ||
    !metadata?.description ||
    !metadata?.siteUrl ||
    !metadata?.email ||
    !metadata?.facebookApplicationId ||
    !metadata?.dnsTxtCode ||
    !metadata?.social ||
    !metadata?.social.github ||
    !metadata?.social.twitter ||
    !metadata?.siteIcon
  ) {
    throw new Error('siteMetadata source is invalid.');
  }

  const siteMetadata: SiteMetadata = {
    title: metadata.title,
    locale: metadata.locale,
    author: {
      name: metadata.author.name,
      excerpt: metadata.author.excerpt,
    },
    description: metadata.description,
    siteUrl: metadata.siteUrl,
    email: metadata.email,
    facebookApplicationId: metadata.facebookApplicationId,
    dnsTxtCode: metadata.dnsTxtCode,
    social: {
      github: metadata.social.github,
      twitter: metadata.social.twitter,
    },
    siteIcon: metadata.siteIcon,
  };
  return siteMetadata;
}
