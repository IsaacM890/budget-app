import { faCheck, faTimes, faSyncAlt, faReply } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { PAYMENTMETHOD, PAYMENTMETHODTEXT } from '../enums/index';
import theme from '../style/theme/theme';

const getStyleByPaymentMethod = (paymentMethod: string) => {
  switch (paymentMethod) {
    case PAYMENTMETHOD.ATM:
      return {
        text: PAYMENTMETHODTEXT.ATM,
        icon: faCheck,
        color: theme.colors.white.primary,
        backgroundColor: theme.colors.purple,
      };

    case PAYMENTMETHOD.CANCELLED:
      return {
        text: PAYMENTMETHODTEXT.CANCELLED,
        icon: faTimes,
        color: theme.colors.white.primary,
        backgroundColor: theme.colors.pink.primary,
      };

    case PAYMENTMETHOD.CYCLE:
      return {
        text: PAYMENTMETHODTEXT.CYCLE,
        icon: faSyncAlt,
        color: theme.colors.black,
        backgroundColor: theme.colors.white.primary,
      };

    case PAYMENTMETHOD.REFUND:
      return {
        text: PAYMENTMETHODTEXT.REFUND,
        icon: faReply,
        color: theme.colors.black,
        backgroundColor: theme.colors.white.primary,
      };

    case PAYMENTMETHOD.PAYPAL:
      return {
        text: PAYMENTMETHODTEXT.PAYPAL,
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
