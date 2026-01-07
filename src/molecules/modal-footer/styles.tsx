import styled from 'styled-components';
import { rem } from 'polished';
import { device } from '../../ions/breakpoints';

export const FooterStyle = styled.div`
  position: relative;
  margin-top: ${rem('50px')};
  max-width: 100%;
  display: flex;
  justify-content: center;

  > button {
    min-width: ${rem('100px')};

    &:not(:last-child) {
      margin-right: ${rem('5px')};
    }
  }

  @media ${device.s} {
    justify-content: flex-end;
  }
`;
