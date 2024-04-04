import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors, field, typography } from '../../ions/variables';
import { device } from '../../ions/breakpoints';

interface BorderProps {
  border: boolean;
}

export const EmptyTableWrapper = styled.div`
  position: relative;
`;

export const EmptyTableHead = styled.div<BorderProps>`
  border-width: ${props =>
    props.border ? field.borderWidth : `0 0 ${field.borderWidth} 0`};
  border-style: solid;
  border-color: ${colors.grey200};
  border-radius: ${field.borderRadius} ${field.borderRadius} 0 0;
  height: ${rem('50px')};
  display: flex;
  align-items: center;
  font-size: ${typography.fontSizeSm};
  font-weight: ${typography.semiBold};
  color: ${colors.grey400};

  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: none;
    flex: 1;
    padding: 0 ${rem('15px')};
    font-size: ${typography.fontSizeSm};
    font-weight: ${typography.semiBold};
    color: ${colors.grey400};

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
  border-width: ${props =>
    props.border
      ? `0 ${field.borderWidth} ${field.borderWidth} ${field.borderWidth}`
      : 0};
  border-style: solid;
  border-color: ${colors.grey200};
  border-radius: 0 0 ${field.borderRadius} ${field.borderRadius};
`;

export const EmptyTableRow = styled.div`
  height: ${rem('50px')};
  display: flex;
  align-items: center;

  &:not(:last-child) {
    border-bottom: ${field.borderWidth} solid ${colors.grey200};
  }

  > div {
    display: none;
    flex: 1;
    padding: 0 ${rem('15px')};

    &:first-child,
    &:nth-child(2) {
      display: inherit;
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
  background-color: ${colors.grey200};
  width: 100%;
  height: ${rem('15px')};
`;

export const EmptyTableOverlay = styled.div`
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    ${rgba(colors.white, 0)},
    ${rgba(colors.white, 1)}
  );
  width: 100%;
  height: calc(100% - ${rem('50px')});
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 ${rem('15px')} ${rem('15px')} ${rem('15px')};
  text-align: center;
  color: ${colors.grey400};
`;
