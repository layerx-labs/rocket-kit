import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { field, misc } from '../../ions/variables';

interface WrapperProps {
  type?: 'row' | 'column';
  group: string;
  error?: string;
  disabled?: boolean;
}

interface ItemProps {
  error?: string;
  disabled?: boolean;
}

export const Wrapper = styled.ul<WrapperProps>`
  display: flex;
  flex-direction: ${props => (props.type === 'column' ? 'column' : 'row')};
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    &:not(:last-child) {
      ${props =>
        props.type === 'row' &&
        css`
          margin-right: ${rem('30px')};
        `}

      ${props =>
        props.type === 'column' &&
        css`
          margin-bottom: ${rem('10px')};
        `}
    }
  }

  input[type='radio']:checked ~ .check {
    border-color: ${field.successBorderColor};
  }

  input[type='radio']:checked ~ .check::before {
    background-color: ${field.successBackgroundColor};
  }

  & + span {
    margin-top: ${rem('10px')};
  }
`;

export const Item = styled.li<ItemProps>`
  --size: ${rem('24px')};
  display: flex;
  position: relative;
  min-height: var(--size);

  input[type='radio'] {
    position: absolute;
    visibility: hidden;
  }

  label {
    position: relative;
    padding-left: calc(var(--size) + 5px);
    line-height: var(--size);
    vertical-align: middle;
    color: ${props => (props.error ? field.errorBorderColor : null)};
    cursor: pointer;
    z-index: 1;
  }

  .check {
    position: absolute;
    top: 0;
    border: ${rem('2px')} solid
      ${props => (props.error ? field.errorBorderColor : field.borderColor)};
    border-radius: 100%;
    width: var(--size);
    height: var(--size);
    transition-duration: ${misc.transitionDuration};
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      display: block;
      border-radius: 100%;
      height: calc(var(--size) / 1.5);
      width: calc(var(--size) / 1.5);
    }
  }

  &:hover .check {
    border-color: ${field.hoverBorderColor};
  }

  ${props =>
    props.disabled &&
    css`
      label {
        color: ${field.disabledColor};
      }

      input[type='radio'] ~ .check,
      input[type='radio']:checked ~ .check {
        border-color: ${field.disabledColor};
      }

      input[type='radio']:checked ~ .check::before {
        background-color: ${field.disabledBackgroundColor};
      }

      &:hover {
        pointer-events: none;
        cursor: auto;
      }
    `}
`;
