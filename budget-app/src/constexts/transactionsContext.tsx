import React, { useState, createContext } from 'react';
import { ITransactionProps } from '../models/index';

interface ITransactionsContext {
  transactions: ITransactionProps[];
  setTransactions: (transactions: ITransactionProps[]) => void;
}
const initialContext: ITransactionsContext = {
  transactions: [],
  setTransactions: () => {},
};

export const TransactionsContext = createContext<ITransactionsContext>(initialContext);

const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransactionProps[]>([]);

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
