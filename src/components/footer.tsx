/**
 * Blog Fotter Components Parts
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';

/**
 * Footer Components Parts.
 *
 * @returns {React.ReactElement} components
 */
export const Footer: React.FC = (): React.ReactElement => (
  <div
    className="footer-container"
    style={{ display: 'flex', flexDirection: 'row' }}
  >
    <footer>
      <div
        className="footer_area"
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <figure className="icon">
          <StaticImage
            className="blog-icon"
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

          <h5 className="about">About</h5>

          <h5 className="introduce">Introduce</h5>
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

          <h5 className="design">Design</h5>

          <h5 className="code">Code</h5>

          <h5 className="Activity">Activity</h5>
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

          <h5 className="privacy_policy">Privacy policy</h5>

          <h5 className="term_of_service">Term of Service</h5>

          <h5 className="cookie_polocy">Cookie Policy</h5>
        </div>
      </div>

      <h6 className="copyright">
        Copyright(c) {new Date().getFullYear()} All Rights Reserved.
      </h6>

      <h6 className="author">
        createdBy <a href="https://twitter.com/onesword0618">@onesword0618</a>
      </h6>

      <div className="sns_area">
        <a href="https://twitter.com/onesword0618">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  </div>
);
