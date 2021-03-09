import styled from 'styled-components/macro';
import { ErrorFieldColor } from './types';
import { colors } from '../../ions/variables';
import { rem } from 'polished';

import { TextFieldInputStyle as Input } from '../text-field/styles';

interface ErrorStyleProps {
  color: ErrorFieldColor;
}

const { primary, danger } = colors;

export const ErrorStyle = styled.span<ErrorStyleProps>`
  display: block;
  font-size: 0.7rem;
  color: ${props => (props.color === 'success' ? primary : danger)};

  ${Input} + & {
    margin-top: ${rem('5px')};
  }
`;
