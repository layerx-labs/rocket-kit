import styled from 'styled-components';
import { rem } from 'polished';
import { field, misc } from '../../ions/variables';

interface ActionsMenuInterface {
  visibleActions: number;
}

export const ActionsMenuStyle = styled.div<ActionsMenuInterface>`
  position: relative;

  ul {
    position: absolute;
    opacity: 0;
    top: 0;
    margin: 0;
    border: ${rem('1px')} solid ${field.borderColor};
    border-radius: ${field.borderRadius};
    background-color: ${field.backgroundColor};
    min-width: ${rem('200px')};
    max-width: ${rem('250px')};
    height: 0;
    max-height: none;
    padding: 0;
    -moz-box-shadow: 0 0 ${rem('15px')} 0 ${field.boxShadow};
    -webkit-box-shadow: 0 0 ${rem('15px')} 0 ${field.boxShadow};
    box-shadow: 0 0 ${rem('15px')} 0 ${field.boxShadow};
    overflow-y: hidden;
    z-index: 1;
    -webkit-scrollbar-width: none;
    -moz-scrollbar-width: none;
    -ms-scrollbar-width: none;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    transition-duration: ${misc.transitionDuration};

    &.isOpen {
      opacity: 1;
      // prettier-ignore
      height: calc(${rem('45px')} * ${props => props.visibleActions} + ${rem(
        '2px'
      )});
      max-height: ${rem('1280px')};
    }

    li {
      list-style: none;
      min-height: ${rem('45px')};
      display: flex;
      transition-duration: 0.3s;

      &:hover {
        background-color: ${field.borderColor};
        cursor: pointer;
      }

      &:first-child {
        border-radius: ${rem('4px')} ${rem('4px')} 0 0;
      }

      &:last-child {
        border-radius: 0 0 ${rem('4px')} ${rem('4px')};
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
  }
`;
