import React, { FC } from 'react';
import styled from 'styled-components';
import { ITransactionsListProps } from '../../../models';
import TransactionCard from '../../molecules/TransactionCard/TransactionCard';

const TransactionsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
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
