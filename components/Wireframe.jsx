import { useDataContext } from '@/hooks/useDataContext';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const Wireframe = () => {
  const { wireframe } = useDataContext();
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
