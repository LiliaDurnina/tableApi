import { useContext } from "react";
import { UsersContext } from "./userContext";
export const useUsers = () => {
  return useContext(UsersContext);
};
