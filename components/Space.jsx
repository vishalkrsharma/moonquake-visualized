import React from 'react';
import Link from 'next/link';
import Environment from './Environment';
import Moon from './Moon.jsx';
import Wireframe from './Wireframe';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import AxesHelper from './AxesHelper';
import Sun from './Sun.jsx';
import { Model as Lander } from './Lander';
import { Model as Wave } from './Wave';
import Menu from './Menu';
import QuakeInfo from './QuakeInfo';
import Legend from './Legend';
import Places from './Places';
import { useDataContext } from '@/hooks/useDataContext';

const Space = () => {
  const { places, placesLocation, camera, ambientLightIntensity, directionalLightIntensity, landerLocation, apolloLanders, quake, heightMap } =
    useDataContext();

  return (
    <>
      <Back href='/'>&lt;Back to Home</Back>
      <SpaceContainer>
        <Canvas>
          <PerspectiveCamera
            makeDefault
            position={camera}
          />
          <OrbitControls
            enableZoom={true}
            minDistance={3.2}
            maxDistance={6}
            enablePan={true}
            autoRotate={false}
          />
          <ambientLight intensity={ambientLightIntensity / 100} />
          <spotLight
            position={[0, 0, 0]}
            intensity={2}
            angle={Math.PI}
          />
          <directionalLight
            position={[0, 0, 100]}
            intensity={directionalLightIntensity / 100}
          />
          <Environment />
          <Moon />
          <Sun />
          <Wireframe />
          <AxesHelper />
          <Sun />
          {apolloLanders &&
            landerLocation.map((lander, index) => (
              <Lander
                key={index}
                lat={lander[0]}
                long={lander[1]}
                num={lander[2]}
              />
            ))}
          {quake !== null && <Wave quake={quake} />}
          {places &&
            placesLocation.map((place, index) => {
              return (
                <Places
                  key={index}
                  lat={place[0]}
                  long={place[1]}
                  name={place[2]}
                />
              );
            })}
        </Canvas>
        <Menu />
      </SpaceContainer>
      <QuakeInfo />
      {heightMap && <Legend />}
    </>
  );
};

export default Space;

const SpaceContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  font-size: 1.25rem;
  background-color: #000000;
`;

const Back = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  color: #ffffff;
  border: 1px solid #ffffff;
  margin: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 1.25rem;
  z-index: 1;
`;
