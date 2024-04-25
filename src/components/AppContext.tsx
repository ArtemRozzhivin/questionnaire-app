'use client';

import { IMovie } from '@/types';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface AppContextProps {
  data: IData;
  setData: React.Dispatch<React.SetStateAction<IData>>;
}

interface IData {
  rate: number;
  movies: IMovie[];
}

const initialData = {
  rate: 0,
  movies: [],
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IData>(initialData);

  const value: AppContextProps = {
    data,
    setData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
