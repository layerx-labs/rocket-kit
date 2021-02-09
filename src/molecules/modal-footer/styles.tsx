import styled from 'styled-components';
import { device } from '../../ions/breakpoints';

interface FooterStyleProps {
  focusMode: boolean;
}

export const FooterStyle = styled.div<FooterStyleProps>`
  position: relative;
  margin-top: 50px;
  max-width: ${props => (props.focusMode ? '800px' : '100%')};
  display: flex;
  justify-content: center;

  > button {
    min-width: 100px;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  @media ${device.s} {
    justify-content: flex-end;

    > button.focus {
      position: absolute;
      left: 0;
    }
  }
`;
