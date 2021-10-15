import styled from 'styled-components';
import { rem, lighten } from 'polished';
import { colors, fontWeigth } from '../../ions/variables';

const { info, primary } = colors;
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
  background-color: ${lighten(0.4, info)};
  height: ${rem('10px')};
`;

export const Progress = styled.div<ProgressBarProps>`
  border-radius: 999px;
  background-color: ${primary};
  height: 100%;
  width: ${props => (props.progress ? `${props.progress}%` : 0)};
  transition-duration: 2s;
`;

export const Value = styled.div`
  margin-left: ${rem('5px')};
  font-size: 0.75rem;
  font-weight: ${bold};
`;
