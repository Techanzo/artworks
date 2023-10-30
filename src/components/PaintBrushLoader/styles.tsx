import { styled } from '@mui/material';

export const Root = styled('div')(({ theme }) => ({
  display: 'inline-block',
  transformOrigin: '64% 50%',
  animation: 'rotation 1200ms linear 0s infinite backwards',
  '@keyframes rotation': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(359deg)',
    },
  },
}));
