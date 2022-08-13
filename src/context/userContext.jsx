import { createContext, useContext } from 'react';
const UserDataContext = createContext();
const UserActionContext = createContext();
const useUserDataContext = () => useContext(UserDataContext);
const useUserActionContext = () => useContext(UserActionContext);
export {
  UserDataContext,
  useUserDataContext,
  UserActionContext,
  useUserActionContext,
};
