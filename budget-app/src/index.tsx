import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { colors } from './style/theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
