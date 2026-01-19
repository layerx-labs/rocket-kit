import React, { CSSProperties } from 'react';
import Avatar from 'boring-avatars';
import clsx from 'clsx';
import styles from './styles.module.css';

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
    className,
    size = 30,
    url,
    alt,
    boring = true,
    boringType = 'pixel',
    square = false,
  } = props;

  const wrapperStyle = {
    '--avatarSize': `${size}px`,
  } as CSSProperties;

  return (
    <div
      className={clsx(styles.wrapper, square && styles.square, className)}
      style={wrapperStyle}
    >
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
    </div>
  );
};

export default AvatarImage;
