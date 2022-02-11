import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

interface CheckboxWrapperProps {
  checked?: boolean;
  disabled?: boolean;
}

const { light, green, darkGreen, grey, lightGrey } = colors;

export const CheckboxWrapper = styled.label<CheckboxWrapperProps>`
  border: 3px solid
    ${props => (props.disabled ? grey : props.checked ? darkGreen : grey)};
  border-radius: 6px;
  background-color: ${props =>
    props.disabled ? lightGrey : props.checked ? green : light};
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
    border-color: ${grey};
  }

  &:hover {
    background-color: ${props =>
      props.disabled ? lightGrey : props.checked ? green : lightGrey};
  }

  span {
    color: ${props => (props.disabled ? grey : props.checked ? light : null)};
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
    background-color: ${grey};
    color: ${grey};

    &:after {
      display: block;
    }
  }

  &:not(:checked):disabled ~ span {
    border-color: ${grey};
    background-color: ${lightGrey};
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
  border: 2px solid ${lightGrey};
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
    border: solid ${props => (props.disabled ? light : green)};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
