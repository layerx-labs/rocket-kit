import styled from 'styled-components';
import { rem, lighten } from 'polished';
import { colors } from '../../ions/variables';

const { normal, info } = colors;

export const Wrapper = styled.div`
  .tab {
    border-color: ${lighten(0.4, info)};

    &[aria-selected='true'] {
      border-bottom: 0;
    }

    &[aria-selected='false'] {
      background-color: ${lighten(0.45, info)};
      color: ${info};
      transition-duration: 0.3s;

      &:hover {
        color: ${normal};
      }
    }

    &:first-child {
      border-top-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
    }
  }

  .panel {
    border-radius: 0 6px 6px 6px;
    border-color: ${lighten(0.4, info)};
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
    border-color: #ddd;
    border-width: 1px 1px 1px 0;
    cursor: pointer;
    z-index: 1;
    white-space: nowrap;
    padding: 0.7em 1em;
  }

  .RRT__tab:focus {
    outline: 0;
    background-color: #e6e6e6;
  }

  .RRT__accordion .RRT__tab {
    border-left-width: 1px;
  }

  .RRT__tab--first {
    border-left-width: 1px;
  }

  .RRT__tab--selected {
    background: #fff;
    border-color: #ddd #ddd #fff;
  }

  .RRT__tab--selected:focus {
    background-color: #fff;
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
    margin-right: 10px;
  }

  .RRT__tab--selected .RRT__removable-icon {
    position: absolute;
    font-size: 18px;
    right: 0.5em;
    top: 0.2em;
  }

  .RRT__panel {
    margin-top: -1px;
    padding: 1em;
    border: 1px solid #ddd;
  }

  .RRT__panel--hidden {
    display: none;
  }

  .RRT__accordion .RRT__panel {
    margin-top: 0;
  }

  .RRT__showmore {
    background: #eee;
    border: 1px solid #ddd;
    cursor: pointer;
    z-index: 1;
    white-space: nowrap;
    margin-left: -1px;
    position: relative;
  }

  .RRT__showmore--selected {
    background: white;
    border-bottom: none;
  }

  .RRT__showmore-label {
    padding: 0.7em 1em;
    position: relative;
    bottom: -1px;
    z-index: 1;
  }

  .RRT__showmore-label--selected {
    background-color: #eee;
  }

  .RRT__showmore-list {
    position: absolute;
    right: -1px;
    top: 100%;
    display: none;
  }

  .RRT__showmore-list--opened {
    display: block;
  }
`;
