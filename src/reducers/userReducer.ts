import { IUserState, IAction } from '../models/index';
import { ACTIONS } from '../enums/index';

const userReducer = (state: IUserState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
