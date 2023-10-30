import { styled } from '@mui/material';

import { generateClasses } from '../../../../utils/dom';

export const yAxisDimensionClasses = generateClasses('YAxisDimension', ['arrowTop', 'arrowBottom']);

export const Arrow = styled('div')(({ theme }) => ({
  // flex: 1,
  width: 2,
  height: '100%',
  color: theme.palette.primary.main,
  backgroundColor: 'currentcolor',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -4,
    height: 0,
    width: 0,
    borderBottom: `14px solid currentcolor`,
    borderLeft: `5px solid transparent`,
    borderRight: `5px solid transparent`,
  },
  [`&.${yAxisDimensionClasses.arrowBottom}`]: {
    transform: 'rotate(180deg)',
  },
}));
export const Text = styled('p')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -100%) rotate(-90deg)',
}));
