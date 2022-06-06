import styled, { css } from 'styled-components/macro';
import { rem } from 'polished';
import { TagVariant, TagColor } from './types';
import { colors, fontWeight } from '../../ions/variables';

interface TagWrapperProps {
  variant?: TagVariant;
  color?: TagColor;
}

const { normal, light, grey, green, orange, red } = colors;
const { bold } = fontWeight;

export const TagWrapper = styled.span<TagWrapperProps>`
  display: inline-block;
  border: ${rem('2px')} solid ${grey};
  border-radius: ${rem('3px')};
  background-color: ${grey};
  max-width: ${rem('150px')};
  padding: ${rem('3px')} ${rem('8px')};
  font-size: ${rem('12px')};
  font-weight: ${bold};
  letter-spacing: 0.1em;
  line-height: 1;
  color: ${light};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;

  &:not(:first-child) {
    margin-left: ${rem('5px')};
  }

  ${props =>
    props.color === 'green' &&
    css`
      border-color: ${green};
      background-color: ${green};
      color: ${props.variant === 'solid' ? light : green};
    `}

  ${props =>
    props.color === 'orange' &&
    css`
      border-color: ${orange};
      background-color: ${orange};
      color: ${props.variant === 'solid' ? light : orange};
    `}

  ${props =>
    props.color === 'red' &&
    css`
      border-color: ${red};
      background-color: ${red};
      color: ${props.variant === 'solid' ? light : red};
    `}

  ${props =>
    props.color === 'grey' &&
    css`
      border-color: ${grey};
      background-color: ${grey};
      color: ${props.variant === 'solid' ? light : grey};
    `}

  ${props =>
    props.color === 'light' &&
    css`
      border-color: ${light};
      background-color: ${light};
      color: ${props.variant === 'solid' ? normal : light};
    `}

  ${props =>
    props.variant === 'outline' &&
    css`
      background-color: transparent;
    `}
`;
