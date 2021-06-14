import styled, { css } from 'styled-components';
import { rem, darken } from 'polished';
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

const { light, primary, info, purple, danger } = colors;

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
    border-color: ${darken(0.15, primary)};
  }

  input[type='radio']:checked ~ .check::before {
    background-color: ${primary};
  }

  & + span {
    margin-top: ${rem('5px')};
  }
`;

export const Item = styled.li<ItemProps>`
  position: relative;
  height: ${rem('24px')};

  input[type='radio'] {
    position: absolute;
    visibility: hidden;
  }

  label {
    position: relative;
    padding-left: ${rem('30px')};
    line-height: ${rem('24px')};
    vertical-align: middle;
    color: ${props => (props.error ? danger : null)};
    cursor: pointer;
    z-index: 1;
  }

  .check {
    position: absolute;
    top: 0;
    border: 2px solid ${props => (props.error ? danger : info)};
    border-radius: 100%;
    width: ${rem('24px')};
    height: ${rem('24px')};
    transition-duration: 0.3s;

    &::before {
      content: '';
      position: absolute;
      display: block;
      border-radius: 100%;
      height: ${rem('16px')};
      width: ${rem('16px')};
      top: 2px;
      left: 2px;
    }
  }

  &:hover .check {
    border-color: ${purple};
  }

  ${props =>
    props.disabled &&
    css`
      label {
        color: ${info};
      }

      input[type='radio']:checked ~ .check {
        border-color: ${primary};
      }

      input[type='radio']:checked ~ .check::before {
        background-color: ${light};
      }

      &:hover {
        pointer-events: none;
        cursor: auto;
      }
    `}
`;
