import React, { FC } from 'react';
import { ITransactionPagination } from '../../models';

const Paginataion: FC<ITransactionPagination> = ({ totalTransactions, transactionsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)} type="button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginataion;
