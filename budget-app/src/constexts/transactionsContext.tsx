import React, { useReducer, createContext } from 'react';
import { ITransactionProps, ITransactionsState } from '../models/index';
import transactionsReducer from '../reducers/transactionsReducer';
import { REDUCER_ACTIONS } from '../enums/index';

const initialState = {
  transactions: [],
  setTransactions: () => {},
};

export const TransactionsContext = createContext<ITransactionsState>(initialState);

const TransactionsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState);

  const setTransactions = (transactions: ITransactionProps[]) => {
    dispatch({ type: REDUCER_ACTIONS.GET_LATEST_TRANSACTIONS, payload: transactions });
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
