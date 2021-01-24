import styled from 'styled-components';
import { ErrorFieldColor } from './types';

interface ErrorStyleProps {
  color: ErrorFieldColor;
}

export const ErrorStyle = styled.span<ErrorStyleProps>`
  display: block;
  margin-top: 5px;
  font-size: 0.7rem;
  color: ${props =>
    props.color === 'success'
      ? 'var(--green, hsl(186, 62%, 59%))'
      : 'var(--red, hsl(354, 83%, 64%))'};
`;
