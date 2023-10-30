import { Menu, menuClasses, MenuItem as MuiMenuItem, styled } from '@mui/material';

import { generateClasses } from '../../../../../utils/dom';

export const placeOfOriginClasses = generateClasses('PlaceOfOrigin', ['selectedPlaceOfOrigin']);

export const PlaceOfOriginList = styled(Menu)(({ theme }) => ({
  [`& .${menuClasses.paper}`]: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  [`&.${placeOfOriginClasses.selectedPlaceOfOrigin}`]: {
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
    },
  },
}));
