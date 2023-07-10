import styled from 'styled-components';
import { rem } from 'polished';
import { colors, field, misc, typography } from '../../ions/variables';

interface PageControlProps {
  dark?: boolean;
}

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
        transition-duration: ${misc.transitionDuration};

        a svg {
          transition-duration: ${misc.transitionDuration};
        }
      }

      a,
      .break {
        min-width: var(--size);
        height: var(--size);
        transition-duration: ${misc.transitionDuration};
      }

      a {
        border-radius: ${field.borderRadius};
        min-width: var(--size);
        height: var(--size);
        padding: 0 ${rem('5px')};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.black};
        font-weight: ${typography.semiBold};
        text-decoration: none;

        &:hover {
          color: ${colors.blue500};
        }

        svg {
          width: ${rem('18px')};
          height: auto;
          fill: ${colors.blue500};
        }
      }

      &.active {
        pointer-events: none;

        a {
          background-color: ${colors.blue500};
          color: ${colors.white};
        }
      }
    }

    &.dark {
      a {
        color: ${colors.white};

        &:hover {
          color: ${colors.white};
        }
      }
    }
  }
`;
