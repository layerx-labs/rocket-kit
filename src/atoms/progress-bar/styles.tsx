import styled from 'styled-components';
import { rem } from 'polished';
import { colors, typography } from '../../ions/variables';

interface ProgressBarProps {
  progress: number;
  value?: string;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Bar = styled.div`
  flex: 1;
  border: ${rem('1px')} solid ${colors.purple100};
  border-radius: 999px;
  background-color: ${colors.grey50};
  height: ${rem('10px')};
  overflow: hidden;
`;

export const Progress = styled.div<ProgressBarProps>`
  border-radius: 999px;
  background-color: ${colors.purple500};
  height: 100%;
  width: ${props => (props.progress ? `${props.progress}%` : 0)};
  transition-duration: 2s;
`;

export const Value = styled.div`
  margin-left: ${rem('5px')};
  font-size: ${typography.fontSizeXs};
  font-weight: ${typography.regular};
  color: ${colors.purple400};
  letter-spacing: ${rem('1px')};
  text-transform: uppercase;
`;
