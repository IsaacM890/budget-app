import { faCheck, faTimes, faSyncAlt, faReply } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { PAYMENT_METHOD, PAYMENT_METHOD_TEXT } from '../enums/index';
import { colors } from '../style/theme/theme';

const getStyleByPaymentMethod = (paymentMethod: string) => {
  switch (paymentMethod) {
    case PAYMENT_METHOD.ATM:
      return {
        text: PAYMENT_METHOD_TEXT.ATM,
        icon: faCheck,
        color: colors.default,
        backgroundColor: colors.purple,
      };

    case PAYMENT_METHOD.CANCELLED:
      return {
        text: PAYMENT_METHOD_TEXT.CANCELLED,
        icon: faTimes,
        color: colors.default,
        backgroundColor: colors.pink.primary,
      };

    case PAYMENT_METHOD.CYCLE:
      return {
        text: PAYMENT_METHOD_TEXT.CYCLE,
        icon: faSyncAlt,
        color: colors.black,
        backgroundColor: colors.default,
      };

    case PAYMENT_METHOD.REFUND:
      return {
        text: PAYMENT_METHOD_TEXT.REFUND,
        icon: faReply,
        color: colors.black,
        backgroundColor: colors.default,
      };

    case PAYMENT_METHOD.PAYPAL:
      return {
        text: PAYMENT_METHOD_TEXT.PAYPAL,
        icon: faPaypal,
        color: colors.default,
        backgroundColor: colors.purple,
      };
    default:
      return {
        text: ' Withdrawals from Credit Card',
        icon: faCheck,
        color: colors.default,
        backgroundColor: colors.purple,
      };
  }
};

export default getStyleByPaymentMethod;
