import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { field, misc, typography } from '../../ions/variables';
import icons from '../../ions/icons';

interface InputStyleProps {
  icon?: string;
  error?: string;
}

export const TextFieldInputStyle = styled.input<InputStyleProps>`
  border-width: ${field.borderWidth};
  border-style: solid;
  border-color: ${props =>
    props.error ? field.errorBorderColor : field.borderColor};
  border-radius: ${field.borderRadius};
  background-repeat: no-repeat;
  background-size: ${rem('20px')} ${rem('20px')};
  background-position: ${rem('10px')} 50%;
  height: ${field.height};
  padding: ${rem('10px')};
  font-family: inherit;
  font-size: ${typography.defaultSize};
  transition-property: border-color;
  transition-duration: ${misc.transitionDuration};

  &:hover {
    border-color: ${field.hoverBorderColor};
  }

  &:focus {
    border-color: ${field.activeBorderColor};
    outline: none;
  }

  &:disabled {
    border-color: ${field.borderColor};
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

  &::placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder {
    color: ${field.placeholderColor};
    opacity: 1;
  }

  ${props =>
    props.icon &&
    css<InputStyleProps>`
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewbox="0 0 32 32"><path style="fill:${props =>
        props.error
          ? 'rgb(235,87,87)'
          : 'rgb(217,212,237)'}" d=${JSON.stringify(
        icons[props.icon]
      )} /></svg>');
      padding-left: ${rem('40px')};

      &:focus {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewbox="0 0 32 32">
        <path style="fill:rgb(67,41,166)" d=${JSON.stringify(
          icons[props.icon]
        )} /></svg>');
      }
    `}
`;
