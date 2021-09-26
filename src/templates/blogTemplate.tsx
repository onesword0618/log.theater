/**
 * Contetnt Template Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';
import { graphql } from 'gatsby';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import { TemplateContentsQuery } from '@graphql-types';
import { Date } from '../components/date';
import { SEO } from '../components/seo';

type Props = {
  data: TemplateContentsQuery;
};

/**
 *  Blog Contetnt Template Component.
 *
 * @param {TemplateContentsQuery} data contents
 * @returns {React.FC} component
 */
const Template: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data;
  if (
    markdownRemark === undefined ||
    markdownRemark?.frontmatter === undefined ||
    markdownRemark.frontmatter?.entrytDate === undefined ||
    markdownRemark.frontmatter?.updateDate === undefined ||
    markdownRemark.html === undefined
  ) {
    return <Layout> No Content </Layout>;
  }

  const { frontmatter, html } = markdownRemark;
  let title = `No Post Title`;
  if (frontmatter.title !== undefined && frontmatter.title !== null) {
    title = frontmatter.title;
  }

  return (
    <Layout>
      <div className="container">
        <SEO title={title} />
        <article className="entry">
          <h1>{data.markdownRemark?.frontmatter?.title}</h1>

          <aside className="meta">
            <Date
              className="entryDate"
              caption="投稿日"
              date={frontmatter.entrytDate}
            />

            <Date
              className="updateDate"
              caption="更新日"
              date={frontmatter.updateDate}
            />

            <FontAwesomeIcon icon={faFolderOpen} />
            <ul className="category">
              {data.tags.group.map((current, index) => (
                <li className={`${current.tag || 'none'}`} key={index}>
                  {current.tag}
                </li>
              ))}
            </ul>
          </aside>

          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: `${html || 'no content'}`,
            }}
          />

          <div
            className="link"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <i className="preview">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Preview Post</span>
            </i>

            <i className="next">
              <FontAwesomeIcon icon={faChevronRight} />
              <span>Next Post</span>
            </i>
          </div>
        </article>
      </div>
    </Layout>
  );
};

/**
 * Template Contents,
 */
export const query = graphql`
  query TemplateContents($id: String) {
    markdownRemark(id: { eq: $id }) {
      excerpt(format: PLAIN, truncate: true)
      frontmatter {
        entrytDate: created(formatString: "YYYY.MM.DD")
        updateDate: updated(formatString: "YYYY.MM.DD")
        created
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

export default Template;
