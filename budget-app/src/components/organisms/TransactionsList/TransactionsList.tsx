import React, { FC } from 'react';
import styled from 'styled-components';
import { ITransactionsListProps } from '../../../models';
import TransactionCard from '../../molecules/TransactionCard/TransactionCard';

const TransactionsListWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 0;
`;

const TransactionsList: FC<ITransactionsListProps> = ({ transactions }) => (
  <TransactionsListWrapper>
    {transactions?.map(
      ({ paymentType, paymentMethod, cancelled, time, date, currency, category, company, amount, location }) => (
        <TransactionCard
          paymentType={paymentType}
          paymentMethod={paymentMethod}
          cancelled={cancelled}
          time={time}
          date={date}
          currency={currency}
          category={category}
          company={company}
          amount={amount}
          location={location}
        />
      )
    )}
  </TransactionsListWrapper>
);

export default TransactionsList;
