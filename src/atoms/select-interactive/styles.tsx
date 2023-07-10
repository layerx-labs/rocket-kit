import styled from 'styled-components';
import { rem } from 'polished';
import { colors, field, misc, typography } from '../../ions/variables';

export const SelectWrapper = styled.div`
  .select {
    &-interactive {
      z-index: 3;
    }

    &__control {
      border-color: ${field.borderColor};
      border-radius: ${field.borderRadius};
      min-height: ${field.height};
      transition-duration: ${misc.transitionDuration};

      &:hover {
        border-color: ${field.hoverBorderColor};
      }

      &--is-focused {
        border-color: ${field.activeBorderColor};
        box-shadow: none;
      }
    }

    &__value-container {
      padding: 0 ${rem('15px')};
    }

    &__placeholder {
      color: ${field.placeholderColor};
    }

    &__input {
      color: ${field.color};
    }

    &__single-value {
      color: ${field.color};
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
          fill: ${field.borderColor};
        }
      }

      &-separator {
        background-color: ${field.borderColor};
      }
    }

    &__option {
      transition-duration: ${misc.transitionDuration};

      &:hover {
        background-color: ${field.hoverBorderColor};
        color: ${field.color};

        svg {
          fill: ${field.color};
        }
      }

      &--is-focused {
        background-color: ${field.activeBorderColor};
        color: ${colors.white};
      }

      &--is-selected {
        background-color: ${field.activeBorderColor} !important;
        color: ${colors.white} !important;
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
      transition-duration: ${misc.transitionDuration};
    }
  }

  .select__option--is-selected {
    svg {
      fill: ${colors.white} !important;
      transition-duration: ${misc.transitionDuration};
    }
  }

  .select__option--is-focused {
    svg {
      fill: ${colors.white};
      transition-duration: ${misc.transitionDuration};
    }
  }

  .select__option--is-disabled {
    pointer-events: none;
  }
`;

export const SelectGroupLabel = styled.span`
  font-size: ${typography.fontSizeXs};
  color: ${field.placeholderColor};

  + .tag {
    border-color: ${field.borderColor};
    background-color: ${field.borderColor};
    color: ${field.activeBorderColor};
  }
`;

export const SingleValue = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  margin-left: ${rem('2px')};
  margin-right: ${rem('2px')};
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
`;
