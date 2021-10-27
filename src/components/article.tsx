/**
 * Entry File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Link } from 'gatsby';
import { MarkdownRemark } from '@types';

type Props = {
  content: MarkdownRemark;
};

/**
 * Entry List.
 *
 * @param {Props} content contents
 * @returns {React.ReactElement} page
 */
export const Article: React.FC<Props> = ({
  content,
}: Props): React.ReactElement => {
  return (
    <div className="entry">
      <Link to={`${content.frontmatter.path || '/'}`}>
        <article className="article">{content.frontmatter.title}</article>
      </Link>
    </div>
  );
};
