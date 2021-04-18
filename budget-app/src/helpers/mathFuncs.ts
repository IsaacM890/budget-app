import { ITransaction } from '../models/index';

const getAverage = (transactions: ITransaction[]) => {
  let total = 0;

  transactions.forEach((transaction: ITransaction) => {
    total += transaction.amount;
  });

  const average = total / transactions.length;
  return average.toFixed(2);
};

export default getAverage;
