import { render, screen } from '@testing-library/react';
import Environment from '../../components/Environment';
import { Canvas } from '@react-three/fiber';

describe('Environment', () => {
  it('renders Environment', () => {
    render(
      <Canvas>
        <Environment />
      </Canvas>
    );

    const environment = screen.getByTestId('stars');

    expect(environment).toBeInTheDocument();
  });
});
