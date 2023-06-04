/**
 * @file Term of Service explain.
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-article-element
 * @see https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { PageProps } from 'gatsby';
import { HeadFactory } from '../../components/head';
import { Layout } from '../../components/layout';
import { useSiteMetaData } from '../../hooks/useSiteMetaData';

const Cookie = ({ location }: PageProps) => {
  return (
    <Layout pathName={location.pathname}>
      <article className="cookie">
        <h2>Cookie</h2>
      </article>
    </Layout>
  );
};

export default Cookie;

export const Head = () => (
  <HeadFactory type={`website`} title={`Cookie`} metaData={useSiteMetaData()} />
);
