import React from 'react';
import UserContextProvider from './constexts/userContext';
import TransactionsContextProvider from './constexts/transactionsContext';
import CurrencyContextProvider from './constexts/currencyContext';
import HomePage from './views/pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <CurrencyContextProvider>
      <TransactionsContextProvider>
        <UserContextProvider>
          <HomePage />
        </UserContextProvider>
      </TransactionsContextProvider>
    </CurrencyContextProvider>
  );
}

export default App;
