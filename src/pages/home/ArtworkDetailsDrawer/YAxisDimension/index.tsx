import { Skeleton, Stack, Typography } from '@mui/material';

import { Arrow, Text, yAxisDimensionClasses } from './styles';

export interface YAxisDimensionProps {
  cm: number;
  inch: number;
  className?: string;
  isLoading?: boolean;
}

const YAxisDimension = ({ cm, inch, className, isLoading }: YAxisDimensionProps) => {
  if (!isLoading && cm === 0 && inch === 0) return null;

  return (
    <Stack direction="row" gap={2} className={className} position="relative">
      <Typography whiteSpace="nowrap" px={2} alignSelf="center" position="static" component="div">
        <Text>{isLoading ? <Skeleton variant="text" width={70} /> : `( ${inch} in. )`}</Text>
      </Typography>
      <Stack alignItems="center" position="relative">
        <Arrow className={yAxisDimensionClasses.arrowTop} />
        <Typography whiteSpace="nowrap" py={5} position="static" component="div">
          <Text>{isLoading ? <Skeleton variant="text" width={70} /> : `${cm} cm`}</Text>
        </Typography>
        <Arrow className={yAxisDimensionClasses.arrowBottom} />
      </Stack>
    </Stack>
  );
};

export default YAxisDimension;
