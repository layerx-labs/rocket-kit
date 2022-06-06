import styled, { css } from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../../ions/variables';
import icons from '../../ions/icons';

interface InputStyleProps {
  minimal?: boolean;
  icon?: string;
  error?: string;
}

const { grey, lightGrey, red, purple } = colors;

export const TextFieldInputStyle = styled.input<InputStyleProps>`
  border-width: ${props =>
    props.minimal ? `0 0 ${rem('1px')} 0` : rem('1px')};
  border-style: solid;
  border-color: ${props => (props.error ? red : grey)};
  border-radius: ${props => (props.minimal ? 0 : '6px')};
  height: ${props => (props.minimal ? rem('40px') : rem('50px'))};
  padding: ${props => (props.minimal ? 0 : rem('10px'))};
  font-family: inherit;
  font-size: 1rem;
  transition-duration: 0.3s;

  &:focus {
    border-color: ${purple};
    outline: none;
  }

  &:disabled {
    background-color: ${lightGrey};
    color: ${grey};
  }

  &:invalid {
    border-color: ${red};
    outline: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  &:required {
    border-color: ${props => (props.error ? red : grey)};
  }

  &::placeholder {
    color: ${grey};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${grey};
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: ${grey};
    opacity: 1;
  }

  ${props =>
    props.icon &&
    css`
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32"><path style="fill:hsl(0, 0%, 58%)" d=${JSON.stringify(
        icons[props.icon]
      )} /></svg>');
      padding-left: ${props.minimal ? '40px' : '50px'};
      background-repeat: no-repeat;
      background-size: ${rem('30px')} ${rem('30px')};
      background-position: ${props.minimal ? 0 : '10px'} 50%;

      &:focus {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32">
        <path style="fill:hsl(252, 60%, 41%)" d=${JSON.stringify(
          icons[props.icon]
        )} /></svg>');
      }
    `}
`;
