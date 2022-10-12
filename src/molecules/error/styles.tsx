import styled from 'styled-components';
import { rem } from 'polished';
import { colors, typography } from '../../ions/variables';

interface ErrorProps {
  variant: 'default' | 'minimal';
}

const { normal, green } = colors;
const { bold } = typography;

export const Wrapper = styled.div<ErrorProps>`
  min-height: ${props => (props.variant === 'default' ? '50vh' : 'inherit')};
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

  > span {
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
