import styled from 'styled-components/macro';
import { colors } from '../../ions/variables';

const { grey, lightGrey, lightRed } = colors;

interface NumberInputSpinnerProps {
  max?: number;
}

export const Wrapper = styled.div`
  border: 1px solid ${grey};
  border-radius: 6px;
  max-width: max-content;
  height: 50px;
  display: flex;
  overflow: hidden;

  button,
  input {
    &:disabled {
      cursor: inherit;
      background-color: ${lightGrey};
      color: ${lightGrey};

      svg {
        fill: ${lightGrey};
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
  height: 50px;
  padding: 10px;
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
  width: 50px;
  height: 50px;
  border: 0;
  background-color: ${lightGrey};
  cursor: pointer;
  transition-duration: 0.3s;

  &.remove-button {
    border-right: 1px solid ${grey};
  }

  &.add-button {
    border-left: 1px solid ${grey};
  }

  svg {
    width: auto;
    height: 20px;
    fill: ${grey};
  }

  &:hover {
    background-color: ${lightGrey};
  }
`;
