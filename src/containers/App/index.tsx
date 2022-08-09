import React from 'react';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { WordsToNumber } from '../WordsToNumber';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline enableColorScheme />
      <WordsToNumber />
    </ThemeProvider>
  );
}

export default App;
