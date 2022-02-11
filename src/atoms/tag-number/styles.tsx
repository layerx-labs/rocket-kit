import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, fontWeigth } from '../../ions/variables';

const { lightGrey } = colors;
const { bold } = fontWeigth;

export const TagWrapper = styled.div`
  display: flex;
  border: 2px solid ${lightGrey};
  border-radius: 6px;
  font-size: 0.85rem;
  max-width: 100%;
  width: max-content;

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
      background-color: ${lightGrey};
      font-weight: ${bold};
    }
  }

  &:not(:first-child) {
    margin-left: 5px;
  }
`;
