import styled, { keyframes } from 'styled-components/macro';
import { rem, rgba, timingFunctions } from 'polished';
import { colors, typography } from '../../ions/variables';
import { device } from '../../ions/breakpoints';

interface ModalStyleBaseProps {
  zIndex: number;
}

const slideInLeft = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const ModalOverlay = styled.div<ModalStyleBaseProps>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${rgba(colors.black, 0.8)};
  width: 100vw;
  height: 100vh;
  z-index: ${props => (props.zIndex ? props.zIndex : 10)};
`;

export const ModalWrapper = styled.div<ModalStyleBaseProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: ${props => props.zIndex + 1};
`;

export const ModalContainer = styled.div<ModalStyleBaseProps>`
  margin-left: auto;
  background: ${colors.white};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: ${rem('15px')};
  word-wrap: break-word;
  animation-timing-function: ${timingFunctions('easeOutQuint')};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transform: translateX(100%);
  animation-name: ${slideInLeft};

  @media ${device.s} {
    max-width: ${rem('400px')};
    padding: ${rem('30px')};
  }
`;

export const ModalHeader = styled.div`
  top: 0;

  h2 {
    margin: 0 0 ${rem('30px')} 0;
    font-size: ${rem('32px')};
    font-weight: ${typography.semiBold};
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.s} {
    flex: 1;
  }
`;
