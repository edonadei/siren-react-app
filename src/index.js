import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { ProductProvider } from './context';
import { AuthProvider } from './contextAuth'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#557a95',
      light: '#84a9c6',
      dark: '#274e67'
    },
    secondary: {
      light: '#5d5c61',
      main: '#8a898e',
      dark: '#343337'
    },
  },
});

ReactDOM.render(

  <MuiThemeProvider theme={theme}>
    <AuthProvider>
      <ProductProvider>
        <Router>
          <App />
        </Router>
      </ProductProvider>
    </AuthProvider>
  </MuiThemeProvider>
  ,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
