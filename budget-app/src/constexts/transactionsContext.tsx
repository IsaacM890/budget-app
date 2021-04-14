import React, { useReducer, createContext } from 'react';
import { ITransactionProps, ITransactionsState, ITransactionsContext } from '../models/index';
import transactionsReducer from '../reducers/transactionsReducer';
import { REDUCER_ACTIONS } from '../enums/index';

const initialtransactions: ITransactionProps[] = [];

const initialState: ITransactionsState = {
  transactions: initialtransactions,
};

const initialContext: ITransactionsContext = {
  transactions: initialtransactions,
  setTransactions: () => {},
};

export const TransactionsContext = createContext<ITransactionsContext>(initialContext);

const TransactionsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialState);

  const setTransactions = (transactions: ITransactionProps[]) => {
    dispatch({ type: REDUCER_ACTIONS.GET_LATEST_TRANSACTIONS, payload: transactions });
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

export default TransactionsContextProvider;
