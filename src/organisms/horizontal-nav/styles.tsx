import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, field, misc, typography } from '../../ions/variables';

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
        color: ${colors.black};
        text-transform: capitalize;
        text-decoration: none;
        white-space: nowrap;
        transition-duration: ${misc.transitionDuration};

        svg {
          margin-right: ${rem('5px')};
          width: auto;
          height: ${rem('24px')};
          min-width: ${rem('24px')};
          fill: ${colors.grey200};
          transition-duration: ${misc.transitionDuration};
        }

        &:hover {
          color: ${props =>
            props.customColor ? props.customColor : colors.purple500};

          svg {
            fill: ${props =>
              props.customColor ? props.customColor : colors.purple500};
          }
        }
      }

      &.active {
        font-weight: ${typography.medium};

        a {
          color: ${props =>
            props.customColor ? props.customColor : colors.purple500};
          pointer-events: none;

          svg {
            fill: ${props =>
              props.customColor ? props.customColor : colors.purple500};
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
    border: ${field.borderWidth} solid ${field.borderColor};
    border-radius: ${field.borderRadius};
    background-color: ${field.backgroundColor};
    margin-top: ${rem('5px')};
    padding: 0;
    -moz-box-shadow: ${field.boxShadow};
    -webkit-box-shadow: ${field.boxShadow};
    box-shadow: ${field.boxShadow};
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
      transition-duration: ${misc.transitionDuration};

      &:hover {
        background-color: ${field.borderColor};
        cursor: pointer;

        a {
          color: ${colors.black};

          svg {
            fill: ${colors.black};
          }
        }
      }

      &:first-child {
        border-radius: ${field.borderRadius} ${field.borderRadius} 0 0;
      }

      &:last-child {
        border-radius: 0 0 ${field.borderRadius} ${field.borderRadius};
      }

      a {
        width: 100%;
        height: 100%;
        padding: ${rem('15px')};
      }
    }
  }
`;
