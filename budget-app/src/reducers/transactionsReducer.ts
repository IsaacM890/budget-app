import { ITransactionsState } from '../models/index';
import { REDUCER_ACTIONS } from '../enums/index';

interface IAction {
  type: string;
  payload: any;
}

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
