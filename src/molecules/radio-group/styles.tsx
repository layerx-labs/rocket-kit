import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

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

const { green, darkGreen, grey, lightGrey, red } = colors;

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
    border-color: ${darkGreen};
  }

  input[type='radio']:checked ~ .check::before {
    background-color: ${green};
  }

  & + span {
    margin-top: ${rem('10px')};
  }
`;

export const Item = styled.li<ItemProps>`
  --size: 24px;
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
    color: ${props => (props.error ? red : null)};
    cursor: pointer;
    z-index: 1;
  }

  .check {
    position: absolute;
    top: 0;
    border: 2px solid ${props => (props.error ? red : lightGrey)};
    border-radius: 100%;
    width: var(--size);
    height: var(--size);
    transition-duration: 0.3s;
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
    border-color: ${grey};
  }

  ${props =>
    props.disabled &&
    css`
      label {
        color: ${grey};
      }

      input[type='radio'] ~ .check,
      input[type='radio']:checked ~ .check {
        border-color: ${lightGrey};
      }

      input[type='radio']:checked ~ .check::before {
        background-color: ${lightGrey};
      }

      &:hover {
        pointer-events: none;
        cursor: auto;
      }
    `}
`;
