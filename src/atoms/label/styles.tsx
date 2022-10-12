import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, typography } from '../../ions/variables';

const { grey } = colors;
const { bold } = typography;

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: ${bold};
  color: ${grey};
  text-transform: uppercase;

  svg {
    width: auto;
    height: ${rem('15px')};
  }
`;
