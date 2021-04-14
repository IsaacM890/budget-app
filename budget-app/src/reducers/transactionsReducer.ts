import { ITransactionProps, ITransactionsState } from '../models/index';
import { REDUCER_ACTIONS } from '../enums/index';

const initialtransactions: ITransactionProps[] = [];

const initialState: ITransactionsState = {
  transactions: initialtransactions,
};

const transactionsReducer = (state: ITransactionsState = initialState, action: any) => {
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
