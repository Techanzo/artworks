import { Theme } from '@mui/material';

export const forMobileOnly = (theme: Theme) => theme.breakpoints.only('xs');
export const forNonMobile = (theme: Theme) => theme.breakpoints.not('xs');
export const forLargerThanOrEqualToMobile = (theme: Theme) => theme.breakpoints.up('xs');

export const forSmallerThanTablet = (theme: Theme) => theme.breakpoints.down('sm');
export const forTabletOnly = (theme: Theme) => theme.breakpoints.only('sm');
export const forNonTablet = (theme: Theme) => theme.breakpoints.not('sm');
export const forLargerThanOrEqualToTablet = (theme: Theme) => theme.breakpoints.up('sm');

export const forSmallerThanBigTablet = (theme: Theme) => theme.breakpoints.down('md');
export const forBigTabletOnly = (theme: Theme) => theme.breakpoints.only('md');
export const forNonBigTablet = (theme: Theme) => theme.breakpoints.not('md');
export const forLargerThanOrEqualToBigTablet = (theme: Theme) => theme.breakpoints.up('md');

export const forSmallerThanLaptop = (theme: Theme) => theme.breakpoints.down('lg');
export const forLaptopOnly = (theme: Theme) => theme.breakpoints.only('lg');
export const forNonLaptop = (theme: Theme) => theme.breakpoints.not('lg');
export const forLargerThanOrEqualToLaptop = (theme: Theme) => theme.breakpoints.up('lg');

export const forSmallerThanDesktop = (theme: Theme) => theme.breakpoints.down('xl');
export const forDesktopOnly = (theme: Theme) => theme.breakpoints.only('xl');
export const forNonDesktop = (theme: Theme) => theme.breakpoints.not('xl');
export const forLargerThanOrEqualToDesktop = (theme: Theme) => theme.breakpoints.up('xl');
