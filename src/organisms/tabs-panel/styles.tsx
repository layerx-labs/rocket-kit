import styled from 'styled-components';
import { rem, lighten } from 'polished';
import { colors } from '../../ions/variables';

const { normal, grey, lightGrey, light } = colors;

export const Wrapper = styled.div`
  .tab {
    border-color: ${lightGrey};

    &[aria-selected='true'] {
      border-bottom: 0;
    }

    &[aria-selected='false'] {
      background-color: ${lightGrey};
      color: ${grey};
      transition-duration: 0.3s;

      &:hover {
        color: ${normal};
      }
    }

    &:first-child {
      border-top-left-radius: ${rem('6px')};
    }

    &:last-child {
      border-top-right-radius: ${rem('6px')};
    }
  }

  .panel {
    border-radius: 0 ${rem('6px')} ${rem('6px')} ${rem('6px')};
    border-color: ${lightGrey};
    background-color: ${light};
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
    border-color: ${lighten(0.25, grey)};
    border-width: ${rem('1px')} ${rem('1px')} ${rem('1px')} 0;
    cursor: pointer;
    z-index: 1;
    white-space: nowrap;
    padding: 0.7em 1em;
  }

  .RRT__tab:focus {
    outline: 0;
    background-color: ${lighten(0.25, grey)};
  }

  .RRT__accordion .RRT__tab {
    border-left-width: ${rem('1px')};
  }

  .RRT__tab--first {
    border-left-width: ${rem('1px')};
  }

  .RRT__tab--selected {
    background: ${light};
    border-color: ${lighten(0.25, grey)} ${lighten(0.25, grey)} ${light};
  }

  .RRT__tab--selected:focus {
    background-color: ${light};
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
    border: ${rem('1px')} solid ${lighten(0.25, grey)};
  }

  .RRT__panel--hidden {
    display: none;
  }

  .RRT__accordion .RRT__panel {
    margin-top: 0;
  }

  .RRT__showmore {
    background: ${lightGrey};
    border: ${rem('1px')} solid ${lighten(0.25, grey)};
    border-radius: 0 ${rem('6px')} 0 0;
    cursor: pointer;
    z-index: 1;
    white-space: nowrap;
    margin-left: ${rem('-1px')};
    position: relative;
  }

  .RRT__showmore--selected {
    background: ${light};
    border-bottom: none;
  }

  .RRT__showmore-label {
    padding: 0.7em 1em;
    position: relative;
    z-index: 1;
  }

  .RRT__showmore-label--selected {
    background-color: ${lighten(0.25, grey)};
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
