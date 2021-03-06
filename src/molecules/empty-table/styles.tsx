import styled from 'styled-components';
import { device } from '../../ions/breakpoints';

interface BorderProps {
  border: boolean;
}

export const EmptyTableWrapper = styled.div`
  position: relative;
`;

export const EmptyTableHead = styled.div<BorderProps>`
  border-width: ${props => (props.border ? '1px' : '0 0 1px 0')};
  border-style: solid;
  border-color: var(--grey, hsl(0, 0%, 85%));
  border-radius: 6px 6px 0 0;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  font-weight: var(--bold, 700);
  color: var(--grey, hsl(0, 0%, 85%));
  text-transform: uppercase;

  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    display: none;
    flex: 1;
    padding: 0 15px;
    font-size: 0.85rem;
    font-weight: var(--bold, 700);
    color: var(--grey, hsl(0, 0%, 85%));
    text-transform: uppercase;

    &:first-child,
    &:nth-child(2) {
      display: initial;
    }

    @media ${device.s} {
      &:nth-child(3) {
        display: initial;
      }
    }

    @media ${device.m} {
      &:nth-child(4) {
        display: initial;
      }
    }

    @media ${device.l} {
      display: initial;
    }
  }
`;

export const EmptyTableBody = styled.div<BorderProps>`
  border-width: ${props => (props.border ? '0 1px 1px 1px' : 0)};
  border-style: solid;
  border-color: var(--grey, hsl(0, 0%, 85%));
  border-radius: 0 0 6px 6px;
`;

export const EmptyTableRow = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid var(--grey, hsl(0, 0%, 85%));
  }

  > div {
    display: none;
    flex: 1;
    padding: 0 15px;

    &:first-child,
    &:nth-child(2) {
      display: inherit !important;
    }

    @media ${device.s} {
      &:nth-child(3) {
        display: inherit;
      }
    }

    @media ${device.m} {
      &:nth-child(4) {
        display: inherit;
      }
    }

    @media ${device.l} {
      display: inherit;
    }
  }
`;

export const EmptyTableCellText = styled.div`
  background-color: #edeef1;
  width: 100%;
  height: 15px;
`;

export const EmptyTableOverlay = styled.div`
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 15px 15px 15px;
  text-align: center;
  color: var(--darkGrey, hsl(0, 0%, 85%));
`;
