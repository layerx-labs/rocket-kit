import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

const { normal, grey, red } = colors;

interface WrapperProps {
  error?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: inline-block;

  > label {
    margin-bottom: ${rem('5px')};
    color: ${props => (props.error ? red : grey)};

    span {
      color: ${props => (props.error ? red : normal)};
    }
  }

  &:not(:last-child) {
    margin-bottom: ${rem('15px')};
  }
`;
