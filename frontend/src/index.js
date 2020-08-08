import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import App from './App';
import store from './services/store';
import './index.css';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#161b27',
    },
    secondary: {
      main: '#222b38',
    },
    background: {
      default: '#161b27',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
