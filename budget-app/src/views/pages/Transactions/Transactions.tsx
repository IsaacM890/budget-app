import React, { FC, useContext, useState } from 'react';
import TransactionsList from '../../../components/organisms/TransactionsList/TransactionsList';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import { TransactionsFileds } from '../../../enums';

const options = [
  { value: 'paymentType', displayName: 'Payment Type' },
  { value: 'paymentMethod', displayName: 'Payment Method ' },
  { value: 'amount', displayName: 'Amount' },
  { value: 'time', displayName: 'Time' },
  { value: 'date', displayName: 'Date' },
  { value: 'currency', displayName: 'Currency' },
];

const Transactions: FC = () => {
  const { transactions } = useContext(TransactionsContext);
  const [sorted, setSorted] = useState(transactions);
  const [filterByAmount, setFilterByAmount] = useState(0);

  const sortTransactions = (value: any) => {
    const key: TransactionsFileds = value;
    const tempTransactions = [...transactions];
    const sortedTransactions = tempTransactions.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
    setSorted(sortedTransactions);
  };

  const filterTransactions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;
    const tempTransactions = [...transactions];
    const filteredTransactions = tempTransactions.filter(({ amount }) => amount >= +key);
    setFilterByAmount(+key);
    setSorted(filteredTransactions);
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    sortTransactions(value);
  };

  return (
    <div>
      <select defaultValue="SortBy" onChange={onChange}>
        <option disabled value="SortBy">
          Sort By
        </option>
        {options.map(({ value, displayName }) => (
          <option value={value}>{displayName}</option>
        ))}
      </select>
      <input type="range" onChange={filterTransactions} min={0} max={1500} step={100} />
      <p>Amount: {filterByAmount}</p>

      <TransactionsList transactions={sorted} />
    </div>
  );
};

export default Transactions;
