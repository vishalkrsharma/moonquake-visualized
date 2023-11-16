import { render, screen } from '@testing-library/react';
import Hero from '../../components/Hero';

describe('Hero', () => {
  it('counts Hero Headings', () => {
    render(<Hero />);

    const heading = screen.getAllByRole('heading');
    expect(heading.length).toBe(2);
  });

  it('renders Hero Link', () => {
    render(<Hero />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });
});
