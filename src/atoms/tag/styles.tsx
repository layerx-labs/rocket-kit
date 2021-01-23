import styled, { css } from 'styled-components';
import { TagVariant, TagColor } from './types';

interface TagWrapperProps {
  variant?: TagVariant;
  color?: TagColor;
}

export const TagWrapper = styled.span<TagWrapperProps>`
  display: inline-block;
  border: 2px solid var(--green, hsl(186, 62%, 59%));
  border-radius: 999px;
  background-color: var(--green, hsl(186, 62%, 59%));
  max-width: 150px;
  padding: 2px 10px;
  font-size: 0.85rem;
  color: var(--white, hsl(0, 0%, 100%));
  text-transform: lowercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:first-child) {
    margin-left: 5px;
  }

  ${(props) =>
    props.color === 'orange' &&
    css`
      border-color: var(--orange, hsl(36, 100%, 57%));
      background-color: var(--orange, hsl(36, 100%, 57%));
    `}

  ${(props) =>
    props.color === 'danger' &&
    css`
      border-color: var(--red, hsl(354, 83%, 64%));
      background-color: var(--red, hsl(354, 83%, 64%));
    `}

    ${(props) =>
      props.color === 'info' &&
      css`
        border-color: var(--grey, hsl(0, 0%, 85%));
        background-color: var(--lightGrey, hsl(0, 0%, 98%));
        color: var(--default, hsl(0, 0%, 16%));
      `}

  ${(props) =>
    props.variant === 'outline' &&
    css`
      border-color: var(--default, hsl(0, 0%, 16%));
      background-color: transparent;
      color: var(--default, hsl(0, 0%, 16%));
    `}
`;
