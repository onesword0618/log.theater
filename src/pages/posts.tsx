/**
 * Post Base Layout.
 * Posts Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PostsComponentQuery } from '@graphql-types';

/**
 * Post Layout Components Parts.
 *
 * @returns {React.ReactElement} components
 */
export const Posts: React.FC = (): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const fetchPosts = useStaticQuery<PostsComponentQuery>(
    graphql`
      query PostsComponent {
        allFile(filter: { name: { ne: "icon" } }) {
          nodes {
            name
          }
        }
      }
    `,
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const posts: Pick<File, 'name'>[] = fetchPosts.allFile.nodes as Pick<
    File,
    'name'
  >[];

  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
};
