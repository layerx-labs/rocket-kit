import styled from 'styled-components';

interface CheckboxErrorProps {
  error?: string;
}
interface CheckboxWrapperProps extends CheckboxErrorProps {
  disabled?: boolean;
}

export const CheckboxWrapper = styled.label<CheckboxWrapperProps>`
  display: inline-block;
  position: relative;
  height: 24px;
  padding-left: 0;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover input:not(:disabled) ~ span {
    border-color: var(--purple, hsl(256, 55%, 43%));
  }

  span {
    color: ${props =>
      props.error
        ? 'var(--red, hsl(354, 83%, 64%))'
        : props.disabled
        ? 'var(--grey, hsl(0, 0%, 85%))'
        : null};
    border-color: ${props =>
      props.error ? 'var(--red, hsl(354, 83%, 64%))' : null};
  }
`;

export const CheckboxLabel = styled.span`
  padding-left: 30px;
  line-height: 24px;
  vertical-align: middle;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked:not(:disabled) ~ span {
    background-color: var(--green, hsl(186, 62%, 59%));
    border-color: hsl(186, 62%, 49%);

    &:after {
      display: block;
    }
  }

  &:checked:disabled ~ span {
    background-color: var(--grey, hsl(186, 62%, 59%));
    color: var(--darkGrey, hsl(0, 0%, 48%));

    &:after {
      display: block;
    }
  }

  &:not(:checked):disabled ~ span {
    background-color: hsl(0, 0%, 96%);
  }

  &:hover:not(:disabled) {
    &:checked ~ span {
      border-color: hsl(186, 62%, 49%);
    }
  }
`;

export const Checkmark = styled.span<CheckboxErrorProps>`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid
    ${props =>
      props.error
        ? 'var(--red, hsl(354, 83%, 64%))'
        : 'var(--grey, hsl(0, 0%, 85%))'};
  border-radius: 100%;
  width: 24px;
  height: 24px;
  transition-duration: 0.3s;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 3px;
    left: 6px;
    width: 5px;
    height: 9px;
    border: solid var(--white, hsl(0, 0%, 100%));
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
