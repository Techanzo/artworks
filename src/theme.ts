import { alpha, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#232121',
    },
    secondary: {
      main: '#CCB8AD',
      dark: '#CCB8AD',
    },
    background: {
      paper: '#EDEDED',
    },
    action: {
      disabled: '#907575',
      disabledBackground: '#CCB8AD',
      disabledOpacity: 1,
      hover: '#ECB394',
      hoverOpacity: 1,
      selected: '#B8896F',
      selectedOpacity: 1,
    },
    divider: '#2F1D03',
    // info: {
    //   main: '',
    // },
    // warning: {
    //   main: '',
    // },
    // success: {
    //   main: '',
    // },
    // error: {
    //   main: '',
    // },
    text: {
      disabled: '#907575',
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    allVariants: {
      fontFamily: ['Cuprum', 'sans-serif'].join(', '),
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: `linear-gradient(to right, ${alpha('#2F1D03', 0)}, ${alpha(
            '#2F1D03',
            0.4
          )}, ${alpha('#2F1D03', 0)}) !important`,
          height: 1,
          margin: '2rem 0',
          borderBottom: 'none',
          opacity: 0.5,
        },
      },
    },
  },
});

export default theme;
