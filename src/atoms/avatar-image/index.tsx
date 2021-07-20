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
}

const AvatarImage = (props: AvatarProps) => {
  const {
    style,
    className = 'tk-avatar',
    size = 30,
    url,
    alt,
    boring = true,
    boringType = 'beam',
  } = props;

  return (
    <Styles.Wrapper size={size}>
      {boring && !url ? (
        <Avatar
          size={size}
          name={alt}
          variant={boringType}
          colors={['#55cad7', '#5031a9', '#f9c543', '#ef5766', '#7a7a7a']}
        />
      ) : (
        <Styles.Image
          className={className}
          style={style}
          size={size}
          alt={alt}
          src={url}
        />
      )}
    </Styles.Wrapper>
  );
};

export default AvatarImage;
