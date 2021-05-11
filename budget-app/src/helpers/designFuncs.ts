import { colors } from '../style/theme/theme';

export const getAmountColor = (amount: number) => {
  if (amount === 0) return colors.black;
  return amount > 0 ? colors.purple : colors.blue.lightblue;
};

export const getAmountSymbol = (amount: number) => (amount > 0 ? `+${amount.toFixed(2)}` : `${amount.toFixed(2)}`);

export const getDateFormat = (date: string, time: string) =>
  new Date(date).toLocaleDateString() + new Date(time).toLocaleString();
