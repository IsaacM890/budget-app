import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import Paginataion from '../../../helpers/TransactionPaginataion/TransactionPaginataion';
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
const STransactionsPageContainer = styled.div`
  padding: 20px;
`;
const SSelect = styled.select`
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const SFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Transactions: FC = () => {
  const { transactions } = useContext(TransactionsContext);
  const [sorted, setSorted] = useState(transactions);
  const [filterByAmount, setFilterByAmount] = useState(0);
  const tempTransactions = [...transactions];
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(4);
  const indexOfLastTransactions = currentPage * transactionsPerPage;
  const indexOfFirstTransactions = indexOfLastTransactions - transactionsPerPage;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentTrasactions = sorted.slice(indexOfFirstTransactions, indexOfLastTransactions);

  const sortTransactions = (value: any) => {
    const key: TransactionsFileds = value;
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
    const filteredTransactions = tempTransactions.filter(({ amount }) => amount >= +key);
    setFilterByAmount(+key);
    setSorted(filteredTransactions);
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    sortTransactions(value);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <STransactionsPageContainer>
      <SFiltersWrapper>
        <SSelect defaultValue="SortBy" onChange={onChange}>
          <option disabled value="SortBy">
            Sort By
          </option>
          {options.map(({ value, displayName }) => (
            <option value={value}>{displayName}</option>
          ))}
        </SSelect>
        <input type="range" onChange={filterTransactions} min={0} max={1500} step={50} />
      </SFiltersWrapper>
      <p>Amount: {filterByAmount}</p>
      <TransactionsList transactions={sorted} />
      <Paginataion paginate={paginate} transactionsPerPage={transactionsPerPage} totalTransactions={sorted.length} />
    </STransactionsPageContainer>
  );
};

export default Transactions;
