import styled from 'styled-components/macro';
import { rem } from 'polished';
import { device } from '../../ions/breakpoints';
import { colors } from '../../ions/variables';

const { light, grey } = colors;

export const CardValueStyle = styled.div`
  border: ${rem('1px')} solid ${grey};
  border-radius: ${rem('6px')};
  background-color: ${light};
  display: flex;
  flex-direction: column;
  padding: ${rem('15px')};
  overflow-x: auto;

  @media ${device.l} {
    padding: ${rem('30px')};
  }

  > span {
    display: block;
    margin-top: ${rem('5px')};
    font-size: 2rem;
    font-weight: var(--bold, 700);
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardValueButtonWrapper = styled.div`
  right: 0;
  margin-top: ${rem('20px')};
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 2;
  align-self: flex-end;
`;
