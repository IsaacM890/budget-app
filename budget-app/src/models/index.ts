import { AvatarSize, IconSize } from '../enums';
import { fontSize } from '../style/theme/theme';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  currentBalance: string;
  currentBalanceCurrency: string;
  creditCard: ICreditCardProps[];
}

export interface ICreditCardProps {
  firstName: string;
  lastName: string;
  last4Digits: number;
  expMonth: number;
  expYear: number;
}

export interface IUserState {
  user: IUser;
  setUser: (user: IUser) => void;
}

export interface ITransactionsState {
  currencyRate: any;
  selectedCurrency: string;
  transactions: ITransaction[];
  setTransactions: (transactions: ITransaction[]) => void;
  setSelectedCurrency: (currency: string) => void;
  setCurrencyRates: (currencyRate: object) => void;
}

export interface ITransaction {
  paymentType: string;
  paymentMethod: string;
  cancelled: boolean;
  time: string;
  date: string;
  currency: string;
  category: string;
  company: string;
  amount: number;
  location: {
    country: string;
    city: string;
    street: string;
    lat: number;
    lng: number;
  };
}
export interface ITransactionCardProps {
  paymentType: string;
  paymentMethod: string;
  cancelled: boolean;
  time: string;
  date: string;
  currency: string;
  category: string;
  company: string;
  amount: number;
  location: {
    country: string;
    city: string;
    lat: number;
    lng: number;
  };
}

export interface ITransactionPagination {
  totalTransactions: number;
  transactionsPerPage: number;
  paginate: (num: number) => void;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface ITypographyProps {
  color?: string;
  fontsize: fontSize;
  bold?: boolean;
}

export interface IIconProps {
  size: IconSize;
  backgroundColor?: string;
}

export interface IListItemProps {
  margin?: string;
  padding?: string;
}

export interface ICurrentBalanceProps {
  currentBalance?: string;
}

export interface IAvatarProps {
  size: AvatarSize;
  src: string;
}

export interface IBriefCardProps {
  title?: string;
  revenue?: string;
  profit?: string;
  backgroundColor: string;
  color?: string;
  icon?: any;
}

export interface IUserDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export interface IListItemTextProps {
  title?: string;
  subtitle?: string;
  color?: string;
  fontweight?: string;
}

export interface IPaymentListProps {
  iconBackground?: string;
}
export interface ITransactionsListProps {
  transactions?: ITransaction[];
}

export interface ICurrencyRowProps {
  onChange: () => void;
}
export interface INavBarProps {
  currencyCode: string;
  onChange: () => void;
}
