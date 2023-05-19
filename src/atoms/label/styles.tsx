import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, typography } from '../../ions/variables';

export const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  font-size: ${typography.fontSizeXs};
  font-weight: ${typography.semiBold};
  color: ${colors.grey200};

  svg {
    margin-left: ${rem('5px')};
    width: auto;
    height: ${rem('16px')};
  }
`;
