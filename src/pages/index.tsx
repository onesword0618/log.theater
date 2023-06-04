/**
 * @file Application Entry Point File.
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { graphql, PageProps } from 'gatsby';
import { Article } from '../components/article';
import { HeadFactory } from '../components/head';
import { Layout } from '../components/layout';
import { useSiteMetaData } from '../hooks/useSiteMetaData';

const Application = ({ data, location }: PageProps<Queries.ArticlesQuery>) => {
  const articles = data.allMarkdownRemark.nodes;
  return (
    <Layout pathName={location.pathname}>
      <h2>Articles</h2>
      {articles.map((content) => (
        <Article content={content} key={content.id} />
      ))}
    </Layout>
  );
};

export default Application;

/**
 * Building Entry Pages.
 */
export const pageQuery = graphql`
query Articles {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(../contents)/.*\\.md$/"}}
    sort: {frontmatter: {created: DESC}}
  ) {
    nodes {
      id
      frontmatter {
        path
        created
        updated
        title
        author
        tags
        published
      }
      excerpt(format: PLAIN, truncate: true, pruneLength: 40)
    }
  }
}
`;

export const Head = () => (
  <HeadFactory
    type={`website`}
    title={`log.theater`}
    metaData={useSiteMetaData()}
  />
);
