/**
 * Contetnt Template Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faClock,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import { BlogContentQuery } from '../type';

/**
 *  Blog Contetnt Template Component.
 *
 * @param {BlogContentQuery} query contents
 * @returns {React.ReactElement} components
 */
export default function BlogTemplate(
  query: BlogContentQuery,
): React.ReactElement {
  const { data } = query.pageResources.json;
  return (
    <Layout>
      <div className="container">
        <article className="entry">
          <h1>{data.markdownRemark?.frontmatter?.title}</h1>
          <aside className="meta">
            <time dateTime={data.markdownRemark?.frontmatter?.entrytDate}>
              <FontAwesomeIcon icon={faClock} />
              <i className="clock">
                {' '}
                entry {data.markdownRemark?.frontmatter?.entrytDate}
              </i>
            </time>

            <time dateTime={data.markdownRemark?.frontmatter?.updated}>
              <FontAwesomeIcon icon={faClock} />
              <i className="clock">
                {' '}
                update {data.markdownRemark?.frontmatter?.updated}
              </i>
            </time>

            <div className="category">
              <FontAwesomeIcon icon={faFolderOpen} />
              <ul>
                {data.tags.group.map((current, index) => (
                  <li className={`${current.tag || 'none'}`} key={index}>
                    {current.tag}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: `${data.markdownRemark?.html || 'no content'}`,
            }}
          />

          <ul className="link">
            <li className="preview">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Preview Post</span>
            </li>

            <li className="next">
              <FontAwesomeIcon icon={faChevronRight} />
              <span>Next Post</span>
            </li>
          </ul>
        </article>
      </div>
    </Layout>
  );
}

/**
 * Template Contents,
 */
export const query = graphql`
  query TemplateContents($id: String) {
    markdownRemark(id: { eq: $id }) {
      excerpt(format: PLAIN, truncate: true)
      frontmatter {
        entrytDate: created(formatString: "YYYY.MM.DD")
        updated
        title
      }
      id
      html
    }
    tags: allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        tag: fieldValue
      }
    }
  }
`;
