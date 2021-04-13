import theme from '../style/theme/theme';

export const getAmountColor = (amount: number) => {
  if (amount > 0) {
    return theme.colors.purple;
  }
  if (amount < 0) {
    return theme.colors.blue.lightblue;
  }
  return theme.colors.black;
};

export const getAmountSymbol = (amount: number) => (amount > 0 ? `+${amount}` : `${amount}`);

export const getDateFormat = (date: string, time: string) =>
  new Date(date).toLocaleDateString() + new Date(time).toLocaleString();
