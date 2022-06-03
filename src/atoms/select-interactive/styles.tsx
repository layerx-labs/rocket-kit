import styled from 'styled-components';
import { rem, lighten } from 'polished';
import { colors, fontWeigth } from '../../ions/variables';

const { normal, light, info, purple } = colors;

export const SelectWrapper = styled.div`
  .select {
    &-interactive {
      z-index: 3;
    }

    &__control {
      border-color: ${info};
      min-height: ${rem('50px')};
      transition-duration: 0.3s;

      &:hover {
        border-color: ${purple};
      }

      &--is-focused {
        border-color: ${purple};
        box-shadow: none;
      }
    }

    &__value-container {
      align-items: center;
      padding: 0 ${rem('15px')};
    }

    &__placeholder {
      color: ${info};
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
        background-color: ${info};
      }
    }

    &__option {
      transition-duration: 0.3s;

      &:hover {
        background-color: ${purple};
        color: ${light};
      }

      &--is-focused {
        background-color: ${purple};
        color: ${light};
      }

      &--is-selected {
        background-color: ${lighten(0.4, purple)};
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
  }

  .select__value-container,
  .select__option {
    svg,
    img {
      margin: 0px ${rem('5px')} 0 0;
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
`;

export const SelectGroup = styled.div`
  display: 'flex';
  justify-content: 'space-between';
`;

export const SelectGroupLabel = styled.span`
  color: 000000;
  font-weight: ${fontWeigth.bold};
`;

export const SelectGroupTotal = styled.span`
  background-color: '#EBECF0';
  border-radius: '2em';
  color: '#172B4D';
  display: 'inline-block';
  font-size: 12;
  font-weight: 'normal';
  line-height: '1';
  min-width: 1;
  padding: '0.16666666666667em 0.5em';
  text-align: 'center';
`;
