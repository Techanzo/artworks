import { Paper, styled } from '@mui/material';

import { generateClasses } from '../../../utils/dom';

export const paintingClasses = generateClasses('Painting', ['fullHeightThumbnail', 'fullWidthThumbnail']);

export const Root = styled(Paper)(({ theme }) => ({
  border: `6px solid ${theme.palette.common.black}`,
  aspectRatio: 1,
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  position: 'relative',
}));

export const Image = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '100%',
  maxHeight: '100%',
  padding: theme.spacing(1),
  objectFit: 'cover',
  [`&.${paintingClasses.fullHeightThumbnail}`]: {
    height: '100%',
  },
  [`&.${paintingClasses.fullWidthThumbnail}`]: {
    width: '100%',
  },
}));
