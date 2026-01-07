import styled from 'styled-components';
import { rem } from 'polished';
import { TagVariant, TagColor } from './types';
import { typography } from '../../ions/variables';
import { useColor } from '../../utils/hooks/use-color';

interface TagWrapperProps {
  variant?: TagVariant;
  color?: TagColor;
  txtColor?: TagColor;
}

export const TagWrapper = styled.span<TagWrapperProps>`
  --bg: ${props => useColor(props.color ?? 'black').color};
  --txt: ${props => useColor(props.txtColor ?? 'black').color};

  display: inline-block;
  border: ${rem('2px')} solid var(--bg);
  border-radius: ${rem('4px')};
  background-color: ${props =>
    props.variant === 'solid' ? 'var(--bg)' : 'transparent'};
  padding: ${rem('3px')} ${rem('8px')};
  font-size: ${rem('12px')};
  font-weight: ${typography.medium};
  text-transform: uppercase;
  letter-spacing: ${rem('1px')};
  line-height: 1;
  color: ${props => (props.variant === 'solid' ? 'var(--txt)' : 'var(--bg)')};
  white-space: nowrap;
`;
