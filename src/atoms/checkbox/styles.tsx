import styled from 'styled-components/macro';
import { lighten, darken, rem } from 'polished';
import { colors } from '../../ions/variables';

interface CheckboxErrorProps {
  error?: boolean;
}
interface CheckboxWrapperProps extends CheckboxErrorProps {
  disabled?: boolean;
}

const { light, primary, danger, info } = colors;

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
    border-color: ${props => (props.error ? darken(0.19, danger) : info)};
  }

  span {
    color: ${props => (props.disabled ? info : props.error ? danger : null)};
    border-color: ${props => (props.error ? danger : null)};
  }
`;

export const CheckboxLabel = styled.span`
  margin-left: ${rem('30px')};
  line-height: ${rem('24px')};
`;

export const CheckboxInput = styled.input<CheckboxWrapperProps>`
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &:checked:not(:disabled) ~ span {
    background-color: ${props => (props.error ? danger : primary)};
    border-color: ${props =>
      props.error ? darken(0.19, danger) : darken(0.15, primary)};

    &:after {
      display: block;
    }
  }

  &:checked:disabled ~ span {
    border-color: transparent;
    background-color: ${lighten(0.4, info)};
    color: ${info};

    &:after {
      display: block;
    }
  }

  &:not(:checked):disabled ~ span {
    border-color: ${lighten(0.4, info)};
    background-color: ${light};
  }

  &:hover:not(:disabled) {
    border-color: ${props =>
      props.error ? darken(0.19, danger) : darken(0.15, primary)};

    &:checked ~ span {
      border-color: ${props =>
        props.error ? darken(0.19, danger) : darken(0.15, primary)};
    }
  }
`;

export const Checkmark = styled.span<CheckboxErrorProps>`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid ${props => (props.error ? danger : lighten(0.4, info))};
  border-radius: 100%;
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
    border: solid ${light};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
