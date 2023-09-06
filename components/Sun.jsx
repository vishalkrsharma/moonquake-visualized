import React, { FC } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Sun = () => {
  const sunTexture = useLoader(THREE.TextureLoader, '/assets/sun.jpg');

  return (
    <mesh position={[0, 0, 500]}>
      <sphereGeometry
        attach='geometry'
        args={[15, 100, 100]}
      />
      <meshStandardMaterial
        map={sunTexture}
        wireframe={false}
      />
      <spotLight
        position={[0, 0, 0]}
        intensity={2}
        angle={Math.PI}
      />
    </mesh>
  );
};

export default Sun;
