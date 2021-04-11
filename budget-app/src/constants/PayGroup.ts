import { faCheck, faTimes, faSyncAlt, faReply } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { ITransactionProps } from '../models/index';
import { PaymentType, PaymentTypeMsg } from '../enums/index';
// import theme from '../style/theme/theme'
// eslint-disable-next-line consistent-return
const getUiMockProps = (transaction: ITransactionProps) => {
  switch (transaction.paymentMethod) {
    case PaymentType.ATM:
      return {
        text: PaymentTypeMsg.ATM,
        icon: faCheck,
        color: 'white',
        backgroundColor: '#8a7be5',
      };

    case PaymentType.Cancelled:
      return {
        text: PaymentTypeMsg.Cancelled,
        icon: faTimes,
        color: 'white',
        backgroundColor: '#FF8788',
      };

    case PaymentType.cycle:
      return {
        text: PaymentTypeMsg.cycle,
        icon: faSyncAlt,
        color: 'black',
        backgroundColor: 'white',
      };

    case PaymentType.refund:
      return {
        text: PaymentTypeMsg.refund,
        icon: faReply,
        color: 'black',
        backgroundColor: 'white',
      };

    case PaymentType.paypal:
      return {
        text: PaymentTypeMsg.paypal,
        icon: faPaypal,
        color: 'white',
        backgroundColor: '#8a7be5',
      };

    default:
      break;
  }
};

export default getUiMockProps;

// case PaymentType.ATM:
//   return {
//     text: PaymentTypeMsg.ATM,
//     icon: faCheck,
//     color: theme.colors.white,
//     backgroundColor: theme.colors.purple,
//   };

// case PaymentType.Cancelled:
//   return {
//     text: PaymentTypeMsg.Cancelled,
//     icon: faTimes,
//     color: theme.colors.white,
//     backgroundColor: theme.colors.pink.primary,
//   };

// case PaymentType.cycle:
//   return {
//     text: PaymentTypeMsg.cycle,
//     icon: faSyncAlt,
//     color: theme.colors.black,
//     backgroundColor: theme.colors.white,
//   };

// case PaymentType.refund:
//   return {
//     text: PaymentTypeMsg.refund,
//     icon: faReply,
//     color: theme.colors.black,
//     backgroundColor: theme.colors.white,
//   };

// case PaymentType.paypal:
//   return {
//     text: PaymentTypeMsg.paypal,
//     icon: faPaypal,
//     color: theme.colors.white,
//     backgroundColor: theme.colors.purple,
//   };
