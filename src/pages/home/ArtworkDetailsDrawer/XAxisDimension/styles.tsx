import { styled } from '@mui/material';

import { generateClasses } from '../../../../utils/dom';

export const xAxisDimensionClasses = generateClasses('XAxisDimension', ['arrowLeft', 'arrowRight']);

export const Arrow = styled('div')(({ theme }) => ({
  // flex: 1,
  height: 2,
  width: '100%',
  color: theme.palette.primary.main,
  backgroundColor: 'currentcolor',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: -2,
    top: -4,
    height: 0,
    width: 0,
    borderRight: `14px solid currentcolor`,
    borderTop: `5px solid transparent`,
    borderBottom: `5px solid transparent`,
  },
  [`&.${xAxisDimensionClasses.arrowRight}`]: {
    transform: 'rotate(180deg)',
  },
}));
