import React, { CSSProperties } from 'react';
import Avatar from 'boring-avatars';
import * as Styles from './styles';

export interface AvatarProps {
  style?: CSSProperties;
  className?: string;
  size?: number;
  url?: string;
  alt: string;
  boring?: boolean;
  boringType?: 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus';
  square?: boolean;
}

const AvatarImage = (props: AvatarProps) => {
  const {
    style,
    className = 'avatar-img',
    size = 30,
    url,
    alt,
    boring = true,
    boringType = 'pixel',
    square = false,
  } = props;

  return (
    <Styles.Wrapper className={className} size={size} square={square}>
      {boring && !url ? (
        <Avatar
          size={size}
          name={alt}
          variant={boringType}
          square={square}
          colors={['#55cad7', '#5031a9', '#f9c543', '#ef5766', '#7a7a7a']}
        />
      ) : (
        <img style={style} src={url} alt={alt} />
      )}
    </Styles.Wrapper>
  );
};

export default AvatarImage;
