/**
 * Activity Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faCode,
  faPaperclip,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(faGithub, faBook, faCode, faPaperclip, faQuestionCircle);

import { Head } from '../components/head';
import { Layout } from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  location: {
    pathname: string;
  };
};

/**
 * Activity Explain.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function Activity({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <Head title={`activity`} url={pathname} />
      <Layout>
        <article className="activity">
          <h2>Activity</h2>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/onesword0618">GitHub</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} />
              <a href="https://leetcode.com/onesword0618">Leet Code</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faQuestionCircle} />
              <a href="https://teratail.com/users/onesword0618">teratail</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faBook} />
              <a href="https://booklog.jp/users/onesword0618">booklog</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPaperclip} />
              <a href="https://qiita.com/onesword">Qiita</a>
            </li>
          </ul>
        </article>
      </Layout>
    </>
  );
}
