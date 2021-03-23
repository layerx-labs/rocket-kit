import styled from 'styled-components/macro';

export const TruncateWrapper = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
  white-space: nowrap;

  span {
    display: table-cell;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
