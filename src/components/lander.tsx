import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Model(props: { lat: number; long: number; num: number }) {
  const group = useRef<THREE.Group>(null);

  const { lat, long } = props;

  const degToRad = (deg: number) => (deg * Math.PI) / 180;

  useFrame(() => {
    group.current?.lookAt(0, 0, 0);
  });

  const r = 2;

  const { nodes, materials } = useGLTF('/assets/lander.glb');

  const mesh = nodes.Apollo_lunar_module as THREE.Mesh;

  return (
    <group
      ref={group}
      dispose={null}
      scale={0.0007}
      position={[
        r * Math.sin(Math.PI / 2 - degToRad(lat)) * Math.sin(degToRad(long)),
        r * Math.cos(Math.PI / 2 - degToRad(lat)),
        r * Math.sin(Math.PI / 2 - degToRad(lat)) * Math.cos(degToRad(long)),
      ]}
    >
      <mesh
        geometry={mesh.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        material={materials['Material.001']}
      />
    </group>
  );
}

useGLTF.preload('/assets/lander.glb');
