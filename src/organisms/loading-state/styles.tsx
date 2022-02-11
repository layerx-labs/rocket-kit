import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

const { lightGrey } = colors;

interface LoadingStateProps {
  type?: 'text' | 'card' | 'table' | 'value';
  columnsNumber?: number;
  center?: boolean;
}

export const Wrapper = styled.div<LoadingStateProps>`
  div {
    width: 100%;
    height: 100%;
  }

  > div > div > div {
    background: #f6f7f8;
    background-image: -webkit-linear-gradient(
      left,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 800px 100%;
    animation-fill-mode: forwards;
    animation-name: placeholderSkeleton;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 1.5s;

    &.title {
      margin-bottom: ${rem('10px')};
      width: 50%;
      height: ${rem('30px')};
    }

    &.subtitle {
      margin-bottom: ${rem('30px')};
      width: 25%;
      height: ${rem('15px')};
    }

    &.paragraph {
      width: 100%;
      height: ${rem('15px')};

      &:not(:last-child) {
        margin-bottom: ${rem('10px')};
      }
    }

    &.value {
      width: 50%;
      height: ${rem('30px')};
    }
  }

  @keyframes placeholderSkeleton {
    0% {
      background-position: ${rem('-800px')} 0;
    }
    100% {
      background-position: ${rem('800px')} 0;
    }
  }

  .card {
    position: relative;
    border: 2px solid ${lightGrey};
    border-radius: 6px;
    width: ${rem('300px')};
    overflow: hidden;

    .cover {
      width: 100%;
      height: ${rem('165px')};
    }

    .avatar {
      position: absolute;
      margin: ${rem('-45px')} 0 0 ${rem('20px')};
      width: ${rem('90px')};
      height: ${rem('90px')};
      border: 1px solid ${lightGrey};
      border-radius: 999px;
    }

    .title {
      margin: ${rem('75px')} 0 ${rem('30px')} ${rem('25px')};
    }

    .paragraph {
      margin: 0 auto 20px auto;
      width: calc(100% - ${rem('40px')});

      &:last-child {
        width: 40%;
        margin-left: ${rem('20px')};
      }
    }
  }
`;

export const Table = styled.div<LoadingStateProps>`
  --columns: ${props => props.columnsNumber};

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-gap: ${rem('15px')};
  padding: ${rem('15px')};

  .header {
    width: 50%;
    height: ${rem('15px')};
  }

  .cell {
    width: 100%;
    height: ${rem('15px')};
  }
`;

export const Grid = styled.div<LoadingStateProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${rem('300px')});
  grid-gap: ${rem('15px')};
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`;
