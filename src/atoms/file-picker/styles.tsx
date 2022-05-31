import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

interface FilePickerProps {
  minimal?: boolean;
  error?: boolean;
  disabled?: boolean;
}

const { red, grey, lightGrey, darkGrey, green, darkGreen, light, normal } =
  colors;

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
    border-width: ${props =>
      props.minimal ? `0 0 ${rem('1px')} 0` : rem('1px')};
    border-style: solid;
    border-color: ${props => (props.error ? red : grey)};
    border-radius: ${props => (props.minimal ? 0 : rem('6px'))};
    background-color: ${props => (props.disabled ? lightGrey : 'transparent')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${rem('50px')};
    -webkit-appearance: none;
    outline: none;
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    pointer-events: ${props => (props.disabled ? 'none' : '')};
    overflow: hidden;

    span {
      display: flex;
      align-items: center;

      &.file-name {
        flex: 1;
        display: block;
        padding: ${props => (props.minimal ? 0 : `0 ${rem('10px')}`)};
        color: ${props => (props.disabled ? grey : normal)};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &.button {
        border-left: ${props =>
          props.minimal ? 0 : `${rem('1px')} solid ${grey}`};
        background-color: ${props =>
          props.minimal ? 'transparent' : props.disabled ? lightGrey : green};
        height: 100%;
        padding: ${props =>
          props.minimal
            ? `0 ${rem('5px')} 0 ${rem('20px')}`
            : `0 ${rem('20px')}`};
        color: ${props =>
          props.disabled ? grey : props.minimal ? darkGrey : light};
        transition-duration: 0.3s;

        svg {
          margin-right: ${rem('8px')};
          width: auto;
          height: ${rem('24px')};
          fill: ${props =>
            props.disabled ? grey : props.minimal ? darkGrey : light};
          transition-duration: 0.3s;
        }

        &:hover {
          background-color: ${props =>
            props.minimal ? 'transparent' : darkGreen};
          color: ${props => (props.minimal ? darkGreen : light)};

          svg {
            fill: ${props =>
              props.disabled ? grey : props.minimal ? darkGreen : light};
          }
        }
      }
    }
  }
`;
