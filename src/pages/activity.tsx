/**
 * @file Activity Page.
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { PageProps } from 'gatsby';
import { HeadFactory } from '../components/head';
import { Icon } from '../components/icon';
import { Layout } from '../components/layout';
import { useSiteMetaData } from '../hooks/useSiteMetaData';

const Activity = ({ location }: PageProps) => {
  return (
    <Layout pathName={location.pathname}>
      <article className="activity">
        <h2>Activity</h2>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <div className="icon-container">
              <a
                href="https://github.com/onesword0618"
                className="icon-heading"
              >
                <Icon name={`github`} size={`1.5em`} />
                GitHub
              </a>
            </div>
            <p>
              開発時のアイディアやツール、ライブラリ作成、サンプルなどの素振りをしたリソースが公開されています.
            </p>
          </li>
          <li>
            <div className="icon-container">
              <a
                href="https://leetcode.com/onesword0618"
                className="icon-heading"
              >
                <Icon name={`code`} size={`1.5em`} />
                Leet Code
              </a>
            </div>
            <p>
              テストコードを作成して問題と回答に対するアプローチを追跡しています.
            </p>
          </li>
          <li>
            <div className="icon-container">
              <a
                href="https://teratail.com/users/onesword0618"
                className="icon-heading"
              >
                <Icon name={`question`} size={`1.5em`} />
                teratail
              </a>
            </div>
            <p>自分が把握している範囲で問題を回答しています.</p>
          </li>
          <li>
            <div className="icon-container">
              <a
                href="https://booklog.jp/users/onesword0618"
                className="icon-heading"
              >
                <Icon name={`bookLog`} size={`1.5em`} />
                booklog
              </a>
            </div>
            <p>読んだ書籍の感想を記載しています.</p>
          </li>
          <li>
            <div className="icon-container">
              <a href="https://qiita.com/onesword" className="icon_heading">
                <Icon name={`qiita`} size={`1.5em`} />
                Qiita
              </a>
            </div>
            <p>調べたこと、調査した結果を公開しています.</p>
          </li>
          <li>
            <div className="icon-container">
              <a
                href="https://www.instagram.com/onesword0618/"
                className="icon-heading"
              >
                <Icon name={`instagram`} size={`1.5em`} />
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
};

export default Activity;

export const Head = () => (
  <HeadFactory
    type={`website`}
    title={`活動内容`}
    metaData={useSiteMetaData()}
  />
);
