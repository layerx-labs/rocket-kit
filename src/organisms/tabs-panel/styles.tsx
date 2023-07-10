import styled from 'styled-components';
import { rem } from 'polished';
import { colors, field, misc } from '../../ions/variables';

export const Wrapper = styled.div`
  .tab {
    border-color: ${field.borderColor};

    &[aria-selected='true'] {
      border-bottom: 0;
    }

    &[aria-selected='false'] {
      background-color: ${field.borderColor};
      color: ${colors.black};
      transition-duration: ${misc.transitionDuration};

      &:hover {
        color: ${colors.black};
      }
    }

    &:first-child {
      border-top-left-radius: ${field.borderRadius};
    }

    &:last-child {
      border-top-right-radius: ${field.borderRadius};
    }
  }

  .panel {
    // prettier-ignore
    border-radius: 0 ${field.borderRadius} ${field.borderRadius} ${
  field.borderRadius
};
    border-color: ${field.borderColor};
    background-color: ${colors.white};
    padding: ${rem('30px')};
  }

  .RRT__container {
    position: relative;
  }

  .RRT__tabs {
    display: flex;
    flex-wrap: wrap;
  }

  .RRT__accordion {
    flex-direction: column;
  }

  .RRT__tab {
    background: #eee;
    border-style: solid;
    border-color: ${field.borderColor};
    border-width: ${field.borderWidth} ${field.borderWidth} ${
  field.borderWidth
} 0;
    cursor: pointer;
    z-index: 1;
    white-space: nowrap;
    padding: 0.7em 1em;
  }

  .RRT__tab:focus {
    outline: 0;
    background-color: ${field.borderColor};
  }

  .RRT__accordion .RRT__tab {
    border-left-width: ${field.borderWidth};
  }

  .RRT__tab--first {
    border-left-width: ${field.borderWidth};
  }

  .RRT__tab--selected {
    background: ${colors.white};
    border-color: ${field.borderColor} ${field.borderColor} ${colors.white};
  }

  .RRT__tab--selected:focus {
    background-color: ${colors.white};
  }

  .RRT__tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .RRT__tab:focus {
    z-index: 2;
  }

  .RRT__tab--selected .RRT__removable {
    position: relative;
  }

  .RRT__tab--selected .RRT__removable-text {
    margin-right: ${rem('10px')};
  }

  .RRT__tab--selected .RRT__removable-icon {
    position: absolute;
    font-size: ${rem('18px')};
    right: 0.5em;
    top: 0.2em;
  }

  .RRT__panel {
    margin-top: ${rem('-1px')};
    padding: 1em;
    border: ${rem('1px')} solid ${field.borderColor};
  }

  .RRT__panel--hidden {
    display: none;
  }

  .RRT__accordion .RRT__panel {
    margin-top: 0;
  }

  .RRT__showmore {
    background: ${field.borderColor};
    border: ${rem('1px')} solid ${field.borderColor};
    border-radius: 0 ${field.borderRadius} 0 0;
    cursor: pointer;
    z-index: 1;
    white-space: nowrap;
    margin-left: ${rem('-1px')};
    position: relative;
  }

  .RRT__showmore--selected {
    background: ${colors.white};
    border-bottom: none;
  }

  .RRT__showmore-label {
    padding: 0.7em 1em;
    position: relative;
    z-index: 1;
  }

  .RRT__showmore-label--selected {
    background-color: ${field.borderColor};
  }

  .RRT__showmore-list {
    position: absolute;
    right: ${rem('-1px')};
    top: 100%;
    display: none;
  }

  .RRT__showmore-list--opened {
    display: block;

    div.tab:last-child {
      border-radius: 0;
    }
  }
`;
