import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: 10px;

  li {
    list-style: none;
    border: 1px solid var(--grey, hsl(0, 0%, 85%));
    width: 120px;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      &:first-child {
        height: 70px;

        svg {
          width: auto;
          height: 50px;
        }
      }

      &:last-child {
        background-color: var(--grey, hsl(0, 0%, 85%));
        height: 30px;

        span {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
