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
`;
