import React, { CSSProperties } from 'react';
import icons from '../../ions/icons';

interface IconProps {
  fill?: string;
  icon: string;
  className?: string;
  style?: CSSProperties;
}

const Icon = (props: IconProps) => {
  const { fill, icon, className = 'icon', style } = props;

  return (
    <svg viewBox="0 0 32 32" className={className} style={style}>
      <path style={{ fill }} d={icons[icon]} />
    </svg>
  );
};

export default Icon;
