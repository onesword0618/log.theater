/**
 * Activity Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faCode,
  faPaperclip,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(faGithub, faBook, faCode, faPaperclip, faQuestionCircle);

import { Head } from '../components/head';
import { Layout } from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiteMetadata } from '@types';
import { graphql, PageProps } from 'gatsby';

type Props = PageProps<{
  site: {
    siteMetadata: SiteMetadata;
  };
}>;

/**
 * Activity Explain.
 *
 * @param  {PageProps} data pageQuery
 * @returns {React.ReactElement} component
 */
export default function Activity({
  data,
  location,
}: Props): React.ReactElement {
  const metaData = data.site.siteMetadata;
  metaData.title = `activity`;
  return (
    <Layout pathName={location.pathname}>
      <Head metaData={metaData} />
      <article className="activity">
        <h2>Activity</h2>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/onesword0618">GitHub</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} />
            <a href="https://leetcode.com/onesword0618">Leet Code</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <a href="https://teratail.com/users/onesword0618">teratail</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} />
            <a href="https://booklog.jp/users/onesword0618">booklog</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPaperclip} />
            <a href="https://qiita.com/onesword">Qiita</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
            <a href="https://www.instagram.com/onesword0618/">Instagram</a>
          </li>
        </ul>
      </article>
    </Layout>
  );
}

/**
 * Activity Page.
 */
export const pageQuery = graphql`
  query ActivityPage {
    site {
      siteMetadata {
        locale
        title
        author {
          name
          excerpt
        }
        description
        siteUrl
        facebookApplicationId
        social {
          twitter
          github
        }
      }
    }
  }
`;
