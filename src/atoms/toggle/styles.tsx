import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

const { light, green, lightGrey } = colors;

export const Switcher = styled.fieldset`
  margin: 0;
  border: none;
  padding: 0;

  > div {
    > label {
      cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

      &:first-child {
        margin-right: ${rem('10px')};
      }

      &:last-child {
        margin-left: ${rem('10px')};
      }
    }

    .wrapper {
      display: inline-block;
      vertical-align: middle;
      width: ${rem('40px')};
      height: ${rem('24px')};
      border-radius: 999px;
      border: 2px solid ${light};
      position: relative;
      opacity: ${props => (props.disabled ? '0.5' : '1')};

      input,
      span,
      label {
        cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
      }

      input[type='radio'] {
        display: inline-block;
        margin: 0 ${rem('-2px')} 0 0;
        width: 50%;
        height: 100%;
        opacity: 0;
        position: relative;
        z-index: 1;

        &.switch-on:checked ~ .switcher {
          right: 0;
          left: 50%;
        }

        &.switch-on:checked ~ .bg {
          background-color: ${green};
        }

        &.switch-off:checked ~ .switcher {
          right: 0;
        }

        &.switch-off:checked ~ .bg {
          background-color: ${lightGrey};
        }
      }

      .switcher {
        display: block;
        position: absolute;
        top: ${rem('2px')};
        left: ${rem('2px')};
        right: 100%;
        width: ${rem('16px')};
        height: ${rem('16px')};
        border-radius: 50%;
        background-color: ${light};
        transition: all 0.3s ease-out;
        z-index: 2;
      }

      .bg {
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        border-radius: 999px;
        background-color: transparent;
        transition: all 0.3s ease-out;
        background-color: ${lightGrey};
      }
    }
  }

  @media screen and (-ms-high-contrast: active) {
    .switcher {
      background-color: windowText;
    }
  }
`;
