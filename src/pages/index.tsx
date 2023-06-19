/**
 * @file Application Entry Point File.
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { graphql, PageProps } from 'gatsby';
import { Article } from '../components/article';
import { HeadFactory } from '../components/head';
import { Layout } from '../components/layout';
import { useSiteMetaData } from '../hooks/useSiteMetaData';
import { container, content } from './index.module.css';

const Application = ({ data }: PageProps<Queries.ArticlesQuery>) => {
  return (
    <Layout metaData={useSiteMetaData()}>
      <main>
        <section className={container}>
          <h2>Articles</h2>
          <div className={content}>
            {data.allMarkdownRemark.nodes.map((article) => (
              <Article content={article} key={article.id} />
            ))}
          </div>
        </section>
      </main>
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
        cover {
          childImageSharp {
            gatsbyImageData(width: 300, height: 300, placeholder: BLURRED)
          }
        }
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
