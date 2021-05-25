export enum CHARTS_NAMES {
  Income = 'Income',
  Expenses = 'Expenses',
}

export enum ACTIONS {
  GET_LATEST_TRANSACTIONS = 'GET_LATEST_TRANSACTIONS',
  GET_USER_BY_ID = 'GET_USER_BY_ID',
  GET_CURRENCY = 'GET_CURRENCY',
  GET_CURRENCY_RATE = 'GET_CURRENCY_RATE',
}

export enum NAV_GROUPE_LABEL {
  DASHBOARD = 'Dashboard',
  TRANSACTIONS = 'Transactions',
  CHARTS = 'Charts',
  CARDS = 'Cards',
  USER_PROFILE = 'User Profile',
}
export enum NAV_GROUPE_ROUTE {
  DASHBOARD = '/',
  TRANSACTIONS = '/transactions',
  CHARTS = '/charts',
  CARDS = '/cards',
  USER_PROFILE = '/profile',
}

export enum PAYMENT_METHOD {
  PAYPAL = 'paypal',
  ATM = 'ATM',
  CANCELLED = 'Cancelled',
  CYCLE = 'cycle',
  REFUND = 'refund',
}

export enum PAYMENT_METHOD_TEXT {
  PAYPAL = 'Deposit from PayPal',
  ATM = 'Deposit from ATM',
  CANCELLED = 'Cancelled',
  CYCLE = 'Deposit from ATL',
  REFUND = 'Refund',
}

export enum IconSize {
  Xlarge = 'Xlarge',
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export enum AvatarSize {
  xl = 'xl',
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs',
}

export enum TransactionsFileds {
  paymentType = 'paymentType',
  paymentMethod = 'paymentMethod',
  amount = 'amount',
  time = 'time',
  date = 'date',
  currency = 'currency',
}
