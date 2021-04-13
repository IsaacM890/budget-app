import React, { useReducer, createContext } from 'react';
import { ITransactionProps, ITransactionsState, ITransactionsContext } from '../models/index';
import transactionsReducer from '../reducers/transactionsReducer';

const initialtransactions: ITransactionProps[] = [];

const initialState: ITransactionsState = {
  transactions: initialtransactions,
};

const initialContext: ITransactionsContext = {
  transactions: initialtransactions,
  setTransactions: () => {},
};

export const TransactionsContext = createContext<ITransactionsContext>(initialContext);

const TransactionsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState);

  const setTransactions = (transactions: ITransactionProps[]) => {
    dispatch({ type: 'GET_LATEST_TRANSACTIONS', data: transactions });
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        setTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
