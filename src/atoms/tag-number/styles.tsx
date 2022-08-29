import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, typography } from '../../ions/variables';

const { grey, light } = colors;
const { bold } = typography;

export const TagWrapper = styled.div`
  display: flex;
  border: ${rem('2px')} solid ${grey};
  border-radius: ${rem('3px')};
  line-height: 1;
  max-width: 100%;
  width: max-content;
  overflow: hidden;

  span {
    display: inline-block;
    padding: ${rem('3px')} ${rem('8px')};
    font-size: ${rem('12px')};
    font-weight: ${bold};
    letter-spacing: 0.1em;

    &.label {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-transform: uppercase;
    }

    &.value {
      background-color: ${grey};
      font-weight: ${bold};
      color: ${light};
    }
  }

  &:not(:first-child) {
    margin-left: ${rem('5px')};
  }
`;
