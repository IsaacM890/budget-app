import React, { useState, createContext } from 'react';
import { IUserDetailsProps } from '../models/index';

export const initialUserContext = {
  FirstName: '',
  LastName: '',
  email: '',
  avatar: '',
};

export const UserContext = createContext<IUserDetailsProps>(initialUserContext);
export const UserDispatchContext = createContext<Function>(() => {});

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserDetailsProps>(initialUserContext);

  return (
    <UserContext.Provider value={{ ...user }}>
      <UserDispatchContext.Provider value={setUser}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
