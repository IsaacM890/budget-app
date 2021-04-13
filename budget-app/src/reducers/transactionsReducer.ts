import { ITransactionProps, ITransactionsState } from '../models/index';

const initialtransactions: ITransactionProps[] = [];

const initialState: ITransactionsState = {
  transactions: initialtransactions,
};

const transactionsReducer = (state: ITransactionsState = initialState, action: any) => {
  switch (action.type) {
    case 'GET_LATEST_TRANSACTIONS':
      return {
        ...state,
        transactions: action.data,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
