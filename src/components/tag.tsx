/**
 * @file Classification of personal interests.
 * @see https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link
 * @see https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2021.
 */
import { Link } from 'gatsby';
import { ComponentType } from 'react';
import { heading } from './tag.module.css';

type Props = {
  name: string;
};

/**
 * Tag Type Component Part.
 * @param {{ name: string }} name category name
 * @returns {ComponentType} component
 */
export const Tag: ComponentType<Props> = ({ name }) => {
  return (
    <Link to={`/tag/${name}`} className={name} aria-label={name}>
      <p className={heading}>#{name}</p>
    </Link>
  );
};
