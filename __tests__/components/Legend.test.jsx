import { render, screen } from '@testing-library/react';
import Legend from '../../components/Legend';

describe('Legend', () => {
  it('counts Legend Labels', () => {
    render(<Legend />);

    const labels = screen.getAllByTestId('label');
    expect(labels.length).toBe(2);
  });

  it('renders Legend Image', () => {
    render(<Legend />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
