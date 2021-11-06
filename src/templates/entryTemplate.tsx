/**
 * Entry Page Template.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';
import { graphql, Link } from 'gatsby';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(faArrowCircleLeft, faArrowCircleRight);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Date } from '../components/date';
import { Head } from '../components/head';
import { Tag } from '../components/tag';
import './entryTemplate.css';
import { SiteMetadata } from '@types';

type PageContext = {
  previous: GatsbyTypes.Maybe<GatsbyTypes.MarkdownRemark>;
  next: GatsbyTypes.Maybe<GatsbyTypes.MarkdownRemark>;
};

type Props = {
  data: GatsbyTypes.TemplateContentsQuery;
  pageContext: PageContext;
};

const EntryTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const { markdownRemark, site } = data;
  const metaData = site?.siteMetadata as SiteMetadata;
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
    metaData.title = title;
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
        <Head metaData={metaData} />
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
                <Link to={pageContext.previous.frontmatter.path}>
                  {pageContext.previous.frontmatter?.title}
                </Link>
              </i>
            )}

            {pageContext.next?.frontmatter?.path && (
              <i className="next">
                <FontAwesomeIcon icon={faArrowCircleRight} />
                <Link to={pageContext.next.frontmatter.path}>
                  {pageContext.next.frontmatter?.title}
                </Link>
              </i>
            )}
          </div>
        </article>
      </div>
    </Layout>
  );
};

/**
 * Entry Template.
 */
export default EntryTemplate;

/**
 * Template Contents.
 */
export const entryQuery = graphql`
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
    site {
      siteMetadata {
        locale
        title
        author {
          name
          excerpt
        }
        description
        siteUrl
        facebookApplicationId
        social {
          twitter
          github
        }
      }
    }
  }
`;
