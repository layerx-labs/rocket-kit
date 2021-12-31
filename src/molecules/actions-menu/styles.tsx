import styled, { css } from 'styled-components/macro';
import { lighten, rem } from 'polished';
import { colors } from '../../ions/variables';

interface ListInterface {
  rowIndex?: number;
}

const { normal, light, info, danger } = colors;

export const ActionsMenuStyle = styled.div`
  height: ${rem('50px')};

  button {
    margin-top: ${rem('7px')};
  }
`;

export const List = styled.ul<ListInterface>`
  position: absolute;
  border: 1px solid ${lighten(0.4, info)};
  border-radius: 4px;
  background-color: ${light};
  margin-top: 5px;
  min-width: ${rem('200px')};
  max-width: ${rem('250px')};
  padding: 0;
  -moz-box-shadow: 0 0 ${rem('15px')} 0 ${lighten(0.7, normal)};
  -webkit-box-shadow: 0 0 ${rem('15px')} 0 ${lighten(0.7, normal)};
  box-shadow: 0 0 ${rem('15px')} 0 ${lighten(0.7, normal)};
  z-index: 1;

  ${props =>
    props.rowIndex != undefined &&
    css`
      --margin: ${`calc(${rem('45px')} + ${rem('50px')} * ${
        props.rowIndex
      } + ${rem('42px')})`};
      top: var(--margin);
      right: ${rem('5px')};
    `}

  li {
    list-style: none;
    min-height: ${rem('45px')};
    display: flex;
    transition-duration: 0.3s;

    &:hover {
      background-color: ${lighten(0.4, info)};
      cursor: pointer;
    }

    &:first-child {
      border-radius: ${rem('4px')} ${rem('4px')} 0 0;
    }

    &:last-child {
      border-radius: 0 0 ${rem('4px')} ${rem('4px')};
    }

    &.danger {
      border-top: 1px solid ${lighten(0.4, info)};

      a {
        color: ${danger};
      }
    }

    a {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 ${rem('20px')};
      color: ${normal};
      text-decoration: none;
      white-space: nowrap;

      span {
        display: table-cell;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
