import styled from 'styled-components';
import { rem } from 'polished';
import { field, misc } from '../../ions/variables';

export const Wrapper = styled.div`
  label {
    margin-bottom: ${rem('5px')};
  }
`;

export const Field = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 1;
    margin-right: ${rem('-1px')};
    border-radius: ${field.borderRadius} 0 0 ${field.borderRadius};

    &:disabled {
      background-color: ${field.backgroundColor};
      color: ${field.color};
    }
  }

  span {
    order: 3;
    width: 100%;
  }

  button {
    border: 0;
    border-radius: 0 ${field.borderRadius} ${field.borderRadius} 0;
    min-width: ${rem('50px')};
    height: ${field.height};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${rem('20px')};
    white-space: nowrap;
    transition-duration: ${misc.transitionDuration};
    cursor: pointer;

    span {
      color: ${field.activeColor};
    }

    svg {
      fill: ${field.activeColor};
    }

    &:disabled {
      border: ${field.borderWidth} solid ${field.borderColor} !important;
    }
  }
`;
