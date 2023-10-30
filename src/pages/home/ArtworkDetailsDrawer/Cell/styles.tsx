import { styled, Typography, TypographyProps } from '@mui/material';

export const Label = styled((props: TypographyProps) => (
  <Typography variant="h6" component="div" {...props} />
))(() => ({
  opacity: 0.7,
  fontWeight: 300,
  minWidth: 120,
}));

export const Value = styled((props: TypographyProps) => (
  <Typography variant="h6" component="div" fontWeight="500" {...props} />
))(() => ({
  width: '100%',
}));
