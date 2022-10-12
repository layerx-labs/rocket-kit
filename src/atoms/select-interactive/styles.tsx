import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

const { normal, light, grey, lightGrey, purple500, lightPurple } = colors;

export const SelectWrapper = styled.div`
  .select {
    &-interactive {
      z-index: 3;
    }

    &__control {
      border-color: ${grey};
      min-height: ${rem('50px')};
      transition-duration: 0.3s;

      &:hover {
        border-color: ${purple500};
      }

      &--is-focused {
        border-color: ${purple500};
        box-shadow: none;
      }
    }

    &__value-container {
      display: flex;
      align-items: center;
      padding: 0 ${rem('15px')};
    }

    &__placeholder {
      color: ${grey};
    }

    &__input {
      color: ${normal};
    }

    &__single-value {
      color: ${normal};
    }

    &__indicator {
      padding: 0 ${rem('15px')};

      &:hover {
        color: inherit;
      }

      svg {
        width: ${rem('22px')};
        height: ${rem('22px')};

        path {
          fill: hsl(0, 0%, 85%);
        }
      }

      &-separator {
        background-color: ${grey};
      }
    }

    &__option {
      transition-duration: 0.3s;

      &:hover {
        background-color: ${purple500};
        color: ${light};
      }

      &--is-focused {
        background-color: ${purple500};
        color: ${light};
      }

      &--is-selected {
        background-color: ${lightPurple};
        color: ${normal};
      }
    }
  }

  .select__value-container > div,
  .select__option {
    display: flex;
    align-items: center;
  }

  .select__value-container.select__value-container--is-multi > div {
    align-items: stretch;

    .select__multi-value__remove {
      padding-right: 0;
    }
  }

  .select__value-container,
  .select__option {
    svg,
    img {
      margin: 0 ${rem('5px')} 0 0;
      width: ${rem('20px')};
      height: auto;
      transition-duration: 0.3s;
    }
  }

  .select__option--is-selected {
    svg {
      fill: ${normal};
      transition-duration: 0.3s;
    }
  }

  .select__option--is-focused {
    svg {
      fill: ${light};
      transition-duration: 0.3s;
    }
  }

  .select__option--is-disabled {
    pointer-events: none;
  }
`;

export const SelectGroupLabel = styled.span`
  font-size: ${rem('12px')};
  color: ${lightGrey};

  + .tag {
    border-color: ${lightGrey};
    background-color: ${lightGrey};
    color: ${grey};
  }
`;
