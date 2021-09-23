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
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import {
  faDatabase,
  faFilter,
  faFlask,
  faObjectGroup,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Blog About Explain.
 *
 * @returns {React.ReactElement} components
 */
export default function About(): React.ReactElement {
  return (
    <Layout>
      <article className="content">
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
  );
}
