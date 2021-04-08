import { faCheck, faTimes, faSyncAlt, faReply } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

// {
//   "amount": {
//       "from": 70,
//       "to": 200
//   },
//   "location": {
//       "country": "China",
//       "city": "Lidian",
//       "lat": "32.272766",
//       "lng": "119.579153"
//   },
//   "_id": "606dd9faf0d98b0008b04b70",
//   "paymentType": "Expenses",
//   "paymentMethod": "test123",
//   "cancelled": true,
//   "time": "8:09 PM",
//   "date": "2023-09-06T00:00:00.000Z",
//   "currency": "CNY",
//   "category": "Grocery",
//   "company": "Browsecat",
//   "__v": 0

// credit card ATM
// },

// eslint-disable-next-line consistent-return
export const getStyledData = (transactionType: any) => {
  switch (transactionType.paymentMethod) {
    case 'ATM':
      return {
        name: 'ATM',
        text: 'Deposit from ATM',
        icon: faCheck.iconName,
        color: 'white',
        backgroundcolor: '#8a7be5',
        amount: transactionType.amount.to,
        date: transactionType.date,
        id: 1,
      };

    case 'Cancelled':
      return {
        name: 'Cancelled',
        text: 'Cancelled',
        icon: faCheck.iconName,
        color: 'white',
        backgroundcolor: '#8a7be5',
        amount: transactionType.amount.to,
        date: transactionType.date,
        id: 1,
      };

    case 'cycle':
      return {
        name: 'sync',
        text: 'Deposit from ATL',
        icon: faSyncAlt,
        color: 'black',
        backgroundcolor: 'white',
        amount: transactionType.amount.to,
        date: transactionType.date,
        id: 3,
      };

    case 'refund':
      return {
        name: 'refund',
        text: 'Refund',
        icon: faReply,
        color: 'black',
        backgroundcolor: transactionType.amount.to,
        date: transactionType.date,
        amount: -249,
        id: 4,
      };

    case 'paypal':
      return {
        name: 'paypal',
        text: 'Deposit PayPal',
        icon: faPaypal,
        color: 'white',
        backgroundcolor: '#8a7be5',
        amount: transactionType.amount.to,
        date: transactionType.date,
        id: 5,
      };

    default:
      break;
  }
};

export const payGroup = [
  {
    name: 'ATM',
    text: 'Deposit from ATM',
    icon: faCheck,
    color: 'white',
    backgroundcolor: '#8a7be5',
    amount: 1538,
    id: 1,
  },
  {
    name: 'Cancelled',
    text: 'Cancelled',
    icon: faTimes,
    color: 'white',
    backgroundcolor: '#FF8788',
    amount: 5849,
    id: 2,
  },
  {
    name: 'sync',
    text: 'Deposit from ATL',
    icon: faSyncAlt,
    color: 'black',
    backgroundcolor: 'white',
    amount: -849,
    id: 3,
  },
  {
    name: 'refund',
    text: 'Refund',
    icon: faReply,
    color: 'black',
    backgroundcolor: 'white',
    amount: -249,
    id: 4,
  },
  {
    name: 'paypal',
    text: 'Deposit PayPal',
    icon: faPaypal,
    color: 'white',
    backgroundcolor: '#8a7be5',
    amount: 0,
    id: 5,
  },
];
