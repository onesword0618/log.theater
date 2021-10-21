/**
 * Entry Template Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';
import { graphql, Link } from 'gatsby';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { MarkdownRemark, Maybe, TemplateContentsQuery } from '@graphql-types';
import { Date } from '../components/date';
import { SEO } from '../components/seo';
import { Tag } from '../components/tag';

type PageContext = {
  previous: Maybe<MarkdownRemark>;
  next: Maybe<MarkdownRemark>;
};

type Props = {
  data: TemplateContentsQuery;
  pageContext: PageContext;
};

const EntryTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  if (markdownRemark === undefined || markdownRemark === null) {
    return <Layout> No Content </Layout>;
  }

  const { frontmatter, html } = markdownRemark;
  let title;
  let entryDate;
  let updateDate;
  if (frontmatter !== undefined && frontmatter !== null) {
    title =
      frontmatter.title !== undefined && frontmatter.title !== null
        ? frontmatter.title
        : `No Title`;
    entryDate = frontmatter.entrytDate;
    updateDate = frontmatter.updateDate;
  }

  const tags: string[] = [];
  if (frontmatter?.tags !== undefined && frontmatter?.tags !== null) {
    for (const tag of frontmatter?.tags) {
      if (tag !== undefined && tag !== null) {
        tags.push(tag);
      }
    }
  }

  return (
    <Layout>
      <div className="container">
        <SEO title={title} />
        <article className="entry">
          <h1>{title}</h1>

          <aside className="meta">
            <Date className="entryDate" caption="投稿日" date={entryDate} />

            <Date className="updateDate" caption="更新日" date={updateDate} />

            <ul className="category" style={{ listStyle: 'none' }}>
              {tags.map((current, index) => (
                <li className={`${current || 'none'}`} key={index}>
                  <Tag name={current} />
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
            {pageContext.previous?.frontmatter?.path && (
              <i className="preview">
                <FontAwesomeIcon icon={faArrowCircleLeft} />
                <Link to={pageContext.previous.frontmatter.path}>前の記事</Link>
              </i>
            )}

            {pageContext.next?.frontmatter?.path && (
              <i className="next">
                <FontAwesomeIcon icon={faArrowCircleRight} />
                <Link to={pageContext.next.frontmatter.path}>次の記事</Link>
              </i>
            )}
          </div>
        </article>
      </div>
    </Layout>
  );
};

/**
 * Template Contents.
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
        tags
      }
      id
      html
    }
  }
`;

/**
 * Entry Template.
 */
export default EntryTemplate;
