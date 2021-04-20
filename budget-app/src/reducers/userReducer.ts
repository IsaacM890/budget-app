import { IUserState, IAction } from '../models/index';
import { REDUCER_ACTIONS } from '../enums/index';

const userReducer = (state: IUserState, action: IAction) => {
  switch (action.type) {
    case REDUCER_ACTIONS.GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
