import React, { useReducer, createContext } from 'react';
import { ITransaction, ITransactionsState } from '../models/index';
import transactionsReducer from '../reducers/transactionsReducer';
import { ACTIONS } from '../enums/index';

const initialState = {
  currencyRate: {},
  setCurrencyRates: () => {},
  selectedCurrency: 'USD',
  setSelectedCurrency: () => {},
  transactions: [],
  setTransactions: () => {},
};

export const TransactionsContext = createContext<ITransactionsState>(initialState);

const TransactionsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState);

  const setTransactions = (transactions: ITransaction[]) => {
    dispatch({ type: ACTIONS.GET_LATEST_TRANSACTIONS, payload: transactions });
  };
  return (
    <TransactionsContext.Provider
      value={{
        ...state,
        setTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
