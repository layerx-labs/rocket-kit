import styled from 'styled-components';
import { rem } from 'polished';
import { colors, fontWeight } from '../../ions/variables';

interface PageControlProps {
  dark?: boolean;
}

const { normal, light, blue, grey, lightGrey } = colors;
const { bold } = fontWeight;

export const PaginationWrapper = styled.div<PageControlProps>`
  --size: ${rem('30px')};

  ul.pagination {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style: none;

    li {
      min-width: var(--size);
      height: var(--size);
      cursor: pointer;

      &.previous,
      &.next {
        transition-duration: 0.3s;

        a svg {
          transition-duration: 0.3s;
        }
      }

      a,
      .break {
        min-width: var(--size);
        height: var(--size);
        transition-duration: 0.3s;
      }

      a {
        border-radius: ${rem('8px')};
        min-width: var(--size);
        height: var(--size);
        padding: 0 ${rem('5px')};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${grey};
        font-weight: ${bold};
        text-decoration: none;

        &:hover {
          color: ${normal};
        }

        svg {
          width: ${rem('18px')};
          height: auto;
          fill: ${blue};
        }
      }

      &.active {
        pointer-events: none;

        a {
          background-color: ${blue};
          color: ${light};
        }
      }
    }

    &.dark {
      a {
        color: ${lightGrey};

        &:hover {
          color: ${light};
        }
      }
    }
  }
`;
