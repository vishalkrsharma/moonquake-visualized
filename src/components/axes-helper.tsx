import { useStore } from '@/hook/use-store';

const AxesHelper = () => {
  const { axes } = useStore();
  return (
    <axesHelper
      args={[axes]}
      position={[0, 0, 0]}
    />
  );
};

export default AxesHelper;
