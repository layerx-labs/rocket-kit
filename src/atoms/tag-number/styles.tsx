import styled from 'styled-components';
import { rem, lighten } from 'polished';
import { colors, fontWeigth } from '../../ions/variables';

const { info } = colors;
const { bold } = fontWeigth;

export const TagWrapper = styled.div`
  display: inline-block;
  border: 2px solid ${lighten(0.4, info)};
  border-radius: 6px;
  font-size: 0.85rem;

  span {
    display: inline-block;
    padding: ${rem('2px')} ${rem('10px')};

    &.number {
      background-color: ${lighten(0.4, info)};
      font-weight: ${bold};
    }
  }

  &:not(:first-child) {
    margin-left: 5px;
  }
`;
