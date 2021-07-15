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
  faLaptopCode,
  faPaperclip,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(faGithub, faBook, faLaptopCode, faPaperclip, faQuestionCircle);

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
            <div className="icon_container">
              <FontAwesomeIcon
                icon={faGithub}
                size={'2x'}
                title={'github'}
                className="icon"
              />
              <a
                href="https://github.com/onesword0618"
                className="icon_heading"
              >
                GitHub
              </a>
            </div>
            <p>
              開発時のアイディアやツール、ライブラリ作成、サンプルなどの素振りをしたリソースが公開されています.
            </p>
          </li>
          <li>
            <div className="icon_container">
              <FontAwesomeIcon
                icon={faLaptopCode}
                size={'2x'}
                title={'Leet Code'}
                className="icon"
              />
              <a
                href="https://leetcode.com/onesword0618"
                className="icon_heading"
              >
                Leet Code
              </a>
            </div>
            <p>
              テストコードを作成して問題と回答に対するアプローチを追跡しています.
            </p>
          </li>
          <li>
            <div className="icon_container">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                size={'2x'}
                title={'teratail'}
                className="icon"
              />
              <a
                href="https://teratail.com/users/onesword0618"
                className="icon_heading"
              >
                teratail
              </a>
            </div>
            <p>自分が把握している範囲で問題を回答しています.</p>
          </li>
          <li>
            <div className="icon_container">
              <FontAwesomeIcon
                icon={faBook}
                size={'2x'}
                title={'booklog'}
                className="icon"
              />
              <a
                href="https://booklog.jp/users/onesword0618"
                className="icon_heading"
              >
                booklog
              </a>
            </div>
            <p>読んだ書籍の感想を記載しています.</p>
          </li>
          <li>
            <div className="icon_container">
              <FontAwesomeIcon
                icon={faPaperclip}
                size={'2x'}
                title={'Qiita'}
                className="icon"
              />
              <a href="https://qiita.com/onesword" className="icon_heading">
                Qiita
              </a>
            </div>
            <p>調べたこと、調査した結果を公開しています.</p>
          </li>
          <li>
            <div className="icon_container">
              <FontAwesomeIcon
                icon={faInstagram}
                size={'2x'}
                title={'Instagram'}
                className="icon"
              />
              <a
                href="https://www.instagram.com/onesword0618/"
                className="icon_heading"
              >
                Instagram
              </a>
            </div>
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
