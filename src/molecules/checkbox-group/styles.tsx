import styled, { css } from 'styled-components';
import { rem } from 'polished';

interface CheckboxGroupProps {
  type?: 'row' | 'column';
  error?: string;
}

export const Wrapper = styled.ul<CheckboxGroupProps>`
  display: flex;
  flex-direction: ${props => (props.type === 'column' ? 'column' : 'row')};
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    min-height: ${rem('24px')};

    &:not(:last-child) {
      ${props =>
        props.type === 'row' &&
        css`
          margin-right: ${rem('30px')};
        `}

      ${props =>
        props.type === 'column' &&
        css`
          margin-bottom: ${rem('10px')};
        `}
    }
  }
`;
