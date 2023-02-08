import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, typography } from '../../ions/variables';

const { grey } = colors;

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  font-size: ${typography.fontSizeXs};
  font-weight: ${typography.semiBold};
  color: ${grey};
  text-transform: uppercase;

  svg {
    margin-left: ${rem('5px')};
    width: auto;
    height: ${rem('16px')};
  }
`;
