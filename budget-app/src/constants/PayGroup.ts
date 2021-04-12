import { faCheck, faTimes, faSyncAlt, faReply } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { PaymentMethod, PaymentMethodMsg } from '../enums/index';
// import theme from '../style/theme/theme';

// eslint-disable-next-line consistent-return
const getUiMockProps = (paymentMethod: string) => {
  switch (paymentMethod) {
    case PaymentMethod.ATM:
      return {
        text: PaymentMethodMsg.ATM,
        icon: faCheck,
        color: 'white',
        backgroundColor: '#8a7be5',
      };

    case PaymentMethod.Cancelled:
      return {
        text: PaymentMethodMsg.Cancelled,
        icon: faTimes,
        color: 'white',
        backgroundColor: '#FF8788',
      };

    case PaymentMethod.cycle:
      return {
        text: PaymentMethodMsg.cycle,
        icon: faSyncAlt,
        color: 'black',
        backgroundColor: 'white',
      };

    case PaymentMethod.refund:
      return {
        text: PaymentMethodMsg.refund,
        icon: faReply,
        color: 'black',
        backgroundColor: 'white',
      };

    case PaymentMethod.paypal:
    default:
      return {
        text: PaymentMethodMsg.paypal,
        icon: faPaypal,
        color: 'white',
        backgroundColor: '#8a7be5',
      };
  }
};

export default getUiMockProps;
