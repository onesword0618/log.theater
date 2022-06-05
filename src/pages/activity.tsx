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
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
import { SiteMetadata } from '@types';
import { graphql, PageProps } from 'gatsby';

type Props = PageProps<{
  site: {
    siteMetadata: SiteMetadata;
  };
}>;

/**
 * Activity Explain.
 *
 * @param  {PageProps} data pageQuery
 * @returns {React.ReactElement} component
 */
export default function Activity({
  data,
  location,
}: Props): React.ReactElement {
  const metaData = data.site.siteMetadata;
  metaData.title = `activity`;
  return (
    <Layout pathName={location.pathname}>
      <Head metaData={metaData} />
      <article className="activity">
        <h2>Activity</h2>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <FontAwesomeIcon icon={faGithub} size={'3x'} />
            <a href="https://github.com/onesword0618">GitHub</a>
            <p>
              開発時のアイディアやツール、ライブラリ作成、サンプルなどの素振りをしたリソースが公開されています.
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} size={'3x'} />
            <a href="https://leetcode.com/onesword0618">Leet Code</a>
            <p>
              テストコードを作成して問題と回答に対するアプローチを追跡しています.
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <a href="https://teratail.com/users/onesword0618">teratail</a>
            <p>自分が把握している範囲で問題を回答しています.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} size={'3x'} />
            <a href="https://booklog.jp/users/onesword0618">booklog</a>
            <p>読んだ書籍の感想を記載しています.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faPaperclip} size={'3x'} />
            <a href="https://qiita.com/onesword">Qiita</a>
            <p>調べたこと、調査した結果を公開しています.</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} size={'3x'} />
            <a href="https://www.instagram.com/onesword0618/">Instagram</a>
            <p>
              外に出る動機づくりのため街の景色やイベントを写真/動画で取得し公開しています.
            </p>
          </li>
        </ul>
      </article>
    </Layout>
  );
}

/**
 * Activity Page.
 */
export const pageQuery = graphql`
  query ActivityPage {
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
