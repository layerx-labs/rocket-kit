import styled from 'styled-components';
import { device } from '../../ions/breakpoints';

interface ModalStyleBaseProps {
  zIndex: number;
}

export const ModalOverlay = styled.div<ModalStyleBaseProps>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(231, 163, 163, 0.8);
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

  @media ${device.s} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalContainer = styled.div<ModalStyleBaseProps>`
  position: relative;
  background: var(--white, hsl(0, 0%, 100%));
  width: 100%;
  min-height: 0;
  padding: 15px;
  word-wrap: break-word;
  transition-duration: 0.3s;

  @media ${device.s} {
    margin: 0 30px;
    border-radius: 6px;
    max-width: 860px;
    padding: 30px;
  }

  &.focus {
    margin: 0;
    border-radius: 0;
    max-width: 100vw;
    min-height: 100vh;

    > div {
      flex: 1;
    }

    .modal-footer {
      margin-top: 15px;
      max-width: 800px;

      @media ${device.s} {
        margin: 50px auto 0 auto;
      }
    }
  }

  > p + div {
    margin-top: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .bold {
    font-weight: var(--bold, 700);
  }
`;

export const ModalHeader = styled.div`
  display: flex;

  h2 {
    margin-bottom: 30px;
  }

  button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: -15px -15px 0 0;
    background-color: var(--white, hsl(0, 0%, 100%));
    width: 30px;
    height: 30px;
    z-index: 1;

    &:hover {
      background-color: var(--white, hsl(0, 0%, 100%));
    }

    @media ${device.s} {
      display: inherit;
    }
  }
`;
