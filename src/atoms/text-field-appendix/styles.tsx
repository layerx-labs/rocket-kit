import styled from 'styled-components';
import { rem, lighten } from 'polished';
import { colors } from '../../ions/variables';

interface TextFieldAppendixProps {
  error?: string;
}

interface AppendixProps {
  position: 'left' | 'right';
  error?: string;
}

const { normal, info, danger } = colors;

export const Wrapper = styled.div<TextFieldAppendixProps>`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? danger : info)};
  border-radius: 6px;
  display: flex;
  overflow: hidden;

  input {
    flex: 1;
    border: 0;
    color: ${props => (props.error ? danger : normal)};
  }

  & + span {
    margin-top: ${props => (props.error ? rem('5px') : 0)};
  }
`;

export const Appendix = styled.div<AppendixProps>`
  border-width: ${props =>
    props.position === 'left' ? '0 1px 0 0' : '0 0 0 1px'};
  border-style: solid;
  border-color: ${props => (props.error ? danger : info)};
  background-color: ${props =>
    props.error ? lighten(0.25, danger) : lighten(0.4, info)};
  padding: 0 ${rem('15px')};
  color: ${props => (props.error ? danger : info)};
  line-height: ${rem('48px')};
  vertical-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
