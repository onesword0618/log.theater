/**
 * @file The article element.
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-article-element
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { Link } from 'gatsby';
import { ComponentType } from 'react';
import { Date } from './date';
import { Tag } from './tag';

type Content = {
  readonly id: string;
  readonly frontmatter: {
    readonly path: string | null;
    readonly created: string | null;
    readonly updated: string | null;
    readonly title: string | null;
    readonly author: string | null;
    readonly tags: readonly (string | null)[] | null;
    readonly published: boolean | null;
  } | null;
  readonly excerpt: string | null;
};

type Props = {
  content: Content;
};

/**
 * Article Component Part.
 * @param {{content: Content}} props content
 * @returns {ComponentType} component
 */
export const Article: ComponentType<Props> = ({ content }) => {
  if (
    !content ||
    !content.frontmatter ||
    !content.excerpt ||
    !content.frontmatter.tags
  ) {
    throw new Error('invalid content section.');
  }
  return (
    <div className="article-container">
      <h2 className="title">
        <Link to={`${content.frontmatter.path || '/'}`}>
          {content.frontmatter.title}
        </Link>
      </h2>

      <p className="tags icon-container">
        {content.frontmatter.tags.map(
          (tag, index) => tag !== null && <Tag name={tag} key={index} />,
        )}
      </p>

      <p className="date">
        <Date
          className={`created`}
          caption={`投稿日`}
          date={content.frontmatter.created}
        />
        <Date
          className={`updated`}
          caption={`更新日`}
          date={content.frontmatter.updated}
        />
      </p>

      <p>{content.excerpt}</p>
    </div>
  );
};
