import { DataContext } from '@/contexts/DataContext';
import { useContext } from 'react';

export const useDataContext = () => {
  const dataContext = useContext(DataContext);
  if (!dataContext) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }
  return dataContext;
};
