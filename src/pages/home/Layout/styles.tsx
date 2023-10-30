import { Stack, StackProps, styled } from '@mui/material';

import { forMobileOnly } from '../../../utils/media-queries';

export const Root = styled((props: StackProps) => <Stack gap={2} {...props} />)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(14, 4),
  [forMobileOnly(theme)]: {
    alignItems: 'center',
    padding: theme.spacing(14, 2.5),
  },
}));
