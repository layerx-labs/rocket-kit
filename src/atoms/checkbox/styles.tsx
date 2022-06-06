import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

interface CheckboxErrorProps {
  error?: boolean;
}
interface CheckboxWrapperProps extends CheckboxErrorProps {
  disabled?: boolean;
}

const { normal, light, green, darkGreen, red, darkRed, grey, lightGrey } =
  colors;

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
    border-color: ${props => (props.error ? darkRed : normal)};
  }

  span {
    color: ${props => (props.disabled ? grey : props.error ? red : null)};
    border-color: ${props => (props.error ? red : null)};
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

  &:checked:not(:disabled) ~ span {
    background-color: ${props => (props.error ? red : green)};
    border-color: ${props => (props.error ? darkRed : darkGreen)};

    &:after {
      display: block;
    }
  }

  &:checked:disabled ~ span {
    border-color: transparent;
    background-color: ${lightGrey};
    color: ${grey};

    &:after {
      display: block;
    }
  }

  &:not(:checked):disabled ~ span {
    border-color: ${lightGrey};
    background-color: ${light};
  }

  &:hover:not(:disabled) {
    border-color: ${props => (props.error ? darkRed : darkGreen)};

    &:checked ~ span {
      border-color: ${props => (props.error ? darkRed : darkGreen)};
    }
  }
`;

export const Checkmark = styled.span<CheckboxErrorProps>`
  position: absolute;
  top: 0;
  left: 0;
  border: ${rem('2px')} solid ${props => (props.error ? red : grey)};
  border-radius: 100%;
  width: ${rem('24px')};
  height: ${rem('24px')};
  transition-duration: 0.3s;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: ${rem('3px')};
    left: ${rem('6px')};
    width: ${rem('5px')};
    height: ${rem('9px')};
    border: solid ${light};
    border-width: 0 ${rem('3px')} ${rem('3px')} 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
