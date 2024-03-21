import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import { useDataContext } from '@/hooks/useDataContext';
import Environment from './Environment';
import Moon from './Moon';
import Wireframe from './Wireframe';
import AxesHelper from './AxesHelper';
import Sun from './Sun.jsx';
import { Model as Lander } from './Lander';
import { Model as Wave } from './Wave';
import Menu from './Menu';
import QuakeInfo from './QuakeInfo';
import Legend from './Legend';
import Places from './Places';
import styles from '@/scss/components/Space.module.scss';
import Timeline from './Timeline';

const Space = () => {
  const [QuakeData, setQuakeData] = useState();
  const { places, placesLocation, camera, ambientLightIntensity, directionalLightIntensity, landerLocation, apolloLanders, quake, heightMap } =
    useDataContext();

  useEffect(() => {
    (async function () {
      const res = await fetch('https://dcs1igsxc5.execute-api.ap-south-1.amazonaws.com/dev/api/quake-data');
      const data = await res.json();
      setQuakeData(data);
    })();
  }, []);

  return (
    <>
      <Link
        className={styles.back}
        href='/'
      >
        &lt;Back to Home
      </Link>
      <div className={styles.spaceContainer}>
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
            intensity={500000}
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
            placesLocation.map((place, index) => (
              <Places
                key={index}
                lat={place[0]}
                long={place[1]}
                name={place[2]}
              />
            ))}
        </Canvas>
        <Menu />
        <Timeline QuakeData={QuakeData} />
      </div>
      <QuakeInfo />
      {heightMap && <Legend />}
    </>
  );
};

export default Space;
