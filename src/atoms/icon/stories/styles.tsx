import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../../../ions/variables';

const { lightGrey } = colors;

export const List = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: ${rem('10px')};

  li {
    list-style: none;
    border: ${rem('1px')} solid ${lightGrey};
    width: ${rem('120px')};

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      &:first-child {
        height: ${rem('70px')};

        svg {
          width: auto;
          height: ${rem('50px')};
        }
      }

      &:last-child {
        background-color: ${lightGrey};
        height: ${rem('30px')};

        span {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
