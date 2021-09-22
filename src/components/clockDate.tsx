/**
 * Entry Templete Component Parts
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';

type Props = {
  className: string;
  caption: string;
  date?: string | undefined;
};

/**
 * Date Component Parts.
 *
 * @param {Props} props date
 * @returns {React.ReactElement} components
 */
export const ClockDate: React.FC<Props> = (
  props: Props,
): React.ReactElement => {
  const { caption, className, date } = props;
  return (
    <time
      dateTime={className}
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      {caption} <i className="clock">{date}</i>
    </time>
  );
};
