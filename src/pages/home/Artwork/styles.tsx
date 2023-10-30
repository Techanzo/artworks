import { CSSProperties } from 'react';

import { Stack, StackProps, styled, Typography, TypographyProps } from '@mui/material';

export const Root = styled('button')(({ theme }) => ({
  cursor: 'pointer',
  transform: 'scale(1)',
  transition: 'transform 200ms linear',
  textAlign: 'left',
  backgroundColor: 'transparent',
  border: 'none',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export const PlaceOfOrigin = styled((props: StackProps) => (
  <Stack direction="row" alignItems="center" gap={1} {...props} />
))(({ theme }) => ({
  marginBottom: theme.spacing(0.25),
  padding: theme.spacing(0.5, 1.5),
  backgroundColor: theme.palette.divider,
  color: theme.palette.common.white,
  display: 'inline-flex',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    right: '-24px',
    top: '-24px',
    height: 0,
    width: 0,
    // 24px = 16px icon height + (4 * 2 = 8px) padding
    borderTop: '24px solid transparent',
    borderBottom: `24px solid ${theme.palette.divider}`,
    borderRight: '24px solid transparent',
  },
}));

export const NamePlateBorder = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.375),
  backgroundImage: 'linear-gradient(270deg, #D28718 0%, #989A13 100%)',
  margin: theme.spacing(0.5, 'auto', 0),
  width: '75%',
}));

export const NamePlate = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  textAlign: 'center',
  padding: theme.spacing(1),
  position: 'relative',
}));

export const Title = styled((props: TypographyProps) => <Typography variant="body1" {...props} />)(
  ({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    lineClamp: '2',
    WebkitBoxOrient: 'vertical',
  })
);

const revet: CSSProperties = {
  content: '""',
  position: 'absolute',
  height: '6px',
  width: '6px',
  backgroundImage: 'radial-gradient(50% 50% at 50% 50%, #D9D9D9 0%, rgba(144, 144, 144, 0.51) 100%)',
  borderRadius: '50%',
};

export const LeftRevets = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  '&:before': {
    ...revet,
    left: theme.spacing(0.5),
    top: theme.spacing(0.5),
    transform: 'translate(-50%, -50%)',
  },
  '&:after': {
    ...revet,
    left: theme.spacing(0.5),
    bottom: theme.spacing(0.5),
    transform: 'translate(-50%, 50%)',
  },
}));

export const RightRevets = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100%',
  '&:before': {
    ...revet,
    right: theme.spacing(0.5),
    top: theme.spacing(0.5),
    transform: 'translate(50%, -50%)',
  },
  '&:after': {
    ...revet,
    right: theme.spacing(0.5),
    bottom: theme.spacing(0.5),
    transform: 'translate(50%, 50%)',
  },
}));
