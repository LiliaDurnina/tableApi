import { useEffect, useMemo, useState } from "react";
import { userApi } from "../api/userApi";
import { UsersContextActions, UsersContextState } from "./userContext";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const actions = useMemo(() => ({ setUsers, setLoading, setError }), []);

  useEffect(() => {
    (async () => {
      try {
        const data = await userApi();
        setUsers(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <UsersContextState.Provider
      value={{
        users,
        isLoading,
        isError,
      }}
    >
      <UsersContextActions.Provider value={actions}>{children}</UsersContextActions.Provider>
    </UsersContextState.Provider>
  );
};
