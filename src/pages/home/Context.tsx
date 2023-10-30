import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { PlaceOfOrigin } from '../../api/types';

interface HomeContextType {
  searchTerm: string;
  onChangeSearchTerm: (searchTerm: string) => void;
  placeOfOrigin: PlaceOfOrigin;
  onChangePlaceOfOrigin: (placeOfOrigin: PlaceOfOrigin) => void;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('using useHomeContext outside HomeContextProvider is not allowed');
  }
  return context;
};

const useHomeContextProvider = () => {
  /** search term */
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeSearchTerm = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm);
  }, []);

  /** place of origin */
  const [placeOfOrigin, setPlaceOfOrigin] = useState<PlaceOfOrigin>('all');

  const onChangePlaceOfOrigin = useCallback((placeOfOrigin: PlaceOfOrigin) => {
    setPlaceOfOrigin(placeOfOrigin);
  }, []);

  return useMemo(
    () => ({
      searchTerm,
      onChangeSearchTerm,
      placeOfOrigin,
      onChangePlaceOfOrigin,
    }),
    [searchTerm, onChangeSearchTerm, placeOfOrigin, onChangePlaceOfOrigin]
  );
};

interface HomeContextProviderProps {
  children: ReactNode;
}

const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  const providerValue = useHomeContextProvider();

  return <HomeContext.Provider value={providerValue}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;
