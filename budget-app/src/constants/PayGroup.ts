import { faCheck, faTimes, faSyncAlt, faReply } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

// eslint-disable-next-line consistent-return
const getStyledData = (transactionType: any) => {
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
      };

    case 'Cancelled':
      return {
        name: 'Cancelled',
        text: 'Cancelled',
        icon: faTimes,
        color: 'white',
        backgroundcolor: '#FF8788',
        amount: transactionType.amount.to,
        date: transactionType.date,
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
      };

    case 'refund':
      return {
        name: 'refund',
        text: 'Refund',
        icon: faReply,
        color: 'black',
        backgroundcolor: transactionType.amount.to,
        amount: transactionType.amount.to,
        date: transactionType.date,
      };

    case 'paypal':
      return {
        name: 'paypal',
        text: 'Deposit from PayPal',
        icon: faPaypal,
        color: 'white',
        backgroundcolor: '#8a7be5',
        amount: transactionType.amount.to,
        date: transactionType.date,
      };

    default:
      break;
  }
};

export default getStyledData;

// export const payGroup = [
//   {
//     name: 'ATM',
//     text: 'Deposit from ATM',
//     icon: faCheck,
//     color: 'white',
//     backgroundcolor: '#8a7be5',
//     id: 1,
//   },
//   {
//     name: 'Cancelled',
//     text: 'Cancelled',
//     icon: faTimes,
//     color: 'white',
//     backgroundcolor: '#FF8788',
//     id: 2,
//   },
//   {
//     name: 'sync',
//     text: 'Deposit from ATL',
//     icon: faSyncAlt,
//     color: 'black',
//     backgroundcolor: 'white',
//     id: 3,
//   },
//   {
//     name: 'refund',
//     text: 'Refund',
//     icon: faReply,
//     color: 'black',
//     backgroundcolor: 'white',
//     id: 4,
//   },
//   {
//     name: 'paypal',
//     text: 'Deposit from PayPal',
//     icon: faPaypal,
//     color: 'white',
//     backgroundcolor: '#8a7be5',
//     id: 5,
//   },
// ];
