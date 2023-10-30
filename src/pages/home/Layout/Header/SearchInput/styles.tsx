import { styled, TextField } from '@mui/material';

import { generateClasses } from '../../../../../utils/dom';

export const searchInputClasses = generateClasses('SearchInput', [
  'searchBoxNotchedOutline',
  'searchBoxAdornment',
]);

export const Searchbox = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: 8,
  '& input': {
    padding: theme.spacing(1, 2, 1, 1),
  },
  [`& .${searchInputClasses.searchBoxNotchedOutline}`]: {
    border: 'none',
  },
  [`& .${searchInputClasses.searchBoxAdornment}`]: {
    pointerEvents: 'none',
  },
}));
