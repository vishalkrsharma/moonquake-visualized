import { useStore } from '@/hook/use-store';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const Wireframe = () => {
  const { wireframe } = useStore();
  const fbx = useLoader(FBXLoader, '/assets/wireframe.fbx');
  return (
    wireframe && (
      <primitive
        object={fbx}
        scale={0.02}
      />
    )
  );
};

export default Wireframe;
