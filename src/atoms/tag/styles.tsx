import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { TagVariant, TagColor } from './types';
import { colors } from '../../ions/variables';

interface TagWrapperProps {
  variant?: TagVariant;
  color?: TagColor;
}

const { light, info, primary, warning, danger } = colors;

export const TagWrapper = styled.span<TagWrapperProps>`
  display: inline-block;
  border: 2px solid ${info};
  border-radius: 999px;
  background-color: ${info};
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
    props.color === 'primary' &&
    css`
      border-color: ${primary};
      background-color: ${primary};
      color: ${props.variant === 'solid' ? light : primary};
    `}

  ${props =>
    props.color === 'warning' &&
    css`
      border-color: ${warning};
      background-color: ${warning};
      color: ${props.variant === 'solid' ? light : warning};
    `}

  ${props =>
    props.color === 'danger' &&
    css`
      border-color: ${danger};
      background-color: ${danger};
      color: ${props.variant === 'solid' ? light : danger};
    `}

    ${props =>
      props.color === 'info' &&
      css`
        border-color: ${info};
        background-color: ${info};
        color: ${props.variant === 'solid' ? light : info};
      `}

  ${props =>
    props.variant === 'outline' &&
    css`
      background-color: transparent;
    `}
`;
