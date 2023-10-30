import { Popper as MuiPopper, PopperProps as MuiPopperProps, styled } from '@mui/material';

const Popper = styled(MuiPopper)<MuiPopperProps>(({ theme, color }) => {
  return {
    filter: 'drop-shadow(5px 4px 240px #7d7d7d)',
    boxShadow: 'none',
    zIndex: 2,
    '& .arrow': {
      top: 0,
      left: 0,
      width: '1em',
      height: '1em',
      '&::before': {
        content: '""',
        display: 'block',
        margin: 'auto',
        transform: 'rotate(45deg)',
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        // backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
      },
    },
    '&[data-popper-placement*="bottom"] .arrow': {
      marginTop: '-0.5em',
    },
    '&[data-popper-placement*="top"] .arrow': {
      marginBottom: '-0.5em',
    },
    '&[data-popper-placement*="right"] .arrow': {
      marginLeft: '-0.5em',
    },
    '&[data-popper-placement*="left"] .arrow': {
      marginRight: '-0.5em',
    },
  };
});

export default Popper;
