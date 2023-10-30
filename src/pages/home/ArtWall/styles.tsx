import { styled } from '@mui/material';

export const Grid = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(264px, 1fr))',
  alignItems: 'flex-start',
  gap: theme.spacing(4),
  padding: theme.spacing(4),
}));
