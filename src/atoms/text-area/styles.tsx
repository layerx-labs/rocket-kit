import styled from 'styled-components';
import { rem, transparentize } from 'polished';
import { colors } from '../../ions/variables';

interface TextAreaProps {
  minimal?: boolean;
  height?: string;
  error?: string;
  minlength?: number;
  maxlength?: number;
}

const { light, grey, lightGrey, red, purple } = colors;

export const Wrapper = styled.div`
  position: relative;
`;

export const TextAreaStyle = styled.textarea<TextAreaProps>`
  border-width: ${props =>
    props.minimal ? `0 0 ${rem('1px')} 0` : rem('1px')};
  border-style: solid;
  border-color: ${props => (props.error ? red : grey)};
  border-radius: ${props => (props.minimal ? 0 : '6px')};
  width: 100%;
  height: ${props => props.height || rem('100px')};
  min-height: rem('40px');
  padding: ${props => (props.minimal ? 0 : rem('10px'))};
  font-family: inherit;
  font-size: 1rem;
  word-break: break-word;
  transition-duration: 0.3s;
  resize: none;

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
`;

export const Count = styled.div<TextAreaProps>`
  position: absolute;
  top: ${props => (props.minimal ? 0 : rem('5px'))};
  right: ${props => (props.minimal ? 0 : rem('10px'))};
  background-color: ${transparentize(0.15, light)};
  padding: 0 ${rem('5px')};

  span {
    font-size: 0.75rem;
    color: ${grey};

    &.negative {
      color: ${red};
    }
  }
`;
