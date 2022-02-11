import styled, { css } from 'styled-components/macro';
import { rem } from 'polished';
import { TagVariant, TagColor } from './types';
import { colors } from '../../ions/variables';

interface TagWrapperProps {
  variant?: TagVariant;
  color?: TagColor;
}

const { light, grey, green, orange, red } = colors;

export const TagWrapper = styled.span<TagWrapperProps>`
  display: inline-block;
  border: 2px solid ${grey};
  border-radius: 999px;
  background-color: ${grey};
  max-width: ${rem('150px')};
  padding: ${rem('2px')} ${rem('10px')};
  font-size: 0.85rem;
  color: ${light};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:first-child) {
    margin-left: 5px;
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
    props.variant === 'outline' &&
    css`
      background-color: transparent;
    `}
`;
