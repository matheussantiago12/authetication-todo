import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import rootReducer from './reducers';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#222b38',
    },
    secondary: {
      main: '#161b27',
    },
  },
});

ReactDOM.render(
  <Provider store={rootReducer}>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
