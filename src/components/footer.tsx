/**
 * Blog Common Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
library.add(faFacebook, faTwitter);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';

/**
 * Footer Component Part.
 *
 * @returns {React.ReactElement} component
 */
export const Footer: React.FC = (): React.ReactElement => {
  const fetchFooter = useStaticQuery<GatsbyTypes.FooterComponentQuery>(
    graphql`
      query FooterComponent {
        site {
          siteMetadata {
            author
          }
        }
      }
    `,
  );

  let author = `No Body`;
  const { site } = fetchFooter;
  if (
    site === undefined ||
    site?.siteMetadata === undefined ||
    site?.siteMetadata?.author === undefined
  ) {
    return <h1>{author}</h1>;
  }

  if (site.siteMetadata.author !== null) {
    author = site.siteMetadata.author;
  }

  return (
    <div
      className="footer_container"
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <footer>
        <div
          className="footer_area"
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Link to="/">
            <figure className="icon">
              <StaticImage
                className="blog_icon"
                layout="fixed"
                src="../images/icon.png"
                width={50}
                height={50}
                quality={95}
                alt="Blog Icon"
              />
            </figure>
          </Link>

          <div
            className="footer_item_blog"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h4 className="blog">Blog</h4>

            <Link to="/about/">About</Link>

            <Link to="/introduce/">Introduce</Link>
          </div>

          <div
            className="footer_item_products"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h4 className="products">Products</h4>

            <Link to="/design/">Design</Link>

            <Link to="/code/">Code</Link>

            <Link to="/activity/">Activity</Link>
          </div>

          <div
            className="footer_item_policy"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h4 className="policy">Policy</h4>

            <Link to="/terms/">Term of Service</Link>

            <Link to="/policy/privacy/">Privacy policy</Link>
          </div>
        </div>

        <div
          className="sns_area"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <a
            className="twitter"
            href="https://twitter.com/onesword0618"
            aria-label="twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            className="facebook"
            href="https://www.facebook.com/profile.php?id=100023464906058"
            aria-label="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>

        <h5 className="copyright">
          <p>
            Copyright(c) {new Date().getFullYear()},
            <a href="https://ja.gravatar.com/aoakuablog">{author}</a> All Rights
            Reserved, Build with <a href="https://www.gatsbyjs.com">Gatsby</a> .
          </p>
        </h5>
      </footer>
    </div>
  );
};
