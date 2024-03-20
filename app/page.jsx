'use client';

import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';

import Environment from '@/components/Environment';
import Moon from '@/components/Moon';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { DataContextProvider } from '@/contexts/DataContext';
import styles from '@/scss/pages/HomePage.module.scss';

const HomePage = () => {
  return (
    <DataContextProvider>
      <main className={styles.homePageContainer}>
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
        <Navbar />
        <Hero />
      </main>
    </DataContextProvider>
  );
};

export default HomePage;
