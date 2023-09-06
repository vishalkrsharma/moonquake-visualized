import Space from '@/components/Space';
import { DataContextProvider } from '@/contexts/DataContext';
import React from 'react';

export default function HomePage() {
  return (
    <DataContextProvider>
      <Space />
    </DataContextProvider>
  );
}
