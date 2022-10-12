import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, typography } from '../../ions/variables';
import { device } from '../../ions/breakpoints';

const { normal, grey, lightGrey } = colors;
const { bold } = typography;

interface TableDnDProps {
  border?: boolean;
  layout?: 'fixed' | 'auto';
  draggableId?: string;
}

export const Table = styled.table<TableDnDProps>`
  position: relative;
  width: 100%;
  border-width: ${props => (props.border ? '1px' : '0')};
  border-style: solid;
  border-color: ${grey};
  border-radius: ${rem('6px')};
  border-spacing: 0;
  white-space: nowrap;
  table-layout: ${props => props.layout};

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
        background-color: ${lightGrey};

        td {
          &.drag-handle {
            svg {
              fill: ${grey};
            }
          }

          &.menu {
            button {
              opacity: 1;
            }
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

      &.drag-handle {
        > div {
          width: min-content;
        }

        svg {
          width: ${rem('30px')};
          height: ${rem('30px')};
          fill: ${grey};
          transition-duration: 0.3s;
        }
      }

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
        align-items: center;

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

export const TableRow = styled.tr<TableDnDProps>`
  &[data-rbd-draggable-id='${props => props.draggableId}'] {
    position: absolute;
    display: table;
    width: 100%;
  }
`;
