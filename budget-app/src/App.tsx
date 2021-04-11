import React from 'react';
import UserContextProvider from './constexts/userContext';
import TransactionsProvider from './constexts/transactionsContext';
import './App.css';

import HomePage from './views/pages/HomePage/HomePage';

function App() {
  return (
    <TransactionsProvider>
      <UserContextProvider>
        <HomePage />
      </UserContextProvider>
    </TransactionsProvider>
  );
}

export default App;
