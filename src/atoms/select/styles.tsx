import styled from 'styled-components';
import { rem } from 'polished';
import { colors, field, misc, typography } from '../../ions/variables';

interface SelectStyleProps {
  error?: string;
}

export const SelectStyle = styled.select<SelectStyleProps>`
  border: ${field.borderWidth} solid
    ${props => (props.error ? field.errorBorderColor : field.borderColor)};
  border-radius: ${field.borderRadius};
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><path fill='rgb(217,212,237)' d='M10.827 12.387l5.173 5.173 5.173-5.173c0.52-0.52 1.36-0.52 1.88 0v0c0.52 0.52 0.52 1.36 0 1.88l-6.12 6.12c-0.52 0.52-1.36 0.52-1.88 0l-6.12-6.12c-0.52-0.52-0.52-1.36 0-1.88v0c0.52-0.507 1.373-0.52 1.893 0z'></path></svg>");
  background-position: calc(100% - 15px) center;
  background-repeat: no-repeat;
  background-size: ${rem('30px')};
  background-color: transparent;
  height: ${field.height};
  padding: 0 ${rem('65px')} 0 ${rem('15px')};
  font-size: ${typography.defaultSize};
  appearance: none;
  cursor: pointer;
  transition-duration: ${misc.transitionDuration};

  &:hover {
    border-color: ${field.hoverBorderColor};
  }

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${colors.black};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${field.disabledBackgroundColor};
    color: ${field.disabledColor};
    pointer-events: none;
  }
`;
