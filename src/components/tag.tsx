/**
 * Category.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';

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
  tag: string;
};

/**
 * Category Icon.
 *
 * @param {Props} props tag
 * @returns {React.FC} category
 */
export const Tag: React.FC<Props> = ({ tag }) => {
  let category: IconProp = faFilter;
  switch (tag) {
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
    <div className="tag">
      {tag && (
        <>
          <FontAwesomeIcon icon={category} />
          {tag}
        </>
      )}
    </div>
  );
};
