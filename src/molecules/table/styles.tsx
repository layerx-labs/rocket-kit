import styled, { css } from 'styled-components/macro';
import { rem } from 'polished';
import { colors, typography } from '../../ions/variables';
import { device } from '../../ions/breakpoints';

const { normal, light, grey, lightGrey } = colors;
const { bold } = typography;

interface TableProps {
  border?: boolean;
  loadingState?: boolean;
}

export const TableWrapper = styled.div`
  position: relative;
`;

export const OverflowWrapper = styled.div`
  @media ${device.s} {
    display: block;
    border-radius: ${rem('6px')};
    background: linear-gradient(to right, ${light} 30%, rgba(255, 255, 255, 0)),
      linear-gradient(to right, rgba(255, 255, 255, 0), ${light} 70%) 0 100%,
      radial-gradient(
        farthest-side at 0% 50%,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
          farthest-side at 100% 50%,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0)
        )
        0 100%;
    background-repeat: no-repeat;
    background-color: #fff;
    background-size: ${rem('40px')} 100%, ${rem('40px')} 100%,
      ${rem('14px')} 100%, ${rem('14px')} 100%;
    background-position: 0 0, 100%, 0 0, 100%;
    background-attachment: local, local, scroll, scroll;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    -webkit-scrollbar-width: none;
    -moz-scrollbar-width: none;
    -ms-scrollbar-width: none;
    scrollbar-width: none;
  }
`;

export const Table = styled.table<TableProps>`
  width: 100%;
  border-width: 0;
  border-style: solid;
  border-color: ${grey};
  border-radius: ${rem('6px')};
  border-spacing: 0;
  white-space: nowrap;

  @media ${device.s} {
    border-width: ${props => (props.border ? rem('1px') : '0')};
  }

  th,
  td {
    height: ${rem('50px')};
    padding: 0 ${rem('15px')};

    &.center {
      text-align: center;

      > div {
        justify-content: center;
      }
    }

    &.right {
      text-align: right;

      > div {
        justify-content: flex-end;
      }
    }

    &.thin {
      @media ${device.s} {
        max-width: min-content;
      }
    }

    &.kai {
      text-align: right;

      > div {
        justify-content: flex-end;
      }
    }

    &.avatar > div {
      display: flex;
      align-items: center;

      .avatar-img {
        margin-right: ${rem('15px')};
      }
    }
  }

  th {
    font-size: 0.85rem;

    &:first-child {
      border-top-left-radius: ${rem('6px')};
    }

    &:last-child {
      border-top-right-radius: ${rem('6px')};
    }
  }

  tr {
    border: ${rem('1px')} solid ${grey};
    border-radius: ${rem('6px')};
    position: relative;

    &:not(:last-child) {
      margin-bottom: ${rem('15px')};
    }

    @media ${device.s} {
      border: 0;
    }
  }

  thead {
    border: none;
    clip: rect(0 0 0 0);
    height: ${rem('1px')};
    margin: ${rem('-1px')};
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: ${rem('1px')};

    @media ${device.s} {
      display: contents;
      font-weight: ${bold};
      color: ${grey};
      text-transform: uppercase;
      text-align: left;
    }
  }

  tbody {
    tr {
      display: block;
      transition-duration: 0.3s;

      &:hover {
        background-color: ${props =>
          props.loadingState ? 'transparent' : lightGrey};

        td.menu {
          button {
            opacity: 1;
          }
        }
      }

      @media ${device.s} {
        display: table-row;
      }
    }

    td {
      border-top: ${rem('1px')} solid ${grey};
      height: inherit;
      min-height: ${rem('50px')};
      padding: ${rem('15px')};
      display: flex;
      justify-content: flex-end;
      align-items: center;

      > div {
        margin-left: ${rem('100px')};
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        text-align: right;

        > span {
          display: none;

          &:first-child,
          &:last-child {
            display: inherit;
          }
        }
      }

      img {
        min-width: ${rem('30px')};
        min-height: ${rem('30px')};
      }

      a {
        display: flex;
        align-items: center;
        color: ${normal};
        text-decoration-color: ${grey};
      }

      &:first-child {
        border: 0;
      }

      &:before {
        position: absolute;
        left: ${rem('15px')};
        content: attr(data-label);
        font-weight: ${bold};
        text-transform: capitalize;

        ${props =>
          props.loadingState &&
          css`
            width: ${rem('75px')};
            height: ${rem('15px')};
            background: #f6f7f8;
            background-image: -webkit-linear-gradient(
              left,
              #f6f7f8 0%,
              #edeef1 20%,
              #f6f7f8 40%,
              #f6f7f8 100%
            );
            background-repeat: no-repeat;
            background-size: ${rem('800px')} 100%;
            animation-fill-mode: forwards;
            animation-name: placeholderSkeleton;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-duration: 1.5s;
          `}
      }

      &.kai {
        svg {
          float: right;
          width: auto;
          min-width: ${rem('20px')};
          max-height: ${rem('20px')};
        }
      }

      .avatar-img {
        display: none;
      }

      .tag {
        margin: 0;

        &:not(:first-child) {
          display: none;
        }
      }

      &.menu {
        padding: 0 ${rem('10px')} 0 0;

        button {
          margin-top: ${rem('5px')};
          transition: 0.3s;
        }

        ul {
          top: ${rem('36px')};
          margin-left: ${rem('-170px')};
        }
      }

      @media ${device.s} {
        display: table-cell;
        height: ${rem('50px')};
        padding: 0 ${rem('15px')};

        > div {
          position: relative;
          margin-left: 0;
          display: flex-start;
          justify-content: flex-start;
          text-align: left;

          > span {
            display: inherit;
          }
        }

        &:first-child {
          border-top: ${rem('1px')} solid ${grey};
        }

        &:before {
          content: '';
        }

        &.kai {
          max-width: ${rem('100px')};
        }

        .avatar-img {
          display: inherit;
        }

        .tag {
          &:not(:first-child) {
            display: inherit;
          }

          &:not(:last-child) {
            margin-right: ${rem('5px')};
          }
        }

        &.menu {
          width: ${rem('40px')};

          button {
            opacity: 0;
          }
        }
      }
    }
  }
`;

export const SkeletonCell = styled.div`
  @keyframes placeholderSkeleton {
    0% {
      background-position: ${rem('-800px')} 0;
    }
    100% {
      background-position: ${rem('800px')} 0;
    }
  }

  width: 100%;
  height: ${rem('15px')} !important;
  background: #f6f7f8;
  background-image: -webkit-linear-gradient(
    left,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: ${rem('800px')} 100%;
  animation-fill-mode: forwards;
  animation-name: placeholderSkeleton;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
`;
