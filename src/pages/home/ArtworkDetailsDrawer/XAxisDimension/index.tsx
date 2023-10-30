import { Skeleton, Stack, Typography } from '@mui/material';

import { Arrow, xAxisDimensionClasses } from './styles';

export interface XAxisDimensionProps {
  cm: number;
  inch: number;
  className?: string;
  isLoading?: boolean;
}

const XAxisDimension = ({ cm, inch, className, isLoading }: XAxisDimensionProps) => {
  if (!isLoading && cm === 0 && inch === 0) return null;

  return (
    <Stack className={className}>
      <Stack direction="row" alignItems="center">
        <Arrow className={xAxisDimensionClasses.arrowLeft} />
        <Typography whiteSpace="nowrap" px={2}>
          {isLoading ? <Skeleton variant="text" width={70} /> : `${cm} cm`}
        </Typography>
        <Arrow className={xAxisDimensionClasses.arrowRight} />
      </Stack>
      <Typography whiteSpace="nowrap" px={2} alignSelf="center">
        {isLoading ? <Skeleton variant="text" width={70} /> : `( ${inch} in. )`}
      </Typography>
    </Stack>
  );
};

export default XAxisDimension;
