import styled from 'styled-components';
import { rem } from 'polished';
import { colors, field, misc } from '../../ions/variables';

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
      height: ${rem('25px')};
      border-radius: 999px;
      border: ${field.borderWidth} solid ${field.borderColor};
      position: relative;
      opacity: ${props => (props.disabled ? '0.5' : '1')};

      input,
      span,
      label {
        cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
      }

      input[type='radio'] {
        display: inline-block;
        margin: 0 ${rem('-3px')} 0 0;
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
          background-color: ${colors.green500};
        }

        &.switch-off:checked ~ .switcher {
          right: 0;
        }

        &.switch-off:checked ~ .bg {
          background-color: ${colors.grey100};
        }
      }

      .switcher {
        display: block;
        position: absolute;
        top: ${rem('3px')};
        left: ${rem('3px')};
        right: 100%;
        width: ${rem('16px')};
        height: ${rem('16px')};
        border-radius: 50%;
        background-color: ${colors.white};
        transition: all ${misc.transitionDuration} ease-out;
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
        transition: all ${misc.transitionDuration} ease-out;
        background-color: ${colors.grey200};
      }
    }
  }

  @media screen and (-ms-high-contrast: active) {
    .switcher {
      background-color: windowText;
    }
  }
`;
