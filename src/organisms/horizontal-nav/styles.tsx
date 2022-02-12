import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, fontWeight } from '../../ions/variables';

const { normal, purple, grey, lightGrey, light } = colors;
const { bold } = fontWeight;

interface HorizontalNavInterface {
  customColor?: string;
}

export const Wrapper = styled.div<HorizontalNavInterface>`
  display: flex;
  align-items: center;

  ul.menu {
    width: 0;
    animation: showAnimation 1s forwards;
    animation-delay: 0.5s;
    overflow: hidden;
  }

  @keyframes showAnimation {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  ul {
    margin: 0;
    max-width: max-content;
    padding: 0;

    &.menu {
      display: flex;

      li:not(:last-child) {
        margin-right: ${rem('10px')};
      }
    }

    li {
      position: relative;
      list-style: none;

      a {
        display: flex;
        align-items: center;
        padding: ${rem('10px')};
        color: ${normal};
        text-transform: capitalize;
        text-decoration: none;
        white-space: nowrap;
        transition-duration: 0.3s;

        svg {
          margin-right: ${rem('5px')};
          width: auto;
          height: ${rem('24px')};
          min-width: ${rem('24px')};
          fill: ${grey};
          transition-duration: 0.3s;
        }

        &:hover {
          color: ${props => (props.customColor ? props.customColor : purple)};

          svg {
            fill: ${props => (props.customColor ? props.customColor : purple)};
          }
        }
      }

      &.active {
        font-weight: ${bold};

        a {
          pointer-events: none;

          svg {
            fill: ${props => (props.customColor ? props.customColor : purple)};
          }
        }
      }
    }
  }
`;

export const More = styled.div`
  position: relative;
  display: none;

  &.hide {
    display: initial;
  }

  ul {
    position: absolute;
    right: 0;
    border: ${rem('1px')} solid ${lightGrey};
    border-radius: ${rem('4px')};
    background-color: ${light};
    margin-top: ${rem('5px')};
    padding: 0;
    -moz-box-shadow: 0 0 ${rem('15px')} 0 rgba(40, 40, 40, 0.2);
    -webkit-box-shadow: 0 0 ${rem('15px')} 0 rgba(40, 40, 40, 0.2);
    box-shadow: 0 0 ${rem('15px')} 0 rgba(40, 40, 40, 0.2);
    z-index: 1;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &.more {
      display: none;
    }

    &.is-open {
      display: inherit;
    }

    li {
      list-style: none;
      transition-duration: 0.3s;

      &:hover {
        background-color: ${lightGrey};
        cursor: pointer;

        a {
          color: ${normal};

          svg {
            fill: ${normal};
          }
        }
      }

      &:first-child {
        border-radius: ${rem('4px')} ${rem('4px')} 0 0;
      }

      &:last-child {
        border-radius: 0 0 ${rem('4px')} ${rem('4px')};
      }

      a {
        width: 100%;
        height: 100%;
        padding: ${rem('15px')};
      }
    }
  }
`;
