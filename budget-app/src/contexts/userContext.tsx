import React from 'react';
import { IUserDetailsProps } from '../models/index';

export const initialUserContext = {
  FirstName: 'yaron',
  LastName: 'avraham',
  email: 'yaron2324@gmail.com',
  avatar: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
};

export const UserContext = React.createContext<IUserDetailsProps>(initialUserContext);
