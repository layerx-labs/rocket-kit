import styled from 'styled-components/macro';
import { lighten, darken, rem } from 'polished';
import { colors } from '../../ions/variables';

interface CheckboxWrapperProps {
  checked?: boolean;
  disabled?: boolean;
}

const { light, primary, info } = colors;

export const CheckboxWrapper = styled.label<CheckboxWrapperProps>`
  border: 3px solid
    ${props =>
      props.disabled ? info : props.checked ? darken(0.15, primary) : info};
  border-radius: 6px;
  background-color: ${props =>
    props.disabled ? lighten(0.4, info) : props.checked ? primary : light};
  height: ${rem('50px')};
  display: flex;
  align-items: center;
  position: relative;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition-duration: 0.3s;

  &:hover input:not(:disabled) ~ span {
    border-color: ${info};
  }

  &:hover {
    background-color: ${props =>
      props.disabled
        ? lighten(0.4, info)
        : props.checked
        ? primary
        : lighten(0.4, info)};
  }

  span {
    color: ${props => (props.disabled ? info : props.checked ? light : null)};
    transition-duration: 0.3s;
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
    background-color: ${light};
    border-color: ${light};

    &:after {
      display: block;
    }
  }

  &:checked:disabled ~ span {
    border-color: transparent;
    background-color: ${info};
    color: ${info};

    &:after {
      display: block;
    }
  }

  &:not(:checked):disabled ~ span {
    border-color: ${info};
    background-color: ${lighten(0.4, info)};
  }

  &:hover:not(:disabled) {
    &:checked ~ span {
      border-color: ${light};
    }
  }
`;

export const Checkmark = styled.span<CheckboxWrapperProps>`
  position: absolute;
  left: ${rem('10px')};
  border: 2px solid ${lighten(0.4, info)};
  border-radius: 999px;
  background-color: ${light};
  width: ${rem('24px')};
  height: ${rem('24px')};
  transition-duration: 0.3s;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 3px;
    left: 6px;
    width: 5px;
    height: 9px;
    border: solid ${props => (props.disabled ? light : primary)};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
