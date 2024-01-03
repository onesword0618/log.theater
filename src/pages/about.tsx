/**
 * @file About Content Page.
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-article-element
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { HeadFactory } from '../components/head';
import { Icon } from '../components/icon';
import { Layout } from '../components/layout';
import { useSiteMetaData } from '../hooks/useSiteMetaData';

const About = () => {
  return (
    <Layout metaData={useSiteMetaData()}>
      <article className="about">
        <h2>このサイトについて</h2>
        <div className="purpose">
          <h3 className="icon-container">
            <Icon name={`purpose`} size={`1.5em`} />
            <p className="icon-heading">目的</p>
          </h3>
          <p>
            このサイトでは、アプリケーション開発全般の疑問や調査、考察を深めていった思考結果を記載しています.
          </p>
        </div>

        <div className="category">
          <h3 className="icon-container">
            <p className="icon-heading">カテゴリ</p>
          </h3>
          <p>このサイトでは、取り上げていく内容は以下を予定しています.</p>

          <ul style={{ listStyle: 'none' }}>
            <li>
              <div className="icon-container">
                <Icon name={`read`} />
                <p className="icon-heading">Read</p>
              </div>
              書籍や記事、ドキュメントを読んだ要約や所感について
            </li>
            <li>
              <div className="icon-container">
                <Icon name={`note`} />
                <p className="icon-heading">Note</p>
              </div>
              ライブラリの調査、考察について
            </li>
            <li>
              <div className="icon-container">
                <Icon name={`test`} />
                <p className="icon-heading">Test</p>
              </div>
              アプリケーションのテストについての調査、考察について
            </li>
            <li>
              <div className="icon-container">
                <Icon name={`design`} />
                <p className="icon-heading">Design</p>
              </div>
              アプリケーションの設計について
            </li>
            <li>
              <div className="icon-container">
                <Icon name={`database`} />
                <p className="icon-heading">DataBase</p>
              </div>
              データベースの設計、運用について
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  );
};

export default About;

export const Head = () => (
  <HeadFactory
    type={`website`}
    title={`サイトについて`}
    metaData={useSiteMetaData()}
  />
);
