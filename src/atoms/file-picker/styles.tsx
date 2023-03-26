import styled from 'styled-components';
import { rem } from 'polished';
import { field, misc } from '../../ions/variables';

interface FilePickerProps {
  error?: boolean;
  disabled?: boolean;
}

export const Wrapper = styled.div<FilePickerProps>`
  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  label {
    margin-bottom: 0 !important;
    border-width: ${field.borderWidth};
    border-style: solid;
    border-color: ${props =>
      props.error ? field.errorBorderColor : field.borderColor};
    border-radius: ${field.borderRadius};
    background-color: ${props =>
      props.disabled ? field.disabledBackgroundColor : 'transparent'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${field.height};
    -webkit-appearance: none;
    outline: none;
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    pointer-events: ${props => (props.disabled ? 'none' : '')};
    transition-duration: ${misc.transitionDuration};
    overflow: hidden;

    span {
      display: flex;
      align-items: center;

      &.file-name {
        flex: 1;
        display: block;
        padding: ${`0 ${rem('10px')}`};
        color: ${props => (props.disabled ? field.disabledColor : field.color)};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &.button {
        border-left: ${props =>
          `${field.borderWidth} solid ${
            props.error ? field.errorBorderColor : field.borderColor
          }`};
        background-color: ${props =>
          props.disabled
            ? field.disabledBackgroundColor
            : props.error
            ? field.errorBackgroundColor
            : field.borderColor};
        height: 100%;
        padding: ${`0 ${rem('20px')}`};
        color: ${props =>
          props.disabled
            ? field.disabledColor
            : props.error
            ? field.errorBorderColor
            : field.activeColor};
        transition-duration: ${misc.transitionDuration};

        svg {
          margin-right: ${rem('8px')};
          width: auto;
          height: ${rem('24px')};
          fill: ${props =>
            props.disabled
              ? field.disabledColor
              : props.error
              ? field.errorBorderColor
              : field.activeColor};
          transition-duration: ${misc.transitionDuration};
        }

        &:hover {
          background-color: ${field.hoverBorderColor};
        }
      }
    }

    &:hover {
      border-color: ${field.hoverBorderColor};

      span.button {
        background-color: ${field.hoverBorderColor};
      }
    }
  }
`;
