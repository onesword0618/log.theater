/**
 * @file The time element.
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { ComponentType } from 'react';
import { Icon } from './icon';

type Props = {
  className: string;
  caption: string;
  date?: string | null;
};

/**
 * Date Component Part.
 * @param {{ className: string, caption: string, date?: string }} props time property
 * @returns {ComponentType} component
 */
export const Date: ComponentType<Props> = (props) => {
  const { caption, className, date } = props;
  return (
    <time
      dateTime={className}
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Icon name={`clock`} size={`1em`} /> {caption}
      <i className="clock">{date}</i>
    </time>
  );
};
