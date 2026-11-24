import { useContext } from "react";
import { UsersContextActions, UsersContextState } from "./userContext";

export const useUsersActions = () => {
  return useContext(UsersContextActions);
};
export const useUsersState = () => {
  return useContext(UsersContextState);
};
