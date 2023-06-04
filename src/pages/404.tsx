/**
 * @file Not Found Page.
 * @see https://www.gatsbyjs.com/docs/how-to/adding-common-features/add-404-page/
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { PageProps } from 'gatsby';
import { HeadFactory } from '../components/head';
import { Layout } from '../components/layout';
import { useSiteMetaData } from '../hooks/useSiteMetaData';

const NotFound = ({ location }: PageProps) => {
  return (
    <Layout pathName={location.pathname}>
      <h1>Sorry, Not Found.</h1>
    </Layout>
  );
};

export default NotFound;

export const Head = () => (
  <HeadFactory
    type={`website`}
    title={`Not Found Page`}
    metaData={useSiteMetaData()}
  />
);
