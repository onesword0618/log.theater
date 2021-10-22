/**
 * Entry File.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Link } from 'gatsby';

type Props = {
  contents: GatsbyTypes.EntriesQuery;
};

/**
 * Entry List.
 *
 * @param {Props} contents contents
 * @returns {React.ReactElement} page
 */
export const Entry: React.FC<Props> = ({
  contents,
}: Props): React.ReactElement => {
  const { nodes } = contents.allMarkdownRemark;
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
