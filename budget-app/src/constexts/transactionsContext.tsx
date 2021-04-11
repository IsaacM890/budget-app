import React, { useState, createContext } from 'react';
import { ITransactionProps } from '../models/index';

const initialtransactions: ITransactionProps[] = [];

interface ITransactionsContext {
  transactions: ITransactionProps[];
  setTransactions: (transactions: ITransactionProps[]) => void;
}
const initialContext: ITransactionsContext = {
  transactions: initialtransactions,
  setTransactions: () => {},
};
export const TransactionsContext = createContext<ITransactionsContext>(initialContext);

const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransactionProps[]>(initialtransactions);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
