import styled from 'styled-components/macro';
import { ErrorFieldColor } from './types';
import { field } from '../../ions/variables';
import { rem } from 'polished';

import { TextFieldInputStyle as Input } from '../text-field/styles';
import { TextAreaStyle as TextArea } from '../text-area/styles';
import { SelectStyle as Select } from '../select/styles';

interface ErrorStyleProps {
  color: ErrorFieldColor;
}

export const ErrorStyle = styled.span<ErrorStyleProps>`
  display: block;
  font-size: 0.7rem;
  color: ${props =>
    props.color === 'success'
      ? field.successBorderColor
      : field.errorBorderColor};

  ${Input} + &, ${TextArea} + &, ${Select} + & {
    margin-top: ${rem('5px')};
  }
`;
