import { ReactNode } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import PaintBrushLoader from '../PaintBrushLoader';
import { Sensor } from './styles';
import useInfiniteScroll, { UseInfiniteScroll } from './vm';

interface InfiniteScrollProps extends UseInfiniteScroll {
  children: ReactNode;
  noData?: ReactNode;
}

const InfiniteScroll = ({ children, noData, ...vmProps }: InfiniteScrollProps) => {
  const { ref, canSeeInitialLoader, canSeeNoData, canSeeSensor, canSeeBottomLoader } =
    useInfiniteScroll(vmProps);

  if (canSeeInitialLoader) {
    return (
      <Stack justifyContent="center" alignItems="center" height="100%">
        <PaintBrushLoader />
      </Stack>
    );
  }

  if (canSeeNoData) {
    if (!noData || typeof noData === 'string') {
      return (
        <Stack justifyContent="center" alignItems="center" height="100%">
          <Typography variant="body2">{noData ?? 'No data found'}</Typography>
        </Stack>
      );
    }

    return <>{noData}</>;
  }

  return (
    <Stack>
      <div>{children}</div>
      {canSeeSensor && <Sensor ref={ref} />}
      {canSeeBottomLoader && (
        <Box margin="0 auto" pb={4}>
          <PaintBrushLoader size={30} />
        </Box>
      )}
    </Stack>
  );
};

export default InfiniteScroll;
