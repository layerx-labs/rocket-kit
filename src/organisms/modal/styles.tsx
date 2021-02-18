import styled from 'styled-components';
import { rgba } from 'polished';
import { colors, fontWeigth } from '../../ions/variables';
import { device } from '../../ions/breakpoints';

interface ModalStyleBaseProps {
  zIndex: number;
}

const { light } = colors;
const { bold } = fontWeigth;

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
      margin-top: rem('15px');
      max-width: rem('800px');

      @media ${device.s} {
        margin: rem('50px') auto 0 auto;
      }
    }
  }

  > p + div {
    margin-top: rem('15px');

    &:last-child {
      margin-bottom: 0;
    }
  }

  .bold {
    font-weight: ${bold};
  }
`;

export const ModalHeader = styled.div`
  display: flex;

  h2 {
    margin-bottom: rem('30px');
  }

  button {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: -15px -15px 0 0;
    background-color: ${light};
    width: rem('30px');
    height: rem('30px');
    z-index: 1;

    &:hover {
      background-color: ${light};
    }

    @media ${device.s} {
      display: inherit;
    }
  }
`;
