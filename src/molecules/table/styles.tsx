import styled from 'styled-components';
import { device } from '../../ions/breakpoints';

export const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0;
  white-space: nowrap;

  th,
  td {
    height: 50px;
    padding: 0 15px;

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

      img {
        margin-right: 15px;
      }
    }
  }

  th {
    font-size: 0.85rem;
    background-color: var(--white, hsl(0, 0%, 100%));

    &:first-child {
      border-top-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
    }
  }

  tr {
    border: 1px solid var(--darkGrey, hsl(0, 0%, 48%));
    border-radius: 6px;
    position: relative;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    @media ${device.s} {
      border: 0;
    }
  }

  thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    @media ${device.s} {
      display: contents;
      font-weight: var(--bold, 700);
      color: var(--grey, hsl(0, 0%, 85%));
      text-transform: uppercase;
      text-align: left;
    }
  }

  tbody {
    tr {
      display: block;
      transition-duration: 0.3s;

      &:hover {
        background-color: var(--lightGrey, hsl(0, 0%, 98%));

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
      border-top: 1px solid var(--grey, hsl(0, 0%, 85%));
      height: inherit;
      min-height: 50px;
      padding: 15px;
      display: flex;
      justify-content: flex-end;

      > div {
        margin-left: 100px;
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
        min-width: 30px;
        min-height: 30px;
      }

      a {
        display: flex;
        align-items: center;
        color: var(--default, hsl(0, 0%, 16%));
        text-decoration-color: var(--grey, hsl(0, 0%, 85%));
      }

      &:first-child {
        border: 0;
      }

      &:before {
        position: absolute;
        left: 15px;
        content: attr(data-label);
        font-weight: var(--bold, 700);
        text-transform: capitalize;
      }

      &.kai {
        svg {
          float: right;
          width: auto;
          min-width: 20px;
          max-height: 20px;
        }
      }

      img {
        display: none;
      }

      .tag {
        margin: 0;

        &:not(:first-child) {
          display: none;
        }
      }

      &.menu {
        padding: 0 10px 0 0;

        button {
          margin-top: 5px;
          transition: 0.3s;
        }

        ul {
          margin-left: -170px;
        }
      }

      @media ${device.s} {
        display: table-cell;
        height: 50px;
        padding: 0 15px;
        align-items: center;

        > div {
          margin-left: 0;
          display: flex-start;
          justify-content: flex-start;
          text-align: left;

          > span {
            display: inherit;
          }
        }

        &:first-child {
          border-top: 1px solid var(--grey, hsl(0, 0%, 85%));
        }

        &:before {
          content: '';
        }

        &.kai {
          max-width: 100px;
        }

        img {
          display: inherit;
        }

        .tag {
          &:not(:first-child) {
            display: inherit;
          }

          &:not(:last-child) {
            margin-right: 5px;
          }
        }

        &.menu {
          width: 40px;

          button {
            opacity: 0;
          }
        }
      }
    }
  }
`;
