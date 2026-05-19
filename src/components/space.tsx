import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Environment from './environment';
import Moon from './moon';
import Wireframe from './wireframe';
import AxesHelper from './axes-helper';
import Sun from './sun';
import { Model as Lander } from './lander';
import { Model as Wave } from './wave';
import Menu from './menu';
import QuakeDetails from './quake-details';
import Legend from './legend';
import Places from './places';
import Timeline from './timeline';
import { useStore } from '@/hook/use-store';

const Space = () => {
  // const [QuakeData, setQuakeData] = useState();
  const { places, placesLocation, camera, ambientLightIntensity, directionalLightIntensity, landerLocation, apolloLanders, quake, heightMap } = useStore();

  // useEffect(() => {
  //   (async function () {
  //     const res = await fetch('https://dcs1igsxc5.execute-api.ap-south-1.amazonaws.com/dev/api/quake-data');
  //     const data = await res.json();
  //     setQuakeData(data);
  //   })();
  // }, []);

  return (
    <>
      <div className='absolute h-screen w-screen bg-black text-xl'>
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
      </div>

      {quake && <QuakeDetails quake={quake} />}
      {heightMap && <Legend />}
    </>
  );
};

export default Space;
