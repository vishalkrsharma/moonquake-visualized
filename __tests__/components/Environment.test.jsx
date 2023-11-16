import { act } from '@testing-library/react';
import Environment from '../../components/Environment';
import ReactThreeTestRenderer from '@react-three/test-renderer';

describe('Environment', () => {
  it('renders Environment', async () => {
    let renderer;
    await act(async () => {
      renderer = await ReactThreeTestRenderer.create(<Environment />);
    });

    const meshChildren = renderer.scene.children[0].allChildren;
    expect(meshChildren.length).toBe(2);
  });
});
