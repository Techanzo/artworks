import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useDebounce } from 'usehooks-ts';

import { searchArtworks } from '../../../api';
import { Artwork } from '../../../api/types';
import { useHomeContext } from '../Context';

const limit = 12;

const useArtWall = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  const { searchTerm, placeOfOrigin } = useHomeContext();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const fetchItems = useCallback(
    async (page: number, limit: number) => {
      setIsLoading(true);
      if (page === 1) {
        setTotal(null);
        setArtworks([]);
      }
      try {
        const response = await searchArtworks({
          page,
          limit,
          query: debouncedSearchTerm,
          placeOfOrigin: placeOfOrigin === 'france' ? 'france' : undefined,
        });
        setTotal(response.pagination.total);
        setPage(response.pagination.page);
        setArtworks((prevVal) => [...(page === 1 ? [] : prevVal), ...response.artworks]);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [debouncedSearchTerm, placeOfOrigin]
  );

  useEffect(() => {
    fetchItems(1, limit);
  }, [fetchItems]);

  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleClickArtwork = (artwork: Artwork) => () => {
    setSelectedArtwork(artwork);
  };

  const handleCloseArtworkDetailsDrawer = () => {
    setSelectedArtwork(null);
  };

  return {
    isLoading,
    artworks,
    total,
    page,
    limit,
    fetchItems,
    searchTerm: debouncedSearchTerm,
    selectedArtwork,
    handleClickArtwork,
    handleCloseArtworkDetailsDrawer,
  };
};

export default useArtWall;
