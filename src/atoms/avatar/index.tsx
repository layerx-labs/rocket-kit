import React, { HTMLAttributes } from 'react';
import * as Styles from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  url: string;
  alt: string;
}

const Avatar = (props: Props) => {
  const { url, alt, style } = props;
  return <Styles.Image src={url} alt={alt} style={style} />;
};

export default Avatar;
