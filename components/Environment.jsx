import React from 'react';
import { Stars } from '@react-three/drei';

const Environment = () => {
  return (
    <Stars
      radius={300}
      depth={60}
      count={2000}
      factor={7}
      saturation={0}
      fade={true}
      data-testid='stars'
    />
  );
};

export default Environment;
