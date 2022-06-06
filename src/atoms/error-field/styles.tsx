import styled from 'styled-components/macro';
import { ErrorFieldColor } from './types';
import { colors } from '../../ions/variables';
import { rem } from 'polished';

import { TextFieldInputStyle as Input } from '../text-field/styles';
import { TextAreaStyle as TextArea } from '../text-area/styles';
import { SelectStyle as Select } from '../select/styles';

interface ErrorStyleProps {
  color: ErrorFieldColor;
}

const { green, red } = colors;

export const ErrorStyle = styled.span<ErrorStyleProps>`
  display: block;
  font-size: 0.7rem;
  color: ${props => (props.color === 'success' ? green : red)};

  ${Input} + &, ${TextArea} + &, ${Select} + & {
    margin-top: ${rem('5px')};
  }
`;
