import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  getCanFetchItems,
  getCanSeeBottomLoader,
  getCanSeeInitialLoader,
  getCanSeeNoData,
  getCanSeeSensor,
} from './helpers';

export interface UseInfiniteScroll {
  isLoading: boolean;
  numItems: number;
  total: number | null;
  page: number;
  limit: number;
  fetchItems: (nextPage: number, nextLimit: number) => any;
}

const useInfiniteScroll = ({ isLoading, numItems, total, page, limit, fetchItems }: UseInfiniteScroll) => {
  const { ref, inView } = useInView({ rootMargin: '60px' });

  const canSeeInitialLoader = getCanSeeInitialLoader({ isLoading, total, numItems });
  const canSeeNoData = getCanSeeNoData({ isLoading, total });
  const canSeeSensor = getCanSeeSensor({ isLoading, numItems, total });
  const canSeeBottomLoader = getCanSeeBottomLoader({ isLoading });

  useEffect(
    function fetchData() {
      const canFetchItems = getCanFetchItems({ inView, total });
      if (!canFetchItems) return;
      fetchItems(page + 1, limit);
    },
    [fetchItems, inView, limit, page, total]
  );

  return { ref, canSeeInitialLoader, canSeeNoData, canSeeSensor, canSeeBottomLoader };
};

export default useInfiniteScroll;
