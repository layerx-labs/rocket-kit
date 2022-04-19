import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

const { light, primary, info } = colors;

export const Switcher = styled.fieldset`
  margin: 0;
  border: none;
  padding: 0;

  > div {
    > label {
      cursor: pointer;

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
      width: ${rem('48px')};
      height: ${rem('24px')};
      border-radius: 999px;
      border: 2px solid ${light};
      position: relative;
      opacity: ${props => (props.disabled ? '0.5' : '1')};

      input,
      span {
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

        &#switch-on:checked ~ .switcher {
          right: 0;
          left: calc(50% + ${rem('4px')});
        }

        &#switch-on:checked ~ .bg {
          background-color: ${primary};
        }

        &#switch-off:checked ~ .switcher {
          right: 0;
        }

        &#switch-off:checked ~ .bg {
          background-color: ${info};
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
      }
    }
  }

  @media screen and (-ms-high-contrast: active) {
    .switcher {
      background-color: windowText;
    }
  }
`;
