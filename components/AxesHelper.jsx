import { useDataContext } from '@/hooks/useDataContext';
import React from 'react';

const AxesHelper = () => {
  const { axes } = useDataContext();
  return (
    <axesHelper
      args={[axes]}
      position={[0, 0, 0]}
    />
  );
};

export default AxesHelper;
