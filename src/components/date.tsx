/**
 * @file The time element.
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { ComponentType } from 'react';
import { Icon } from './icon';

type Props = {
  date: string;
};

/**
 * Date Component Part.
 * @param {Props} props time property
 * @returns {ComponentType} component
 */
export const Date: ComponentType<Props> = ({ date }) => {
  return (
    <time dateTime={date}>
      <Icon name={`clock`} size={`1em`} />
      <i>{date}</i>
    </time>
  );
};
