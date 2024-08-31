/**
 * Tag  Page Template.
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { graphql, PageProps } from 'gatsby';
import { Article } from '../components/article';
import { HeadFactory } from '../components/head';
import { Layout } from '../components/layout';
import { useSiteMetaData } from '../hooks/useSiteMetaData';
import { container, content } from './tagTemplate.module.css';

const TagTemplate = ({ data }: PageProps<Queries.TagContentsQuery>) => {
  return (
    <Layout metaData={useSiteMetaData()}>
      <main>
        <section className={container}>
          <h2>Category</h2>
          <div className={content}>
            {data.allMarkdownRemark.nodes.map(
              (article) =>
                article !== null && (
                  <Article content={article} key={article.id} />
                ),
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

/**
 * Tag Template.
 */
export default TagTemplate;

/**
 * Template Tag Contents.
 */
export const tagQuery = graphql`
  query TagContents($tag: String) {
    allMarkdownRemark(
      sort: { frontmatter: { created: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
              gatsbyImageData(width: 700, height: 300, placeholder: BLURRED)
            }
          }
        }
        excerpt(format: PLAIN, truncate: true, pruneLength: 40)
      }
    }
  }
`;

export const Head = () => (
  <HeadFactory type={`website`} metaData={useSiteMetaData()} />
);
