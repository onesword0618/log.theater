/**
 * @file Rewriting content during server-side rendering.
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody
 * Support added in gatsby@4.8.0 -
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#gatsby-browsertsx--gatsby-ssrtsx
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2023.
 */
import type { GatsbySSR } from 'gatsby';

const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `ja` });
};

export default onRenderBody;
