import React, { FC } from 'react';
import styled from 'styled-components';
import { ITransactionPagination } from '../models';

const SButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const Paginataion: FC<ITransactionPagination> = ({ totalTransactions, transactionsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <SButtonList>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)} type="button">
              {number}
            </button>
          </li>
        ))}
      </SButtonList>
    </div>
  );
};

export default Paginataion;
