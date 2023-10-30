import { css, Global } from '@emotion/react';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';

import BodyBackground from './assets/body-background.png';
import NotificationProvider from './components/NotificationProvider';
import Home from './pages/home';
import theme from './theme';

const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
  }

  html {
    overflow-y: scroll;
  }

  body {
    line-height: 1;
  }

  svg {
    display: flex;
  }

  main {
    position: relative;
    height: 100%;
  }

  main > .background {
    position: fixed;
    height: 100%;
    width: 100%;
  }
`;

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={globalStyles} />
        <NotificationProvider />
        <main>
          {/* do not need alt text because this image is just for decoration and it does not convey any meaning */}
          <img className="background" src={BodyBackground} alt="" />
          <Home />
        </main>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
