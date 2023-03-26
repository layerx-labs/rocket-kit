import styled from 'styled-components';
import { rem } from 'polished';
import { field, misc } from '../../ions/variables';

interface TextFieldAppendixProps {
  error?: string;
}

interface AppendixProps {
  position: 'left' | 'right';
  error?: string;
}

export const Wrapper = styled.div<TextFieldAppendixProps>`
  border-width: ${field.borderWidth};
  border-style: solid;
  border-color: ${props =>
    props.error ? field.errorBorderColor : field.borderColor};
  border-radius: ${field.borderRadius};
  display: flex;
  transition-duration: ${misc.transitionDuration};
  overflow: hidden;

  &:hover {
    border-color: ${field.hoverBorderColor};
  }

  &:has(input:focus) {
    border-color: ${field.activeBorderColor};
  }

  &:has(input:disabled) {
    background-color: ${field.disabledBackgroundColor};
    color: ${field.disabledColor};

    > div {
      background-color: ${field.disabledBackgroundColor};
      color: ${field.disabledColor};
    }
  }

  input {
    flex: 1;
    border: 0;
    color: ${props => (props.error ? field.errorBorderColor : field.color)};

    &:disabled {
      margin: 0;
      border-radius: 0;
    }
  }

  & + span {
    margin-top: ${props => (props.error ? rem('5px') : 0)};
  }
`;

export const Appendix = styled.div<AppendixProps>`
  border-width: ${props =>
    props.position === 'left'
      ? `0 ${field.borderWidth} 0 0`
      : `0 0 0 ${field.borderWidth}`};
  border-style: solid;
  border-color: ${props =>
    props.error ? field.errorBorderColor : field.borderColor};
  background-color: ${props =>
    props.error ? field.errorBackgroundColor : field.borderColor};
  padding: 0 ${rem('15px')};
  color: ${props => (props.error ? field.errorBorderColor : field.color)};
  line-height: ${rem('48px')};
  vertical-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
