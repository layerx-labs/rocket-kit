import styled from 'styled-components';
import { lighten } from 'polished';
import { colors } from '../../ions/variables';

const { normal, light, info, danger } = colors;

export const ActionsMenuStyle = styled.div`
  height: 50px;

  button {
    margin-top: 7px;
  }

  ul {
    position: absolute;
    border: 1px solid ${lighten(0.4, info)};
    border-radius: 4px;
    background-color: ${light};
    margin-top: 5px;
    min-width: 200px;
    max-width: 250px;
    padding: 0;
    -moz-box-shadow: 0 0 15px 0 ${lighten(0.7, normal)};
    -webkit-box-shadow: 0 0 15px 0 ${lighten(0.7, normal)};
    box-shadow: 0 0 15px 0 ${lighten(0.7, normal)};
    z-index: 1;

    li {
      list-style: none;
      min-height: 45px;
      display: flex;
      transition-duration: 0.3s;

      &:hover {
        background-color: ${lighten(0.4, info)};
        cursor: pointer;
      }

      &:first-child {
        border-radius: 4px 4px 0 0;
      }

      &:last-child {
        border-radius: 0 0 4px 4px;
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
        padding: 0 20px;
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
