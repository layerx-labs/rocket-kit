import styled from 'styled-components/macro';
import { rem, rgba } from 'polished';
import { colors } from '../../ions/variables';
import { device } from '../../ions/breakpoints';

interface ModalStyleBaseProps {
  zIndex: number;
}

const { light } = colors;

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

  @media ${device.s} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalContainer = styled.div<ModalStyleBaseProps>`
  position: relative;
  background: ${light};
  width: 100%;
  min-height: 0;
  padding: ${rem('15px')};
  word-wrap: break-word;
  transition-duration: 0.3s;

  @media ${device.s} {
    margin: 0 ${rem('30px')};
    border-radius: 6px;
    max-width: ${rem('860px')};
    padding: ${rem('30px')};
  }
`;

export const ModalHeader = styled.div`
  display: flex;

  h2 {
    margin: 0 0 ${rem('30px')} 0;
  }

  button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: ${rem('-18px')} ${rem('-18px')} 0 0;
    background-color: ${light};
    z-index: 1;

    &:hover {
      background-color: ${light};
    }

    @media ${device.s} {
      display: inherit;
    }
  }
`;
