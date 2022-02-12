import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

interface SelectStyleProps {
  minimal?: boolean;
  error?: string;
}

const { normal, grey, lightGrey, red, purple } = colors;

export const SelectStyle = styled.select<SelectStyleProps>`
  border: ${rem('1px')} solid ${props => (props.error ? red : grey)};
  border-radius: ${rem('6px')};
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path fill='hsl(0, 0%, 85%)' d='M10.827 12.387l5.173 5.173 5.173-5.173c0.52-0.52 1.36-0.52 1.88 0v0c0.52 0.52 0.52 1.36 0 1.88l-6.12 6.12c-0.52 0.52-1.36 0.52-1.88 0l-6.12-6.12c-0.52-0.52-0.52-1.36 0-1.88v0c0.52-0.507 1.373-0.52 1.893 0z'></path></svg>");
  background-position: calc(100% - 15px) center;
  background-repeat: no-repeat;
  background-size: ${rem('30px')};
  background-color: transparent;
  height: ${rem('50px')};
  padding: 0 ${rem('65px')} 0 ${rem('15px')};
  font-size: 1rem;
  appearance: none;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    border-color: ${purple};
  }

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${normal};
  }

  &:disabled {
    background-color: ${lightGrey};
    color: ${grey};
    pointer-events: none;
  }

  ${props =>
    props.minimal &&
    css`
      border: 0;
      border-bottom: ${rem('1px')} solid
        ${(props: SelectStyleProps) => (props.error ? red : grey)};
      border-radius: 0;
      background-position: 100% center;
      height: ${rem('40px')};
      padding: 0 ${rem('35px')} 0 0;

      &:disabled {
        background-color: transparent;
        color: ${grey};
      }
    `}
`;
