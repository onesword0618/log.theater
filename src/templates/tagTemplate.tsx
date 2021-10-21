import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components/layout';

type Props = {
  data: GatsbyTypes.TagsQuery;
};

const TagTemplate: React.FC<Props> = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="tag">
        {nodes.map(({ frontmatter, id }) => (
          <Link to={`${frontmatter?.path || '/'}`} key={id}>
            <article className="article">{frontmatter?.title}</article>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Tags($tag: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___created }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          path
        }
      }
    }
  }
`;

/**
 * Tag Template.
 */
export default TagTemplate;
