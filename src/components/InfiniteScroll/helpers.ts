export function getCanFetchItems({ inView, total }: { inView: boolean; total: number | null }) {
  if (!inView) return false;
  return total !== 0;
}

export function getCanSeeSensor({
  isLoading,
  numItems,
  total,
}: {
  isLoading: boolean;
  numItems: number;
  total: number | null;
}) {
  if (isLoading) return false;
  if (total !== null && numItems >= total) return false;
  return true;
}

export function getCanSeeInitialLoader({
  isLoading,
  total,
  numItems,
}: {
  isLoading: boolean;
  total: number | null;
  numItems: number;
}) {
  if (!isLoading) return false;
  if (total === 0) return false;
  return numItems === 0;
}

export function getCanSeeNoData({ isLoading, total }: { isLoading: boolean; total: number | null }) {
  if (isLoading) return false;
  return total === 0;
}

export function getCanSeeBottomLoader({ isLoading }: { isLoading: boolean }) {
  return isLoading;
}
