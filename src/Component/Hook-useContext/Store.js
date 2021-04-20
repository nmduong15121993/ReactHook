import { createContext } from 'react';

export  const  themeInt =  {
  theme1: 'light',
  theme2: 'dark'
};
export const StoreContext = createContext(themeInt);