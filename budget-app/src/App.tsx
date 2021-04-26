import React from 'react';
import UserContextProvider from './constexts/userContext';
import TransactionsContextProvider from './constexts/transactionsContext';
import './App.css';

import HomePage from './views/pages/HomePage/HomePage';

function App() {
  return (
    <TransactionsContextProvider>
      <UserContextProvider>
        <HomePage />
      </UserContextProvider>
    </TransactionsContextProvider>
  );
}

export default App;
