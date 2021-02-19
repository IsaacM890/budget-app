import { AvatarSize, FontWeight, FontSize, IconSize } from '../enums';

export interface ITypographyProps {
  color?: string;
  fontsize?: FontSize;
  fontweight?: FontWeight;
  opacity?: string;
}

export interface IIconProps {
  size?: IconSize;
  margin?: string;
  padding?: string;
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
  size?: AvatarSize;
  src?: string;
  alt?: string;
}

export interface ICreditCardProps {
  f_name: string;
  l_name: string;
  last4Digits: number;
  exp_month: number;
  exp_year: number;
}

export interface IBriefCardProps {
  title?: string;
  revenue?: string;
  profit?: string;
  iconbackgroundcolor?: string;
  iconcolor?: string;
  icon?: any;
}

export interface IUserDetailsProps {
  f_name?: string;
  l_name?: string;
  email?: string;
  avatar?: string;
}

export interface IListItemTextProps {
  primary?: string;
  secondery?: string;
}

export interface IPaymentListProps {
  payment?: string;
  paymentdate?: string;
  amount?: string;
  currency?: string;
  iconBackground?: string;
}
