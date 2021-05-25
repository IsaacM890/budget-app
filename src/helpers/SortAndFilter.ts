import { TransactionsFileds } from '../enums';
import { ITransaction } from '../models';

const options = [
  { value: 'paymentType', displayName: 'Payment Type' },
  { value: 'paymentMethod', displayName: 'Payment Method ' },
  { value: 'amount', displayName: 'Amount' },
  { value: 'time', displayName: 'Time' },
  { value: 'date', displayName: 'Date' },
  { value: 'currency', displayName: 'Currency' },
];

const sort = (value: any, transactions: ITransaction[]) => {
  const key: TransactionsFileds = value;
  const sortedTransactions = transactions.sort((a, b) => {
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

  return sortedTransactions;
};

export { sort, options };
