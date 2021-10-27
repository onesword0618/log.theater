/**
 * Category.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Link } from 'gatsby';

// look-ahead font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library, IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faDatabase,
  faFilter,
  faFlask,
  faObjectGroup,
} from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;
library.add(faDatabase, faFilter, faFlask, faObjectGroup);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  name: string;
};

/**
 * Category Icon.
 *
 * @param {Props} props name
 * @returns {React.FC} category
 */
export const Tag: React.FC<Props> = ({ name }) => {
  let category: IconProp = faFilter;
  switch (name) {
    case `test`:
      category = faFlask;
      break;
    case `design`:
      category = faObjectGroup;
      break;
    case `database`:
      category = faDatabase;
      break;
    default:
      break;
  }

  return (
    <>
      {name && (
        <Link to={`/tag/${name}`}>
          <FontAwesomeIcon icon={category} />
          {name}{' '}
        </Link>
      )}
    </>
  );
};
