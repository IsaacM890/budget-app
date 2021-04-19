import React, { useReducer, createContext } from 'react';
import { IUser, IUserState } from '../models/index';
import { REDUCER_ACTIONS } from '../enums/index';
import userReducer from '../reducers/userReducer';

const initialState = {
  user: {
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    avatar: '',
    currentBalance: '',
    currentBalanceCurrency: '',
    creditCard: [
      {
        FirstName: '',
        LastName: '',
        last4Digits: 0,
        expMonth: 0,
        expYear: 0,
      },
    ],
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
