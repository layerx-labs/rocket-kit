import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

interface LoadingProps {
  fill?: string;
  size?: string;
}

export const Loading = styled.div<LoadingProps>`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  border: ${rem('5px')} solid hsla(0, 0%, 48%, 0.5);
  border-top-color: ${props => props.fill || colors.white};
  border-radius: 50%;
  width: ${props => props.size || rem('20px')};
  height: ${props => props.size || rem('20px')};
  animation: rotation 0.8s ease infinite;
`;
