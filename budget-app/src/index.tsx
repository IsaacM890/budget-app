import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './style/theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
