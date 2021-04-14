import { faCheck, faTimes, faSyncAlt, faReply } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { PAYMENT_METHOD, PAYMENT_METHOD_TEXT } from '../enums/index';
import theme from '../style/theme/theme';

const getStyleByPaymentMethod = (paymentMethod: string) => {
  switch (paymentMethod) {
    case PAYMENT_METHOD.ATM:
      return {
        text: PAYMENT_METHOD_TEXT.ATM,
        icon: faCheck,
        color: theme.colors.white.primary,
        backgroundColor: theme.colors.purple,
      };

    case PAYMENT_METHOD.CANCELLED:
      return {
        text: PAYMENT_METHOD_TEXT.CANCELLED,
        icon: faTimes,
        color: theme.colors.white.primary,
        backgroundColor: theme.colors.pink.primary,
      };

    case PAYMENT_METHOD.CYCLE:
      return {
        text: PAYMENT_METHOD_TEXT.CYCLE,
        icon: faSyncAlt,
        color: theme.colors.black,
        backgroundColor: theme.colors.white.primary,
      };

    case PAYMENT_METHOD.REFUND:
      return {
        text: PAYMENT_METHOD_TEXT.REFUND,
        icon: faReply,
        color: theme.colors.black,
        backgroundColor: theme.colors.white.primary,
      };

    case PAYMENT_METHOD.PAYPAL:
      return {
        text: PAYMENT_METHOD_TEXT.PAYPAL,
        icon: faPaypal,
        color: theme.colors.white.primary,
        backgroundColor: theme.colors.purple,
      };
    default:
      return {
        text: ' Withdrawals from Credit Card',
        icon: faCheck,
        color: theme.colors.white.primary,
        backgroundColor: theme.colors.purple,
      };
  }
};

export default getStyleByPaymentMethod;
