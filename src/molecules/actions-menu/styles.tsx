import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { field } from '../../ions/variables';

interface ListInterface {
  rowIndex?: number;
}

export const ActionsMenuStyle = styled.div`
  height: ${rem('50px')};

  button {
    margin-top: ${rem('7px')};
  }
`;

export const List = styled.ul<ListInterface>`
  position: absolute;
  border: ${field.borderWidth} solid ${field.borderColor};
  border-radius: ${field.borderRadius};
  background-color: ${field.backgroundColor};
  margin-top: ${rem('5px')};
  min-width: ${rem('200px')};
  max-width: ${rem('250px')};
  padding: 0;
  -moz-box-shadow: ${field.boxShadow};
  -webkit-box-shadow: ${field.boxShadow};
  box-shadow: ${field.boxShadow};
  overflow: hidden;
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
      background-color: ${field.hoverBorderColor};
      cursor: pointer;
    }

    &.danger {
      border-top: ${field.borderWidth} solid ${field.borderColor};

      a {
        color: ${field.errorBorderColor};
      }
    }

    &.disabled {
      a {
        color: ${field.disabledColor};
        pointer-events: none;
      }

      &:hover {
        background-color: transparent;
      }
    }

    a {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 ${rem('20px')};
      color: ${field.color};
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
