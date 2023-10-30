import {
  Drawer as MuiDrawer,
  drawerClasses as muiDrawerClasses,
  Stack,
  StackProps,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material';

import { generateClasses } from '../../../utils/dom';
import { forMobileOnly, forSmallerThanBigTablet } from '../../../utils/media-queries';

export const artworkDetailsDrawerClasses = generateClasses('ArtworkDetailsDrawer', [
  'yAxis',
  'painting',
  'xAxis',
  'info',
]);

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
  [`& .${muiDrawerClasses.paper}`]: {
    position: 'realtive',
    /** 130px = Header height + surrounding white space */
    height: `calc(100% - 130px)`,
  },
}));

export const BackgroundImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  opacity: 0.7,
}));

export const CloseButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  transform: 'translateY(-50%)',
  borderRadius: '50%',
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  backgroundColor: theme.palette.divider,
  border: 'none',
  zIndex: 1,
  '&:hover': {
    opacity: 0.9,
  },
  '& > svg': {
    color: theme.palette.common.white,
    transform: 'translateY(60%)',
  },
}));

export const Content = styled((props: StackProps) => (
  <Stack direction="row" alignItems="flex-start" gap={8} {...props} />
))(({ theme }) => ({
  overflow: 'auto',
  height: '100%',
  padding: theme.spacing(6, 4, 4),
  [forSmallerThanBigTablet(theme)]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(4),
  },
  [`& .${artworkDetailsDrawerClasses.info}`]: {
    flex: 1,
  },
}));

export const PaintingDimensionGrid = styled('div')(({ theme }) => {
  const YAXIS = 'yAxis';
  const XAXIS = 'xAxis';
  const PAINTING = 'painting';
  return {
    flexShrink: 0,
    width: 450,
    aspectRatio: 1,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr auto',
    gridTemplateAreas: `
      "${YAXIS} ${PAINTING}"
      ". ${XAXIS}"
    `,
    gap: theme.spacing(3),
    [forMobileOnly(theme)]: {
      width: 310,
    },
    [`& .${artworkDetailsDrawerClasses.yAxis}`]: {
      gridArea: YAXIS,
    },
    [`& .${artworkDetailsDrawerClasses.xAxis}`]: {
      gridArea: XAXIS,
    },
    [`& .${artworkDetailsDrawerClasses.painting}`]: {
      gridArea: PAINTING,
    },
  };
});

export const Cell = styled((props: StackProps) => (
  <Stack direction="row" alignItems="center" gap={2} {...props} />
))(({ theme }) => ({}));

export const Label = styled((props: TypographyProps) => (
  <Typography variant="h6" component="div" {...props} />
))(() => ({
  opacity: 0.7,
  fontWeight: 300,
  minWidth: 120,
}));

export const Value = styled((props: TypographyProps) => (
  <Typography variant="h6" component="div" fontWeight="500" {...props} />
))(() => ({}));
