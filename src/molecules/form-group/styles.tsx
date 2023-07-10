import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, field } from '../../ions/variables';
interface WrapperProps {
  error?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: inline-block;

  > label {
    margin-bottom: ${rem('5px')};
    color: ${props => (props.error ? field.errorBorderColor : colors.grey500)};

    span {
      color: ${props => (props.error ? field.errorBorderColor : field.color)};
    }
  }

  &:not(:last-child) {
    margin-bottom: ${rem('15px')};
  }
`;
