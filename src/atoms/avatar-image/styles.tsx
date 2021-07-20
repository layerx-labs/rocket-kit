import styled from 'styled-components/macro';
import { colors } from '../../ions/variables';

const { normal } = colors;

interface AvatarProps {
  size?: number;
}

export const Wrapper = styled.div<AvatarProps>`
  position: relative;
  border: 1px solid ${normal};
  border-radius: 999px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
  z-index: 0;

  > * {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: -1;
  }
`;

export const Image = styled.img<AvatarProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  object-fit: cover;
`;
