/**
 * Blog Common Component Parts.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FooterComponentQuery } from '@graphql-types';

/**
 * Footer Component Parts.
 *
 * @returns {React.ReactElement} components
 */
export const Footer: React.FC = (): React.ReactElement => {
  const fetchFooter = useStaticQuery<FooterComponentQuery>(
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

  const author: string = fetchFooter.site?.siteMetadata?.author as string;

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
            alignItems: 'center',
          }}
        >
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

        <div className="sns_area">
          <a href="https://twitter.com/onesword0618">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a href="https://www.facebook.com/profile.php?id=100023464906058">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>

        <h6 className="author">
          createdBy <a href="https://ja.gravatar.com/aoakuablog">{author}</a>
        </h6>

        <h6 className="copyright">
          Copyright(c) {new Date().getFullYear()} All Rights Reserved.
        </h6>
      </footer>
    </div>
  );
};
