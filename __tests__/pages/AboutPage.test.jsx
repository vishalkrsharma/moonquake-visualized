import { render, screen } from '@testing-library/react';
import About from '@/app/about/page';

describe('About', () => {
  it('renders details of NASA Apollo Mission', () => {
    render(<About />);

    const apolloParagraph = screen.getByRole('heading');
    expect(apolloParagraph).toBeInTheDocument();
  });
});
