/**
 * @file Activity Page.
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { PageProps } from 'gatsby';
import { Head } from '../components/head';
import { Layout } from '../components/layout';
import { useSiteMetaData } from '../hooks/useSiteMetaData';

const Activity = ({ location }: PageProps) => {
  const metaData = useSiteMetaData();
  return (
    <Layout pathName={location.pathname}>
      <Head title={`activity`} metaData={metaData} />
      <article className="activity">
        <h2>Activity</h2>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <div className="icon_container">
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
              <a href="https://qiita.com/onesword" className="icon_heading">
                Qiita
              </a>
            </div>
            <p>調べたこと、調査した結果を公開しています.</p>
          </li>
          <li>
            <div className="icon_container">
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
};

export default Activity;
