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
  faFilter,
  faFlask,
  faObjectGroup,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(faDatabase, faFilter, faFlask, faObjectGroup, faWrench);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head } from '../components/head';

type Props = {
  location: {
    pathname: string;
  };
};

/**
 * Blog About Explain.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function About({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <Head title={`Log Theaterについて`} url={pathname} />
      <Layout>
        <article className="about">
          <h2>About Log Theater</h2>
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
                <FontAwesomeIcon icon={faFlask} />
                アプリケーションのテストについての調査、考察について
              </li>
              <li>
                <FontAwesomeIcon icon={faObjectGroup} />
                アプリケーションの設計について
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} />
                データベースの設計、運用について
              </li>
            </ul>
          </div>
        </article>
      </Layout>
    </>
  );
}
