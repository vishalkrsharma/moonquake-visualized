'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Environment from '@/components/environment';
import Moon from '@/components/moon';
import Hero from '@/components/hero';

const HomePage = () => {
  return (
    <main className='relative h-screen bg-black'>
      <Canvas camera={{ fov: 35, zoom: 0.5, near: 1, far: 1000 }}>
        <OrbitControls autoRotate={true} />
        <ambientLight intensity={2 / 100} />
        <directionalLight
          position={[0, 0, 100]}
          intensity={50 / 100}
        />
        <Environment />
        <Moon />
      </Canvas>
      <Hero />
    </main>
  );
};

export default HomePage;
