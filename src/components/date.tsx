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
  date: string;
};

/**
 * Date Component Part.
 * @param {Props} props time property
 * @returns {ComponentType} component
 */
export const Date: ComponentType<Props> = ({ className, caption, date }) => {
  return (
    <time dateTime={date} className={className}>
      <Icon name={`clock`} size={`1em`} />
      {caption}
      <i>{date}</i>
    </time>
  );
};
