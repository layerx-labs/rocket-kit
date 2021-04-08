import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

const { info, danger } = colors;

interface WrapperProps {
  error?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: inline-block;

  label {
    margin-bottom: ${rem('5px')};
    color: ${props => (props.error ? danger : info)};
  }

  &:not(:last-child) {
    margin-bottom: ${rem('15px')};
  }
`;
