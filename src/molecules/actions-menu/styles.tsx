import styled from 'styled-components';

export const ActionsMenuStyle = styled.div`
  display: inline-block !important;
  height: 50px !important;

  button {
    margin-top: 7px !important;
  }

  ul {
    position: absolute;
    border: 1px solid var(--grey, hsl(0, 0%, 85%));
    border-radius: 4px;
    background-color: var(--white, hsl(0, 0%, 100%));
    margin-top: 5px;
    width: 200px;
    padding: 0;
    -moz-box-shadow: 0 0 15px 0 rgba(40, 40, 40, 0.2);
    -webkit-box-shadow: 0 0 15px 0 rgba(40, 40, 40, 0.2);
    box-shadow: 0 0 15px 0 rgba(40, 40, 40, 0.2);
    z-index: 1;

    li {
      list-style: none;
      min-height: 45px;
      transition-duration: 0.3s;

      &:hover {
        background-color: var(--lightGrey, hsl(0, 0%, 98%));
        cursor: pointer;
      }

      &:first-child {
        border-radius: 4px 4px 0 0;
      }

      &:last-child {
        border-radius: 0 0 4px 4px;
      }

      &.danger {
        border-top: 1px solid var(--grey, hsl(0, 0%, 85%));

        a {
          color: var(--red, hsl(354, 83%, 64%));
        }
      }

      a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        color: var(--default, hsl(0, 0%, 16%));
        text-decoration: none;
      }
    }
  }
`;
