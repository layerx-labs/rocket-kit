import React, { CSSProperties } from 'react';
import * as Styles from './styles';
interface AvatarProps {
  url: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}

const Avatar = (props: AvatarProps) => {
  const { url, alt, style, className = 'tk-avatar' } = props;
  return (
    <Styles.Image className={className} src={url} alt={alt} style={style} />
  );
};

export default Avatar;
