import styled from 'styled-components';
import { rem } from 'polished';
import { colors, typography } from '../../ions/variables';

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  font-size: ${typography.fontSizeXs};
  font-weight: ${typography.semiBold};
  color: ${colors.grey500};

  svg {
    margin-left: ${rem('5px')};
    width: auto;
    height: ${rem('16px')};
  }
`;
