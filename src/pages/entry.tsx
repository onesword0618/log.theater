/**
 * Entry Point File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Link } from 'gatsby';
import { EntriesQuery } from '@graphql-types';

type Props = {
  content: EntriesQuery;
};

/**
 * Entry List.
 *
 * @param {EntriesQuery} props contents
 * @returns {React.FC} page
 */
const Entry: React.FC<Props> = ({ content }) => {
  return (
    <div className="entry">
      {content.allMarkdownRemark.nodes.map(({ frontmatter, id }) => (
        <Link to={`${frontmatter?.path || 'none'}`} key={id}>
          <article className="article">{frontmatter?.title}</article>
        </Link>
      ))}
    </div>
  );
};

export default Entry;
