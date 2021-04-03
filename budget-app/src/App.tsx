import React from 'react';
import UserContextProvider from './constexts/userContext';
import './App.css';

import HomePage from './views/pages/HomePage/HomePage';

function App() {
  return (
    <UserContextProvider>
      <HomePage />
    </UserContextProvider>
  );
}

export default App;
