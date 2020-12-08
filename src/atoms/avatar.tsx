import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  url: string;
  alt: string;
}

const Image = styled.img`
  border: 1px solid var(--default, hsl(0, 0%, 16%));
  border-radius: 999px;
  width: 30px;
  height: 30px;
  object-fit: cover;
  overflow: hidden;
`;

const Avatar = (props: Props) => {
  const { url, alt, style } = props;
  return <Image src={url} alt={alt} style={style} />;
};

export default Avatar;
