import theme from '../style/theme/theme';

export const getAmountColor = (amount: number) => {
  if (amount === 0) return theme.colors.black;
  return amount > 0 ? theme.colors.purple : theme.colors.blue.lightblue;
};

export const getAmountSymbol = (amount: number) => (amount > 0 ? `+${amount}` : `${amount}`);

export const getDateFormat = (date: string, time: string) =>
  new Date(date).toLocaleDateString() + new Date(time).toLocaleString();
