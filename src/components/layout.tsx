/**
 * @file The layout layer.
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { ComponentType } from 'react';
import { SiteMetadata } from '../hooks/useSiteMetaData';
import { Footer } from './footer';
import { Header } from './header';

type Props = {
  metaData: SiteMetadata;
  children: React.ReactNode;
};

/**
 * Layout Component Part.
 * @param {Props} props props
 * @returns {ComponentType} component
 */
export const Layout: ComponentType<Props> = ({ metaData, children }) => {
  return (
    <>
      <Header metaData={metaData} />
      <main>
        <section>
          <article>{children}</article>
        </section>
      </main>
      <Footer />
    </>
  );
};
