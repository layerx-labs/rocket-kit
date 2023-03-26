import styled from 'styled-components';
import { rem } from 'polished';
import { colors, misc, typography } from '../../ions/variables';

interface ErrorProps {
  variant: 'default' | 'minimal';
}

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
    font-weight: ${typography.semiBold};
    color: ${colors.black};

    a {
      color: ${colors.black};
      transition-duration: ${misc.transitionDuration};
    }

    &:hover {
      color: ${colors.purple500};
    }
  }
`;
