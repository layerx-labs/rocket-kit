import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

export const Wrapper = styled.div`
  label {
    margin-bottom: ${rem('5px')};
  }
`;

const { grey, darkGrey, light, purple } = colors;

export const Field = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 1;
    border-radius: 6px 0 0 6px;

    &:focus {
      outline: none;

      + button {
        background-color: ${purple};
      }
    }
  }

  span {
    order: 3;
    width: 100%;
  }

  button {
    border: 0;
    border-radius: 0 6px 6px 0;
    background-color: ${grey};
    min-width: ${rem('50px')};
    height: ${rem('50px')};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${rem('20px')};
    text-transform: uppercase;
    white-space: nowrap;
    transition-duration: 0.3s;
    cursor: pointer;

    svg {
      width: auto;
      min-width: ${rem('20px')};
      height: ${rem('20px')};
      fill: ${light};
      transition: 0.3s;
    }

    &:hover {
      background-color: ${darkGrey};
    }

    &:disabled {
      cursor: inherit;
      opacity: 0.5;

      &:hover {
        background-color: ${grey};
        pointer-events: none;
      }
    }
  }
`;
