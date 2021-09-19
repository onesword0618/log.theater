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
 * @param {Props} props contents
 * @returns {React.ReactElement} page
 */
export default function Entry(props: Props): React.ReactElement {
  const { content } = props;
  return (
    <div className="entry">
      {content.allMarkdownRemark.nodes.map(
        ({ frontmatter, id }) =>
          frontmatter && (
            <Link to={`${frontmatter.path || 'none'}`} key={id}>
              <article className="article">{frontmatter.title}</article>
            </Link>
          ),
      )}
    </div>
  );
}
