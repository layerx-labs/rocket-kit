import styled from 'styled-components/macro';
import { rem } from 'polished';
import { colors } from '../../ions/variables';

const { grey } = colors;

interface AvatarProps {
  size?: number;
  square?: boolean;
}

export const Wrapper = styled.div<AvatarProps>`
  position: relative;
  border: ${rem('2px')} solid ${grey};
  border-radius: ${props => (props.square ? 0 : '999px')};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
  z-index: 0;

  > * {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  img {
    object-fit: cover;
  }
`;
