import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
  display: inline-block;

  label {
    margin-bottom: ${rem('5px')};
  }

  &:not(:last-child) {
    margin-bottom: ${rem('15px')};
  }
`;
