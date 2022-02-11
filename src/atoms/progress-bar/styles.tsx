import styled from 'styled-components';
import { rem } from 'polished';
import { colors, fontWeigth } from '../../ions/variables';

const { lightGrey, green } = colors;
const { bold } = fontWeigth;

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
  border-radius: 999px;
  background-color: ${lightGrey};
  height: ${rem('10px')};
  overflow: hidden;
`;

export const Progress = styled.div<ProgressBarProps>`
  border-radius: 999px;
  background-color: ${green};
  height: 100%;
  width: ${props => (props.progress ? `${props.progress}%` : 0)};
  transition-duration: 2s;
`;

export const Value = styled.div`
  margin-left: ${rem('5px')};
  font-size: 0.75rem;
  font-weight: ${bold};
`;
