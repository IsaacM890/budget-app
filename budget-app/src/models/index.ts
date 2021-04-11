/* eslint-disable camelcase */
import { AvatarSize, FontSize, IconSize } from '../enums';

export interface IUserProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  avatar: string;
  current_balance: string;
  current_balance_currency: string;
}

export interface ITransactionProps {
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

export interface ITypographyProps {
  color?: string;
  fontsize: FontSize;
  fontweight?: string;
  margin?: string;
  opacity?: string;
}

export interface IIconProps {
  size: IconSize;
  margin: string;
  padding: string;
  borderradius?: string;
  backgroundcolor?: string;
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

export interface ICreditCardProps {
  FirstName: string;
  LastName: string;
  last4Digits: number;
  expMonth: number;
  expYear: number;
}

export interface IBriefCardProps {
  title?: string;
  revenue?: string;
  profit?: string;
  iconbackgroundcolor: string;
  iconcolor?: string;
  icon?: any;
}

// export interface IPayGroupProps {
//   text?: string ;
//   icon?: IconDefinition;
//   color?: string;
//   backgroundColor?: string;
// }

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
  currency?: string;
  iconBackground?: string;
  transactions?: [];
}
