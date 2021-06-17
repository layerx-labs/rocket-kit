import styled from 'styled-components';
import { lighten, rem } from 'polished';
import { colors } from '../../ions/variables';

interface TextAreaProps {
  minimal?: boolean;
  height?: string;
  error?: string;
  minlength?: number;
  maxlength?: number;
}

const { info, danger, purple } = colors;

export const Wrapper = styled.div`
  position: relative;
`;

export const TextAreaStyle = styled.textarea<TextAreaProps>`
  border-width: ${props => (props.minimal ? '0 0 1px 0' : '1px')};
  border-style: solid;
  border-color: ${props => (props.error ? danger : info)};
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
    background-color: ${lighten(0.45, info)};
    color: ${info};
  }

  &:invalid {
    border-color: ${danger};
    outline: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  &:required {
    border-color: ${props => (props.error ? danger : info)};
  }

  &::placeholder {
    color: ${info};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${info};
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: ${info};
    opacity: 1;
  }
`;

export const Count = styled.div<TextAreaProps>`
  position: absolute;
  top: ${props => (props.minimal ? 0 : rem('5px'))};
  right: ${props => (props.minimal ? 0 : rem('10px'))};

  span {
    font-size: 0.75rem;
    color: ${info};

    &.negative {
      color: ${danger};
    }
  }
`;
