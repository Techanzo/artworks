import { Stack, StackProps, styled } from '@mui/material';

import HeaderBackground from '../../../../assets/header-background.png';
import HeaderFakeBackground from '../../../../assets/header-fake-background.png';
import { generateClasses } from '../../../../utils/dom';
import { forMobileOnly } from '../../../../utils/media-queries';

export const headerClasses = generateClasses('Header', [
  'placeholder',
  'placeholder2',
  'mobileControls',
  'searchBox',
  'searchBoxNotchedOutline',
  'searchBoxAdornment',
  'placeOfOrigin',
]);

export const Root = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  width: `calc(100% - ${theme.spacing(4 * 2)})`,
  zIndex: 1,
  backgroundImage: `url("${HeaderFakeBackground}")`,
}));

export const Spacer = styled('div')(({ theme }) => ({
  height: theme.spacing(4),
}));

export const WoodenBar = styled((props: StackProps) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" {...props} />
))(({ theme }) => ({
  backgroundImage: `url("${HeaderBackground}")`,
  border: `4px solid ${theme.palette.divider}`,
  borderRadius: 8,
  padding: theme.spacing(1, 8),
  position: 'relative',
  [`& .${headerClasses.placeholder}`]: {
    flex: 1,
  },
  [`& .${headerClasses.placeholder2}`]: {
    flex: 0.5,
  },
  [`& .${headerClasses.searchBox}`]: {
    flex: 2,
  },
  [`& .${headerClasses.placeOfOrigin}`]: {
    flex: 0.6,
  },
  [forMobileOnly(theme)]: {
    minHeight: theme.spacing(7),
    padding: theme.spacing(0, 2),
    gap: theme.spacing(2),
    [`& .${headerClasses.mobileControls}`]: {
      flex: 1,
    },
  },
}));

export const NamePlate = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '5%',
  transform: 'translate(0, -50%)',
  [forMobileOnly(theme)]: {
    left: 0,
    width: '100%',
    padding: 'inherit',
  },
}));
