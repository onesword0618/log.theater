/* eslint-disable import/order */
/**
 * About Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faDatabase,
  faFlask,
  faObjectGroup,
  faFolderTree,
  faMapPin,
  faBookOpenReader,
  faNoteSticky,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(
  faFolderTree,
  faMapPin,
  faBookOpenReader,
  faNoteSticky,
  faDatabase,
  faFlask,
  faObjectGroup,
);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, PageProps } from 'gatsby';
import { Head } from '../components/head';

type Props = PageProps<{
  site: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    siteMetadata: any;
  };
}>;

/**
 * Blog About Explain.
 * @param  {PageProps} data pageQuery
 * @returns {React.ReactElement} component
 */
export default function About({ data, location }: Props): React.ReactElement {
  const metaData = data.site.siteMetadata;
  metaData.title = `Log Theaterについて`;
  return (
    <Layout pathName={location.pathname}>
      <Head metaData={metaData} />
      <article className="about">
        <h2>このサイトについて</h2>
        <div className="purpose">
          <h3 className="icon_container">
            <FontAwesomeIcon icon={faMapPin} size={'2x'} className="icon" />
            <p className="icon_heading">目的</p>
          </h3>
          <p>
            このサイトでは、アプリケーション開発全般の疑問や調査、考察を深めていった思考結果を記載しています.
          </p>
        </div>

        <div className="category">
          <h3 className="icon_container">
            <FontAwesomeIcon icon={faFolderTree} size={'2x'} className="icon" />
            <p className="icon_heading">カテゴリ</p>
          </h3>
          <p>このサイトでは、取り上げていく内容は以下を予定しています.</p>

          <ul style={{ listStyle: 'none' }}>
            <li>
              <div className="icon_container">
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  listItem={false}
                  size={'2x'}
                  className="icon"
                />
                <p className="icon_heading">Read</p>
              </div>
              書籍や記事、ドキュメントを読んだ要約や所感について
            </li>
            <li>
              <div className="icon_container">
                <FontAwesomeIcon
                  icon={faNoteSticky}
                  listItem={false}
                  size={'2x'}
                  className="icon"
                />
                <p className="icon_heading">Note</p>
              </div>
              ライブラリの調査、考察について
            </li>
            <li>
              <div className="icon_container">
                <FontAwesomeIcon
                  icon={faFlask}
                  listItem={false}
                  size={'2x'}
                  className="icon"
                />
                <p className="icon_heading">Test</p>
              </div>
              アプリケーションのテストについての調査、考察について
            </li>
            <li>
              <div className="icon_container">
                <FontAwesomeIcon
                  icon={faObjectGroup}
                  listItem={false}
                  size={'2x'}
                  className="icon"
                />
                <p className="icon_heading">Design</p>
              </div>
              アプリケーションの設計について
            </li>
            <li>
              <div className="icon_container">
                <FontAwesomeIcon
                  icon={faDatabase}
                  listItem={false}
                  size={'2x'}
                  className="icon"
                />
                <p className="icon_heading">DataBase</p>
              </div>
              データベースの設計、運用について
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  );
}

/**
 * Blog About Explain.
 */
export const pageQuery = graphql`
  query BlogAboutPage {
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
