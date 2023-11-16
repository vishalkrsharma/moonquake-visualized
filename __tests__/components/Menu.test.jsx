import { render, screen, fireEvent } from '@testing-library/react';
import Menu from '../../components/Menu';
import { DataContextProvider } from '@/contexts/DataContext';

describe('Menu', () => {
  it('renders Menu Tables', () => {
    render(
      <DataContextProvider>
        <Menu />
      </DataContextProvider>
    );
    const tables = screen.getAllByRole('table');
    expect(tables.length).toBe(2);
  });

  it('counts Rows in Tables', () => {
    const { container } = render(
      <DataContextProvider>
        <Menu />
      </DataContextProvider>
    );

    const rows = container.querySelectorAll('tbody tr');

    expect(rows.length).toBe(7);
  });

  it('counts Buttons in Tables', () => {
    render(
      <DataContextProvider>
        <Menu />
      </DataContextProvider>
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(7);
  });

  it('counts Input[Range] in Tables', () => {
    render(
      <DataContextProvider>
        <Menu />
      </DataContextProvider>
    );

    const sliders = screen.getAllByTestId('slider');

    expect(sliders.length).toBe(2);
  });
});
