import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, field, misc } from '../../ions/variables';

interface CheckboxErrorProps {
  error?: boolean;
}
interface CheckboxWrapperProps extends CheckboxErrorProps {
  disabled?: boolean;
}

export const CheckboxWrapper = styled.label<CheckboxWrapperProps>`
  display: flex;
  position: relative;
  padding-left: 0;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input:not(:disabled) ~ span {
    border-color: ${props =>
      props.error ? field.errorBorderColor : field.hoverBorderColor};
  }

  span {
    color: ${props =>
      props.disabled
        ? field.disabledColor
        : props.error
        ? field.errorBorderColor
        : null};
    border-color: ${props => (props.error ? field.errorBorderColor : null)};
  }
`;

export const CheckboxLabel = styled.span`
  margin-left: calc(${rem('24px')} + ${rem('5px')});
  line-height: ${rem('24px')};
`;

export const CheckboxInput = styled.input<CheckboxWrapperProps>`
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &:checked:not(:disabled)[aria-checked='true'] ~ span {
    background-color: ${props =>
      props.error ? field.errorBackgroundColor : field.successBackgroundColor};
    border-color: ${props =>
      props.error ? field.errorBorderColor : field.successBorderColor};

    &:after {
      display: block;
    }
  }

  &:checked:disabled[aria-checked='true'] ~ span {
    border-color: transparent;
    background-color: ${field.disabledBackgroundColor};
    color: ${field.disabledColor};

    &:after {
      display: block;
    }
  }

  &:not(:checked):disabled ~ span {
    border-color: ${field.disabledBackgroundColor};
    background-color: ${field.backgroundColor};
  }

  &:hover:not(:disabled) {
    border-color: ${props =>
      props.error ? field.errorBorderColor : field.activeBorderColor};

    &:checked ~ span {
      border-color: ${props =>
        props.error ? field.errorBorderColor : field.successBorderColor};
    }
  }
`;

export const Checkmark = styled.span<CheckboxErrorProps>`
  position: absolute;
  top: 0;
  left: 0;
  border: ${rem('2px')} solid
    ${props => (props.error ? field.errorBorderColor : field.borderColor)};
  border-radius: 100%;
  width: ${rem('24px')};
  height: ${rem('24px')};
  transition-duration: ${misc.transitionDuration};

  &:after {
    display: block;
    content: '';
    position: absolute;
    display: none;
    top: ${rem('3px')};
    left: ${rem('6px')};
    width: ${rem('5px')};
    height: ${rem('9px')};
    border: solid ${colors.white};
    border-width: 0 ${rem('3px')} ${rem('3px')} 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.checked.not-disabled {
    background-color: ${props =>
      props.error ? field.errorBackgroundColor : field.successBackgroundColor};
    border-color: ${props =>
      props.error ? field.errorBorderColor : field.successBorderColor};

    &:after {
      display: block;
    }
  }

  &.checked.disabled {
    color: ${field.disabledColor};
    border-color: transparent;
    background-color: ${field.disabledBackgroundColor};

    &:after {
      display: block;
    }
  }

  &.not-checked.disabled {
    border-color: ${field.disabledBackgroundColor};
    background-color: ${colors.white};
  }

  &.not-disabled:hover {
    border-color: ${props =>
      props.error ? field.errorBorderColor : field.successBorderColor};

    &:checked ~ span {
      border-color: ${props =>
        props.error ? field.errorBorderColor : field.successBorderColor};
    }
  }
`;
