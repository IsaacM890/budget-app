import { AvatarSize, FontSize, IconSize } from '../enums';

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
  first_name: string;
  last_name: string;
  last4Digits: number;
  exp_month: number;
  exp_year: number;
}

export interface IBriefCardProps {
  title?: string;
  revenue?: string;
  profit?: string;
  iconbackgroundcolor: string;
  iconcolor?: string;
  icon?: any;
}

export interface IUserDetailsProps {
  first_name: string;
  last_name: string;
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
  payment?: string;
  paymentdate?: string;
  currency?: string;
  iconBackground?: string;
}
