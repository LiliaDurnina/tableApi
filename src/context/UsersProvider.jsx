import { useEffect, useState } from "react";
import { userApi } from "../api/userApi";
import { UsersContext } from "./userContext";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await userApi();
        setUsers((prev) => [...prev, ...data]);
        console.log(data);
      } catch (error) {
        console.log("ОШИБКА", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, [page]);

  function loadMore() {
    setPage((prev) => prev + 1);
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
        isError,
        searchValue,
        setSearchValue,
        loadMore,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
