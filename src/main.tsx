import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme, defineStyleConfig } from '@chakra-ui/react';
import App from './App';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    main: {
      primaryDark: '#1F1B24',
      primaryLight: '#fff',
      secondary: '#3c3940',
    },
  },
  Link: {
    baseStyle: {
      // normal styling
      textDecoration: 'none',
      // hover styling goes here
      _hover: {
        textDecoration: 'none',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <ChakraProvider
      theme={theme}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
