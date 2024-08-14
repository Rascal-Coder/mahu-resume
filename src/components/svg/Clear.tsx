import React from 'react';

import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
}

const Clear: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
  return (
    <Image className={`w-${width} h-${height}`} src="/assets/clear.svg" alt="Clear" width={width} height={height} />
  );
};

export default Clear;
