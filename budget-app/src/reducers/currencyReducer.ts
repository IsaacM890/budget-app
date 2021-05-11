import { ICurrencyState, IAction } from '../models/index';
import { ACTIONS } from '../enums/index';

const CurrencyReducer = (state: ICurrencyState, action: IAction) => {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case ACTIONS.GET_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload,
      };

    case ACTIONS.GET_CURRENCY_RATE:
      return {
        ...state,
        currencyRates: action.payload,
      };

    default:
      return state;
  }
};

export default CurrencyReducer;
