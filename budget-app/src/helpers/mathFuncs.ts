import { ITransactionProps } from '../models/index';

const getAverage = (transactions: ITransactionProps[]) => {
  let total = 0;

  transactions.forEach((transaction: ITransactionProps) => {
    total += transaction.amount;
  });

  const average = total / transactions.length;
  return average.toFixed(2);
};

export default getAverage;
