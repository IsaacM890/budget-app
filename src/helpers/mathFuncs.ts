import { ITransaction } from '../models/index';

export const getTotalAmountPerMonthByType = (transactions: ITransaction[], type: string) => {
  const dateObj: any = {};

  transactions.forEach((transaction: ITransaction) => {
    const date = new Date(transaction.date).toLocaleString('default', { month: 'short' });

    if (transaction.paymentType === type) {
      if (!dateObj[date]) {
        dateObj[date] = transaction.amount;
      } else {
        dateObj[date] += transaction.amount;
      }
    }
  });

  const dateObjArray = Object.entries(dateObj).map(([month, totalAmountPerMonth]) => ({
    x: month,
    y: totalAmountPerMonth,
  }));

  const lastSixMonths = 6;
  const incomesData = dateObjArray.slice(-lastSixMonths);
  return incomesData;
};

const getAverage = (transactions: ITransaction[], currencyRates: any) => {
  let total = 0;

  transactions.forEach((transaction: ITransaction) => {
    total += transaction.amount / currencyRates[transaction.currency];
  });

  const average = total / transactions.length;
  return average.toFixed(2);
};

export default getAverage;
