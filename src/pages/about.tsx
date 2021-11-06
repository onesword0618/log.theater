/**
 * About Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../components/layout';
import { Head } from '../components/head';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faDatabase,
  faFilter,
  faFlask,
  faObjectGroup,
  faWrench,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(faDatabase, faFilter, faFlask, faObjectGroup, faWrench, faCompass);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, PageProps } from 'gatsby';
import { SiteMetadata } from '@types';

type Props = PageProps<{
  site: {
    siteMetadata: SiteMetadata;
  };
}>;

/**
 * Blog About Explain.
 *
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
          <h3>
            <FontAwesomeIcon icon={faWrench} />
            目的
          </h3>
          <p>
            このサイトでは、アプリケーション開発全般の疑問や調査、考察を深めていった思考結果を記載しています.
          </p>
        </div>

        <div className="category">
          <h3>
            <FontAwesomeIcon icon={faFilter} />
            カテゴリ
          </h3>
          <p>このサイトでは、取り上げていく内容は以下を予定しています.</p>

          <ul style={{ listStyle: 'none' }}>
            <li>
              <FontAwesomeIcon icon={faCompass} listItem={false} spin />
              ライブラリの調査、考察について
            </li>
            <li>
              <FontAwesomeIcon icon={faFlask} listItem={false} />
              アプリケーションのテストについての調査、考察について
            </li>
            <li>
              <FontAwesomeIcon icon={faObjectGroup} listItem={false} />
              アプリケーションの設計について
            </li>
            <li>
              <FontAwesomeIcon icon={faDatabase} listItem={false} />
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
