import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useDataContext } from '@/hooks/useDataContext';

const Moon = () => {
  const { heightMap } = useDataContext();
  const moonTexture = useLoader(TextureLoader, '/assets/moon.jpg');
  const heightMapTexture = useLoader(TextureLoader, '/assets/height.jpg');

  return (
    <>
      <mesh>
        <sphereGeometry
          attach='geometry'
          args={[2, 64, 64, -Math.PI / 2]}
        />
        <meshStandardMaterial
          map={heightMap === true ? heightMapTexture : moonTexture}
          wireframe={false}
        />
      </mesh>
    </>
  );
};

export default Moon;
