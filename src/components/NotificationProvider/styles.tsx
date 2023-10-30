import { ToastContainerProps } from 'react-toastify';

import { styled } from '@mui/material';

import { generateClasses } from '../../utils/dom';
import { forMobileOnly } from '../../utils/media-queries';

export interface Props extends ToastContainerProps {}

export const toastClasses = {
  ...generateClasses('Toast', ['root', 'toast', 'body', 'progress']),
};

export const StyledContainer = styled('div')(({ theme }) => ({
  [`& .${toastClasses.root}`]: {
    width: '100%',
    maxWidth: 400,
  },
  [`& .${toastClasses.toast}`]: {
    marginBottom: 0,
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    borderRadius: 8,
    borderLeftWidth: 6,
    borderLeftStyle: 'solid',
    borderColor: 'transparent',
    [forMobileOnly(theme)]: {
      borderRadius: 4,
      '& .Toastify__toast-icon': {
        display: 'none',
      },
    },
    [`& + .${toastClasses.toast}`]: {
      marginTop: theme.spacing(2),
    },
    '&.Toastify__toast--success': {
      borderColor: theme.palette.success.light,
      backgroundImage: `linear-gradient(270deg, ${theme.palette.success.dark} 0%, ${theme.palette.grey[900]} 100%)`,
      '& .Toastify__toast-icon > svg': {
        fill: theme.palette.success.light,
      },
    },
    '&.Toastify__toast--warning': {
      borderColor: theme.palette.warning.light,
      backgroundImage: `linear-gradient(270deg, ${theme.palette.warning.dark} 0%, ${theme.palette.grey[900]} 100%)`,
      '& .Toastify__toast-icon > svg': {
        fill: theme.palette.warning.light,
      },
    },
    '&.Toastify__toast--error': {
      borderColor: theme.palette.error.light,
      backgroundImage: `linear-gradient(270deg, ${theme.palette.error.dark} 0%, ${theme.palette.grey[900]} 100%)`,
      '& .Toastify__toast-icon > svg': {
        fill: theme.palette.error.light,
      },
    },
    '&.Toastify__toast--info': {
      borderColor: theme.palette.primary.light,
      backgroundImage: `linear-gradient(270deg, ${theme.palette.primary.dark} 0%, ${theme.palette.grey[900]} 100%)`,
      '& .Toastify__toast-icon > svg': {
        fill: theme.palette.primary.light,
      },
    },
  },
  [`& .${toastClasses.body}`]: {
    alignItems: 'flex-start',
    '& .Toastify__toast-icon': {
      marginTop: theme.spacing(0.5),
    },
  },
}));
