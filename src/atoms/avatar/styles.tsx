import styled from 'styled-components/macro';
import { colors } from '../../ions/variables';
import { rem } from 'polished';

const { normal } = colors;

export const Image = styled.img`
  border: 1px solid ${normal};
  border-radius: 999px;
  width: ${rem('30px')};
  height: ${rem('30px')};
  object-fit: cover;
  overflow: hidden;
`;
