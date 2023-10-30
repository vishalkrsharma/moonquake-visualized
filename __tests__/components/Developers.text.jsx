import { render, screen } from '@testing-library/react';
import Developers from '../../components/Developers';

describe('Developers', () => {
  render(<Developers />);
  it('renders Developers Heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('renders Developers Images', () => {
    render(<Developers />);
    const devImages = screen.getAllByRole('img');
    expect(devImages.length).toBe(4);
  });

  it('renders Developers Names', () => {
    render(<Developers />);
    const devNames = screen.getAllByTestId('dev-name');
    expect(devNames.length).toBe(4);
  });

  it('renders Developers Social Links', () => {
    render(<Developers />);
    const devLinks = screen.getAllByRole('link');
    expect(devLinks.length).toBe(8);
  });
});
