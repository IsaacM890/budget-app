import React, { useReducer, createContext } from 'react';
import { IUser, IUserState } from '../models/index';
import { REDUCER_ACTIONS } from '../enums/index';
import userReducer from '../reducers/userReducer';

const initialState = {
  user: {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    avatar: '',
    current_balance: '',
    current_balance_currency: '',
  },
  setUser: () => {},
};

export const UserContext = createContext<IUserState>(initialState);

const UserContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const setUser = (user: IUser) => {
    dispatch({ type: REDUCER_ACTIONS.GET_USER_BY_ID, payload: user });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
