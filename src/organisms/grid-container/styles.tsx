import styled from 'styled-components';
import { device } from '../../ions/breakpoints';

export interface GridProps {
  size?: number;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridRow = styled.div`
  @media ${device.m} {
    display: flex;
  }
`;

export const GridCol = styled.div<GridProps>`
  @media ${device.m} {
    flex: ${props => props.size};
  }
`;
