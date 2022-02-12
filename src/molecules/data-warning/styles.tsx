import styled from 'styled-components';
import { rem } from 'polished';
import { colors, fontWeight } from '../../ions/variables';

interface DataWarningProps {
  type: 'login' | 'data';
}

const { normal, green } = colors;
const { bold } = fontWeight;

export const Wrapper = styled.div<DataWarningProps>`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 ${rem('30px')};
  text-align: center;

  svg {
    width: auto;
    height: ${rem('100px')};
  }

  > div {
    margin-top: ${rem('15px')};
    font-weight: ${bold};
    color: ${normal};

    a {
      color: ${normal};
      transition-duration: 0.3s;

      &:hover {
        color: ${green};
      }
    }
  }
`;
