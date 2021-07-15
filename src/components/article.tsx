/**
 * Article Component.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Link } from 'gatsby';
import { MarkdownRemark } from '@types';
import { Tag } from './tag';

type Props = {
  content: MarkdownRemark;
};

/**
 * Article.
 *
 * @param {Props} content content
 * @returns {React.ReactElement} article
 */
export const Article: React.FC<Props> = ({
  content,
}: Props): React.ReactElement => {
  return (
    <div className="article_container">
      <h2 className="title">
        <Link to={`${content.frontmatter.path || '/'}`}>
          {content.frontmatter.title}
        </Link>
      </h2>

      <p className="tags icon_container">
        {content.frontmatter.tags.map((tag, index) => (
          <Tag name={tag} key={index} />
        ))}
      </p>

      <p className="date">
        投稿日 <time>{content.frontmatter.entrytDate}</time> 更新日{' '}
        <time>{content.frontmatter.updateDate}</time>
      </p>

      <p>{content.excerpt}</p>
    </div>
  );
};
