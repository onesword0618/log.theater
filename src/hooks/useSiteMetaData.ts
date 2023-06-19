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
  // all required fields.
  if (
    !metadata?.title ||
    !metadata?.locale ||
    !metadata?.author ||
    !metadata?.author.name ||
    !metadata?.author.excerpt ||
    !metadata?.description ||
    !metadata?.siteUrl ||
    !metadata?.email ||
    !metadata?.social ||
    !metadata?.social.github ||
    !metadata?.social.twitter ||
    !metadata?.siteIcon
  ) {
    throw new Error(`checked ! gatsby-config.ts. Incomplete item.`);
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
    social: {
      github: metadata.social.github,
      twitter: metadata.social.twitter,
    },
    siteIcon: metadata.siteIcon,
  };
  return siteMetadata;
}
