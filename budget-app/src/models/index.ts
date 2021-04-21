import { AvatarSize, FontSize, IconSize } from '../enums';

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
  transactions: ITransaction[];
  setTransactions: (transactions: ITransaction[]) => void;
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

export interface IAction {
  type: string;
  payload: any;
}

export interface ITypographyProps {
  color?: string;
  fontsize: FontSize;
  fontweight?: string;
  margin?: string;
  opacity?: string;
}

export interface IIconProps {
  size: IconSize;
  borderRadius?: string;
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
  borderRadius: string;
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
  FirstName: string;
  LastName: string;
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
