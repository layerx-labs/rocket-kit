import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, field, misc } from '../../ions/variables';

interface CheckboxWrapperProps {
  checked?: boolean;
  disabled?: boolean;
}

export const CheckboxWrapper = styled.label<CheckboxWrapperProps>`
  border: ${field.borderWidth} solid
    ${props =>
      props.disabled
        ? field.borderColor
        : props.checked
        ? field.successBorderColor
        : field.borderColor};
  border-radius: ${field.borderRadius};
  background-color: ${props =>
    props.disabled
      ? field.disabledBackgroundColor
      : props.checked
      ? field.successBackgroundColor
      : field.backgroundColor};
  height: ${field.height};
  display: flex;
  align-items: center;
  position: relative;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition-duration: ${misc.transitionDuration};

  &:hover input:not(:disabled) ~ span {
    border-color: ${field.hoverBorderColor};
  }

  &:hover {
    background-color: ${props =>
      props.disabled
        ? field.disabledBackgroundColor
        : props.checked
        ? field.successBackgroundColor
        : field.borderColor};
  }

  span {
    color: ${props =>
      props.disabled
        ? field.disabledColor
        : props.checked
        ? colors.white
        : null};
    transition-duration: ${misc.transitionDuration};
  }
`;

export const CheckboxLabel = styled.span`
  margin-left: ${rem('40px')};
  line-height: ${rem('24px')};
`;

export const CheckboxInput = styled.input<CheckboxWrapperProps>`
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &:checked:not(:disabled) ~ span {
    background-color: ${colors.white};
    border-color: ${field.successBorderColor};

    &:after {
      display: block;
    }
  }

  &:checked:disabled ~ span {
    background-color: ${field.disabledBackgroundColor};
    color: ${field.disabledColor};

    &:after {
      display: block;
      border-color: ${field.disabledColor};
    }
  }

  &:not(:checked):disabled ~ span {
    border-color: ${field.disabledBackgroundColor};
    background-color: ${field.backgroundColor};
  }

  &:hover:not(:disabled) {
    &:checked ~ span {
      border-color: ${field.successBorderColor};
    }
  }
`;

export const Checkmark = styled.span<CheckboxWrapperProps>`
  position: absolute;
  left: ${rem('10px')};
  border: ${rem('2px')} solid ${field.borderColor};
  border-radius: 999px;
  background-color: ${colors.white};
  width: ${rem('24px')};
  height: ${rem('24px')};
  transition-duration: ${misc.transitionDuration};

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: ${rem('3px')};
    left: ${rem('6px')};
    width: ${rem('5px')};
    height: ${rem('9px')};
    border: solid
      ${props => (props.disabled ? colors.white : field.successBorderColor)};
    border-width: 0 ${rem('3px')} ${rem('3px')} 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
