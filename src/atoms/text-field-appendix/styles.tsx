import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

interface TextFieldAppendixProps {
  error?: string;
}

interface AppendixProps {
  position: 'left' | 'right';
  error?: string;
}

const { normal, grey, lightGrey, red, lightRed } = colors;

export const Wrapper = styled.div<TextFieldAppendixProps>`
  border-width: ${rem('1px')};
  border-style: solid;
  border-color: ${props => (props.error ? red : grey)};
  border-radius: ${rem('6px')};
  display: flex;
  overflow: hidden;

  input {
    flex: 1;
    border: 0;
    color: ${props => (props.error ? red : normal)};

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
    props.position === 'left' ? `0 ${rem('1px')} 0 0` : `0 0 0 ${rem('1px')}`};
  border-style: solid;
  border-color: ${props => (props.error ? red : grey)};
  background-color: ${props => (props.error ? lightRed : lightGrey)};
  padding: 0 ${rem('15px')};
  color: ${props => (props.error ? red : grey)};
  line-height: ${rem('48px')};
  vertical-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
