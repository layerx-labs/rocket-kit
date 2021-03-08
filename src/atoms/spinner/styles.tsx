import styled, { keyframes } from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

interface LoadingProps {
  fill?: string;
  size?: string;
}

const { light } = colors;

const rotation = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div<LoadingProps>`
  border: 5px solid hsla(0, 0%, 48%, 0.5);
  border-top-color: ${props => props.fill || light};
  border-radius: 50%;
  width: ${props => props.size || rem('20px')};
  height: ${props => props.size || rem('20px')};
  animation: ${rotation} 0.8s ease infinite;
`;
