import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

const { grey, lightGrey, lightRed } = colors;

interface NumberInputSpinnerProps {
  max?: number;
}

export const Wrapper = styled.div`
  border: ${rem('1px')} solid ${grey};
  border-radius: ${rem('6px')};
  max-width: max-content;
  height: ${rem('50px')};
  display: flex;
  overflow: hidden;

  button,
  input {
    &:disabled {
      cursor: inherit;
      background-color: ${lightGrey};

      svg {
        opacity: 0.25;
      }

      &:hover {
        pointer-events: none;
      }
    }
  }
`;

export const Input = styled.input<NumberInputSpinnerProps>`
  border: 0;
  width: ${props =>
    props.max != null && props.max.toString().length > 5
      ? props.max.toString().length * 10 + 20 + 'px'
      : '70px'};
  height: ${rem('50px')};
  padding: ${rem('10px')};
  font-family: inherit;
  font-size: 1rem;
  text-align: center;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  &:invalid {
    box-shadow: none;
    background-color: ${lightRed};
  }
`;

export const Button = styled.button`
  width: ${rem('50px')};
  height: ${rem('50px')};
  border: 0;
  background-color: ${lightGrey};
  cursor: pointer;
  transition-duration: 0.3s;

  &.remove-button {
    border-right: ${rem('1px')} solid ${grey};
  }

  &.add-button {
    border-left: ${rem('1px')} solid ${grey};
  }

  svg {
    width: auto;
    height: ${rem('20px')};
    fill: ${grey};
  }

  &:hover {
    background-color: ${lightGrey};
  }
`;
