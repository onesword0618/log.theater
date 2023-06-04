/**
 * @file The layout layer.
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { ComponentType } from 'react';
import { Footer } from './footer';
import { Header } from './header';

type Props = {
  pathName?: string;
  children: React.ReactNode;
};

/**
 * Layout Component Part.
 * @param {Props} props props
 * @returns {ComponentType} component
 */
export const Layout: ComponentType<Props> = ({ pathName, children }) => {
  return (
    <div className="layout">
      <Header url={pathName === undefined ? `` : pathName} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
