import styled, { css } from 'styled-components';
import icons from '../../ions/icons';

interface InputStyleProps {
  minimal?: boolean;
  error?: string;
  icon?: string;
}

export const TextFieldInputStyle = styled.input<InputStyleProps>`
  border-width: ${props => (props.minimal ? '0 0 1px 0' : '1px')};
  border-style: solid;
  border-color: ${props =>
    props.error
      ? 'var(--red, hsl(354, 83%, 64%))'
      : 'var(--grey, hsl(0, 0%, 85%))'};
  border-radius: ${props => (props.minimal ? 0 : '6px')};
  height: ${props => (props.minimal ? '40px' : '50px')};
  padding: ${props => (props.minimal ? 0 : '10px')};
  font-family: inherit;
  font-size: 1rem;
  transition-duration: 0.3s;

  &:focus {
    border-color: var(--purple, hsl(256, 55%, 43%));
  }

  &:disabled {
    background-color: hsl(0, 0%, 98%);
    color: var(--darkGrey, hsl(0, 0%, 48%));
  }

  &::placeholder {
    color: var(--grey, hsl(0, 0%, 85%));
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: var(--grey, hsl(0, 0%, 85%));
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: var(--grey, hsl(0, 0%, 85%));
    opacity: 1;
  }

  ${props =>
    props.icon &&
    css`
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32">
        <path style="fill:hsl(0, 0%, 85%)" d=${JSON.stringify(
          icons[props.icon]
        )} /></svg>');
      padding-left: 50px;
      background-repeat: no-repeat;
      background-size: 30px 30px;
      background-position: 10px 50%;
    `}
`;
