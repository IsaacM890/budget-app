import React from 'react';
import UserProvider from './constexts/userContext';
import './App.css';

import HomePage from './views/pages/HomePage/HomePage';

function App() {
  return (
    <UserProvider>
      <HomePage />
    </UserProvider>
  );
}

export default App;
