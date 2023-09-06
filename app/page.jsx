'use client';

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Environment from '@/components/Environment';
import Moon from '@/components/Moon';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { styled } from 'styled-components';
import { DataContextProvider } from '@/contexts/DataContext';
import GlobalStyles from '@/styles/GlobalStyles';

const Home = () => {
  return (
    <DataContextProvider>
      <Suspense fallback={<></>}>
        <GlobalStyles />
        <HomeContainer>
          <Canvas
            className='canvas'
            camera={{ fov: 35, zoom: 0.5, near: 1, far: 1000 }}
          >
            <OrbitControls autoRotate={true} />
            <Suspense>
              <ambientLight intensity={2 / 100} />
              <directionalLight
                position={[0, 0, 100]}
                intensity={50 / 100}
              />
              <Environment />
              <Moon />
            </Suspense>
          </Canvas>
          <Navbar />
          <Hero />
        </HomeContainer>
      </Suspense>
    </DataContextProvider>
  );
};

export default Home;

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
`;
