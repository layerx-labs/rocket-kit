import styled from 'styled-components';
import { rem } from 'polished';
import { colors, field, misc, typography } from '../../ions/variables';

interface NumberInputSpinnerProps {
  max?: number;
}

export const Wrapper = styled.div`
  border: ${field.borderWidth} solid ${field.borderColor};
  border-radius: ${field.borderRadius};
  max-width: max-content;
  height: ${field.height};
  display: flex;
  overflow: hidden;

  button,
  input {
    &:disabled {
      cursor: inherit;
      background-color: ${field.disabledBackgroundColor};

      svg {
        fill: ${field.disabledColor};
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
  height: ${field.height};
  padding: ${rem('10px')};
  font-family: inherit;
  font-size: ${typography.defaultSize};
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
    background-color: ${field.errorBackgroundColor};
  }
`;

export const Button = styled.button`
  width: ${field.height};
  height: ${field.height};
  border: 0;
  background-color: ${field.borderColor};
  cursor: pointer;
  transition-duration: ${misc.transitionDuration};

  &.remove-button {
    border-right: ${field.borderWidth} solid ${field.borderColor};
  }

  &.add-button {
    border-left: ${field.borderWidth} solid ${field.borderColor};
  }

  svg {
    width: auto;
    height: ${rem('20px')};
    fill: ${colors.purple300};
  }

  &:hover {
    background-color: ${field.hoverBorderColor};
  }
`;
