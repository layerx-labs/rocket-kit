import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, fontWeigth } from '../../ions/variables';

const { grey, light } = colors;
const { bold } = fontWeigth;

export const TagWrapper = styled.div`
  display: flex;
  border: ${rem('2px')} solid ${grey};
  border-radius: ${rem('6px')};
  font-size: 0.85rem;
  max-width: 100%;
  width: max-content;
  overflow: hidden;

  span {
    display: inline-block;
    padding: ${rem('2px')} ${rem('10px')};

    &.label {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
