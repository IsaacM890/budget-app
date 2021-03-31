import React, { useState, createContext } from 'react';
import { IUserDetailsProps } from '../models/index';

export const initialUserContext = {
  FirstName: 'yaron',
  LastName: 'avraham',
  email: 'yaron2324@gmail.com',
  avatar: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
};

export const UserContext = createContext<IUserDetailsProps>(initialUserContext);
export const UserDispatchContext = createContext<Function>(() => {});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserDetailsProps>(initialUserContext);

  return (
    <UserContext.Provider value={{ ...user }}>
      <UserDispatchContext.Provider value={setUser}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;

// export const UserContext = createContext<IUserDetailsProps>(initialUserContext);
// const UserProvider: React.FC = ({ children }) => {
//   const [user, setUser] = useState<IUserDetailsProps>(initialUserContext);

//   return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
// };

// export default UserProvider;
