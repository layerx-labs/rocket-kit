import styled from 'styled-components/macro';
import { rem } from 'polished';
import { device } from '../../ions/breakpoints';
import { colors } from '../../ions/variables';

const { green, grey, lightGrey, light } = colors;

interface WizardStepProps {
  active?: boolean;
}

export const Steps = styled.ul`
  margin: 0;
  width: 100%;
  padding: 0;
  display: flex;
`;

export const Step = styled.li<WizardStepProps>`
  list-style: none;
  flex: 1;
  position: relative;
  height: ${rem('44px')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${rem('18px')};
  text-align: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    border: 0 solid ${props => (props.active ? green : lightGrey)};
    border-width: ${rem('22px')} ${rem('15px')};
    width: 0;
    height: 0;
  }

  &:before {
    left: ${rem('-15px')};
    border-left-color: transparent;
  }

  &:after {
    left: calc(100% - ${rem('18px')});
    border-color: transparent;
    border-left-color: ${props => (props.active ? green : lightGrey)};
  }

  &:first-child:before {
    border: none;
  }

  &:last-child:after {
    border: none;
  }

  &:first-child {
    overflow: hidden;

    > div {
      border-radius: ${rem('6px')} 0 0 ${rem('6px')};
    }
  }

  &:last-child {
    padding-right: 0;

    > div {
      border-radius: 0 ${rem('6px')} ${rem('6px')} 0;
    }
  }

  > div {
    background-color: ${props => (props.active ? green : lightGrey)};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: min-content;
      font-size: 0.75rem;
      color: ${props => (props.active ? light : grey)};

      @media ${device.s} {
        width: 100%;
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }
`;
