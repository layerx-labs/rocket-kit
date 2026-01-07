import styled from 'styled-components';
import { rem } from 'polished';
import { TagColor } from '../tag/types';
import { useColor } from '../../utils/hooks/use-color';
import { typography } from '../../ions/variables';

interface TagWrapperProps {
  color?: TagColor;
  valueColor?: TagColor;
}

export const TagWrapper = styled.div<TagWrapperProps>`
  --bg: ${props => useColor(props.color ?? 'black').color};
  --valueColor: ${props => useColor(props.valueColor ?? 'black').color};

  display: flex;
  border: ${rem('2px')} solid var(--bg);
  border-radius: ${rem('3px')};
  line-height: 1;
  max-width: 100%;
  width: max-content;
  overflow: hidden;

  span {
    display: inline-block;
    padding: ${rem('3px')} ${rem('8px')};
    font-size: ${rem('12px')};
    font-weight: ${typography.medium};
    letter-spacing: ${rem('1px')};

    &.label {
      flex: 1;
      color: var(--bg);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-transform: uppercase;
    }

    &.value {
      background-color: var(--bg);
      color: var(--valueColor);
    }
  }

  &:not(:first-child) {
    margin-left: ${rem('5px')};
  }
`;
