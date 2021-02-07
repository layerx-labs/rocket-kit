import styled from 'styled-components';
import { device } from '../../ions/breakpoints';

export const CardValueStyle = styled.div`
  border: 1px solid var(--grey, hsl(0, 0%, 85%));
  border-radius: 6px;
  background-color: var(--white, hsl(0, 0%, 100%));
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow-x: auto;

  @media ${device.l} {
    padding: 30px;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 2rem;
    font-weight: var(--bold, 700);
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardValueButtonWrapper = styled.div`
  margin-top: 20px;
  right: 0;
  align-self: flex-end;
  flex-grow: 2;

  display: flex;
  flex-direction: column-reverse;
`;
