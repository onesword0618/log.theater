/**
 * Entry Page Template.
 * @see https://react.dev/reference/react-dom/components/common#common-props
 * @see https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-aside-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */

import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import { Date } from '../components/date';
import { HeadFactory } from '../components/head';
import { Layout } from '../components/layout';
import { Tag } from '../components/tag';
import { useSiteMetaData } from '../hooks/useSiteMetaData';
import {
  container,
  date,
  icon,
  pagenation,
} from '../templates/entryTemplate.module.css';
import { ContentPageContext } from 'gatsby-node';

const EntryTemplate = ({
  data,
  pageContext,
}: PageProps<Queries.TemplateContentsQuery, ContentPageContext>) => {
  if (!data.markdownRemark) {
    throw new Error(`Need markdown content.`);
  }

  if (!data.markdownRemark.frontmatter) {
    throw new Error(`Need markdown frontmatter content.`);
  }

  if (
    !data.markdownRemark.frontmatter.path ||
    !data.markdownRemark.frontmatter.title ||
    !data.markdownRemark.frontmatter.created ||
    !data.markdownRemark.frontmatter.updated ||
    !data.markdownRemark.frontmatter.author ||
    !data.markdownRemark.frontmatter.published ||
    !data.markdownRemark.frontmatter.cover ||
    !data.markdownRemark.frontmatter.cover.childImageSharp ||
    !data.markdownRemark.excerpt ||
    !data.markdownRemark.html
  ) {
    throw new Error(`Need markdown item content.`);
  }

  if (!data.markdownRemark.frontmatter.tags) {
    throw new Error(`Need tags`);
  }
  const tags: string[] = [];
  for (const tag of data.markdownRemark.frontmatter.tags) {
    if (tag !== null) {
      tags.push(tag);
    }
  }

  const thumbnail = getImage(
    data.markdownRemark.frontmatter.cover.childImageSharp,
  );
  if (thumbnail === undefined) {
    throw new Error('no image');
  }

  const ogpImage = getSrc(
    data.markdownRemark.frontmatter.cover.childImageSharp,
  );
  if (ogpImage === undefined) {
    throw new Error('image path should be');
  }

  return (
    <Layout metaData={useSiteMetaData()}>
      <article className={container}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>

        <div className={date}>
          <Date
            className="entryDate"
            caption="公開日:"
            date={data.markdownRemark.frontmatter.created}
          />
          <Date
            className="updateDate"
            caption="更新日:"
            date={data.markdownRemark.frontmatter.updated}
          />
        </div>

        <div className={icon}>
          {tags.map((current, index) => (
            <Tag name={current} key={index} />
          ))}
        </div>

        <GatsbyImage
          className={`image`}
          imgClassName="visual"
          image={thumbnail}
          alt="thumbnail"
          loading="eager"
        />

        <div
          className={`markdown-body`}
          dangerouslySetInnerHTML={{
            __html: `${data.markdownRemark.html}`,
          }}
        />
      </article>
      {/** TODO ここをコンポーネントに切り出す */}
      <section className={pagenation}>
        {pageContext.previous?.frontmatter?.path && (
          <Link
            to={pageContext.previous.frontmatter.path}
            className="icon-heading"
          >
            {pageContext.previous.frontmatter?.title}
          </Link>
        )}

        {pageContext.next?.frontmatter?.path && (
          <Link to={pageContext.next.frontmatter.path} className="icon-heading">
            {pageContext.next.frontmatter?.title}
          </Link>
        )}
      </section>
    </Layout>
  );
};

/**
 * Entry Detail Template.
 */
export default EntryTemplate;

/**
 * Entry Detail Template Content.
 */
export const entryQuery = graphql`
  query TemplateContents($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        path
        created
        updated
        title
        cover {
          childImageSharp {
            gatsbyImageData(width: 1280, height: 700)
          }
        }
        author
        tags
        published
      }
      html
      excerpt(format: PLAIN, truncate: true)
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.TemplateContentsQuery>) => {
  if (!data.markdownRemark) {
    throw new Error(`Need markdown content.`);
  }

  if (!data.markdownRemark.frontmatter) {
    throw new Error(`Need markdown frontmatter content.`);
  }

  if (
    !data.markdownRemark.frontmatter.title ||
    !data.markdownRemark.frontmatter.created ||
    !data.markdownRemark.frontmatter.updated ||
    !data.markdownRemark.frontmatter.cover ||
    !data.markdownRemark.frontmatter.cover.childImageSharp ||
    !data.markdownRemark.excerpt
  ) {
    throw new Error(`Need markdown item content.`);
  }

  const thumbnail = getImage(
    data.markdownRemark.frontmatter.cover.childImageSharp,
  );
  if (thumbnail === undefined) {
    throw new Error('no image');
  }

  const ogpImage = getSrc(
    data.markdownRemark.frontmatter.cover.childImageSharp,
  );
  if (ogpImage === undefined) {
    throw new Error('image path should be');
  }

  <HeadFactory
    type={`article`}
    title={data.markdownRemark.frontmatter.title}
    description={data.markdownRemark.excerpt}
    created={data.markdownRemark.frontmatter.created}
    updated={data.markdownRemark.frontmatter.updated}
    image={ogpImage}
    metaData={useSiteMetaData()}
  />;
};
