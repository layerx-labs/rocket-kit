import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { colors, field, misc, typography } from '../../ions/variables';

interface TextAreaProps {
  height?: string;
  error?: string;
  minlength?: number;
  maxlength?: number;
}

export const Wrapper = styled.div`
  position: relative;
`;

export const TextAreaStyle = styled.textarea<TextAreaProps>`
  border-width: ${field.borderWidth};
  border-style: solid;
  border-color: ${props =>
    props.error ? field.errorBorderColor : field.borderColor};
  border-radius: ${field.borderRadius};
  width: 100%;
  height: ${props => props.height || rem('100px')};
  min-height: ${field.height};
  padding: ${rem('10px')};
  font-family: inherit;
  font-size: ${rem('16px')};
  word-break: break-word;
  transition-duration: ${misc.transitionDuration};
  resize: none;

  &:hover {
    border-color: ${field.hoverBorderColor};
  }

  &:focus {
    border-color: ${field.activeColor};
    outline: none;
  }

  &:disabled {
    background-color: ${field.disabledBackgroundColor};
    color: ${field.disabledColor};
  }

  &:invalid {
    border-color: ${field.errorBorderColor};
    outline: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  &:required {
    border-color: ${props =>
      props.error ? field.errorBorderColor : field.borderColor};
  }

  &::placeholder {
    color: ${field.placeholderColor};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${field.placeholderColor};
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: ${field.placeholderColor};
    opacity: 1;
  }
`;

export const Count = styled.div<TextAreaProps>`
  position: absolute;
  top: ${rem('5px')};
  right: ${rem('10px')};
  background-color: ${transparentize(0.15, colors.white)};
  padding: 0 ${rem('5px')};

  span {
    font-size: ${typography.fontSizeXs};
    color: ${field.borderColor};

    &.negative {
      color: ${field.errorBorderColor};
    }
  }
`;
