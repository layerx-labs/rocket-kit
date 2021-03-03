import styled from 'styled-components';
import { rem, lighten } from 'polished';
import { colors, fontWeigth } from '../../ions/variables';

const { normal, primary, info, light } = colors;
const { bold } = fontWeigth;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ul {
    max-width: max-content;
    margin: 0;
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
          fill: ${lighten(0.4, info)};
          transition-duration: 0.3s;
        }

        &:hover {
          color: ${primary};

          svg {
            fill: ${primary};
          }
        }
      }

      &.active {
        font-weight: ${bold};

        a {
          pointer-events: none;

          svg {
            fill: ${primary};
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
    border: 1px solid ${lighten(0.4, info)};
    border-radius: 4px;
    background-color: ${light};
    margin-top: 5px;
    padding: 0;
    -moz-box-shadow: 0 0 15px 0 rgba(40, 40, 40, 0.2);
    -webkit-box-shadow: 0 0 15px 0 rgba(40, 40, 40, 0.2);
    box-shadow: 0 0 15px 0 rgba(40, 40, 40, 0.2);
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
        background-color: ${lighten(0.4, info)};
        cursor: pointer;

        a {
          color: ${normal};

          svg {
            fill: ${normal};
          }
        }
      }

      &:first-child {
        border-radius: 4px 4px 0 0;
      }

      &:last-child {
        border-radius: 0 0 4px 4px;
      }

      a {
        width: 100%;
        height: 100%;
        padding: 15px;
      }
    }
  }
`;
