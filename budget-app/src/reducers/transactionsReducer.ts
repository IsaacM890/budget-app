import { ITransactionsState, IAction } from '../models/index';
import { REDUCER_ACTIONS } from '../enums/index';

const transactionsReducer = (state: ITransactionsState, action: IAction) => {
  switch (action.type) {
    case REDUCER_ACTIONS.GET_LATEST_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
