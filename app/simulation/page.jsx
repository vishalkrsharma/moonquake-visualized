'use client';

import Space from '@/components/Space';
import { DataContextProvider } from '@/contexts/DataContext';

const SimulationPage = () => {
  return (
    <DataContextProvider>
      <Space />
    </DataContextProvider>
  );
};

export default SimulationPage;
