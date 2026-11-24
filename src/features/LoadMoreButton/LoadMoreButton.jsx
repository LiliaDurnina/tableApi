import "react";
import { useRef } from "react";
import { userApi } from "../../api";
import { useUsersActions } from "../../context/useUsers";
import { Button } from "../../shared/ui/Button";

export const LoadMoreButton = () => {
  console.log("LoadMoreButton render");
  const { setUsers, setLoading, setError } = useUsersActions();

  const page = useRef(2);
  const isFetching = useRef(false);
  const fetchUsers = async () => {
    if (isFetching.current) return;
    try {
      isFetching.current = false;
      const data = await userApi(page.current);
      setUsers((prev) => [...prev, ...data]);
      page.current += 1;
    } catch (error) {
      console.log(error);
      setError(true);
      isFetching.current = false;
    } finally {
      setLoading(false);
    }
  };

  return <Button onClick={fetchUsers}> Загрузить ещё </Button>;
};
