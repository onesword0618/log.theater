/**
 * Entry File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Link, PageProps } from 'gatsby';

/**
 * Entry List.
 *
 * @param {PageProps} data contents
 * @returns {React.FC} page
 */
const Entry: React.FC<PageProps<GatsbyTypes.EntriesQuery>> = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <div className="entry">
      {nodes.map(({ frontmatter, id }) => (
        <Link to={`${frontmatter?.path || '/'}`} key={id}>
          <article className="article">{frontmatter?.title}</article>
        </Link>
      ))}
    </div>
  );
};

export default Entry;
