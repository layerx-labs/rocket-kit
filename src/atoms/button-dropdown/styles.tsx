import styled from 'styled-components/macro';
import { rem, lighten } from 'polished';
import { colors } from '../../ions/variables';

const { normal, light, lightGrey } = colors;

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
    border: 1px solid ${lightGrey};
    border-radius: 4px;
    background-color: ${light};
    min-width: ${rem('200px')};
    max-width: ${rem('250px')};
    height: 0;
    max-height: none;
    padding: 0;
    -moz-box-shadow: 0 0 ${rem('15px')} 0 ${lighten(0.7, normal)};
    -webkit-box-shadow: 0 0 ${rem('15px')} 0 ${lighten(0.7, normal)};
    box-shadow: 0 0 ${rem('15px')} 0 ${lighten(0.7, normal)};
    overflow-y: hidden;
    z-index: 1;
    -webkit-scrollbar-width: none;
    -moz-scrollbar-width: none;
    -ms-scrollbar-width: none;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    transition-duration: 0.25s;

    &.isOpen {
      opacity: 1;
      height: calc(${rem('45px')} * ${props => props.visibleActions} + 2px);
      max-height: 1280px;
    }

    li {
      list-style: none;
      min-height: ${rem('45px')};
      display: flex;
      transition-duration: 0.3s;

      &:hover {
        background-color: ${lightGrey};
        cursor: pointer;
      }

      &:first-child {
        border-radius: 4px 4px 0 0;
      }

      &:last-child {
        border-radius: 0 0 4px 4px;
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
  }
`;
