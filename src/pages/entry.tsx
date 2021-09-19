/**
 * Entry Point File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Link } from 'gatsby';

/**
 * Entry List.
 *
 * @param root0 contents
 * @param root0.data contents
 * @returns {React.ReactElement} page
 */
export default function Entry({ data }): React.ReactElement {
  return (
    <div className="entry">
      {data.allMarkdownRemark.nodes.map(({ frontmatter, id }) => (
        <Link to={`${frontmatter.path || 'none'}`} key={id}>
          <article className="article">{frontmatter.title}</article>
        </Link>
      ))}
    </div>
  );
}
