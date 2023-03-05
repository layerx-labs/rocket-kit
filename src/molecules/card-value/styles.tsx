import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors, field, typography } from '../../ions/variables';

export const CardValueStyle = styled.div`
  border: ${field.borderWidth} solid ${field.borderColor};
  border-radius: ${field.borderRadius};
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  padding: ${rem('15px')};
  overflow-x: auto;

  > span {
    display: block;
    margin-top: ${rem('5px')};
    font-size: ${rem('32px')};
    font-weight: ${typography.semiBold};
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a,
  button {
    margin-top: ${rem('20px')};
  }
`;
