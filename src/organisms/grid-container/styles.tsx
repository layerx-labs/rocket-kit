import styled from 'styled-components';

export interface GridProps {
  size?: number;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridRow = styled.div`
  display: flex;
`;

export const GridCol = styled.div<GridProps>`
  flex: ${props => props.size};
`;
