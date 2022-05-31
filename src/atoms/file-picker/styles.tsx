import styled from 'styled-components';
import { FilePickerProps } from '.';

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
    border-width: ${props => (props.minimal ? '0 0 1px 0' : '1px')};
    border-style: solid;
    border-color: ${props =>
      props.error
        ? 'var(--red, hsl(354, 83%, 64%))'
        : 'var(--grey, hsl(0, 0%, 85%))'};
    border-radius: ${props => (props.minimal ? 0 : '6px')};
    background-color: ${props =>
      props.disabled ? 'hsl(0, 0%, 98%)' : 'transparent'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    -webkit-appearance: none;
    outline: none;
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    pointer-events: ${props => (props.disabled ? 'none' : '')};

    span {
      display: flex;
      align-items: center;

      &.file-name {
        flex: 1;
        display: block;
        padding: ${props => (props.minimal ? 0 : '0 10px')};
        color: ${props =>
          props.disabled
            ? 'var(--grey, hsl(0, 0%, 48%))'
            : 'var(--default, hsl(0, 0%, 16%))'};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &.button {
        border-left: ${props =>
          props.minimal ? 0 : '1px solid var(--grey, hsl(0, 0%, 85%))'};
        border-radius: ${props => (props.minimal ? 0 : '0 6px 6px 0')};
        background-color: ${props =>
          props.minimal
            ? 'transparent'
            : props.disabled
            ? 'hsl(0, 0%, 98%)'
            : 'var(--green, hsl(186, 62%, 59%))'};
        height: 100%;
        padding: 0 20px;
        color: ${props =>
          props.minimal
            ? 'var(--darkGrey, hsl(0, 0%, 48%))'
            : 'var(--white, hsl(0, 0%, 100%))'};
        transition-duration: 0.3s;

        svg {
          width: auto;
          height: 24px;
          fill: ${props =>
            props.disabled
              ? 'var(--grey, hsl(0, 0%, 48%))'
              : props.minimal
              ? 'var(--darkGrey, hsl(0, 0%, 48%))'
              : 'var(--white, hsl(0, 0%, 100%))'};
        }

        &:hover {
          background-color: ${props =>
            props.minimal
              ? 'var(--grey, hsl(0, 0%, 85%))'
              : 'hsl(186, 62%, 49%)'};
        }
      }
    }
  }
`;
