import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  fill?: string;
  size?: string;
}

const rotation = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div<LoadingProps>`
  border: 5px solid rgba(255, 255, 255, 0.4);
  border-top-color: ${(props) =>
    props.fill || 'var(--white, hsl(0, 0%, 100%))'};
  border-radius: 50%;
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  animation: ${rotation} 0.8s ease infinite;
`;
