import { act } from '@testing-library/react';
import AxesHelper from '../../components/AxesHelper';
import ReactThreeTestRenderer from '@react-three/test-renderer';
import { DataContextProvider } from '@/contexts/DataContext';
import { render, screen } from '@testing-library/react';

describe('AxesHelper', () => {
  it('renders AxesHelper', async () => {
    let renderer;
    await act(async () => {
      renderer = await ReactThreeTestRenderer.create(
        <DataContextProvider>
          <AxesHelper />
        </DataContextProvider>
      );
    });
    const meshChildren = renderer.scene.children;
    expect(meshChildren.length).toBe(1);
  });
});
