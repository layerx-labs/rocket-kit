import React from 'react';
import icons from '../../ions/icons';

interface IconProps {
  fill?: string;
  icon: string;
}

const Icon = (props: IconProps) => {
  const { fill = '#000000', icon } = props;

  return (
    <svg viewBox="0 0 32 32">
      <path style={{ fill }} d={icons[icon]} />
    </svg>
  );
};

export default Icon;
