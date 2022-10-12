import styled, { keyframes } from 'styled-components/macro';
import { rem, rgba, timingFunctions } from 'polished';
import { colors, typography } from '../../ions/variables';
import { device } from '../../ions/breakpoints';

interface ModalStyleBaseProps {
  zIndex: number;
}

const { light } = colors;
const { bold } = typography;

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
  background-color: ${rgba(0, 0, 0, 0.8)};
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
  position: fixed;
  right: 0;
  background: ${light};
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  padding: ${rem('15px')};
  word-wrap: break-word;
  animation-timing-function: ${timingFunctions('easeOutQuint')};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transform: translateX(100%);
  animation-name: ${slideInLeft};
  overflow-y: auto;

  @media ${device.s} {
    max-width: ${rem('400px')};
    padding: ${rem('30px')};
  }
`;

export const ModalHeader = styled.div`
  top: 0;

  h2 {
    margin: 0 0 ${rem('30px')} 0;
    font-size: 2rem;
    font-weight: ${bold};
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.s} {
    flex: 1;
  }
`;
