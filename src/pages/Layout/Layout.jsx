import { useMemo, useState } from "react";
import { useUsers } from "../../context/useUsers";
import { UserTable } from "../../entities/ui/UserTable";
import { LoadMoreButton } from "../../features/LoadMoreButton";
import { SearchInput } from "../../features/SearchInput/SearchInput";
import { mydebounce } from "../../shared/libs";
import { Button } from "../../shared/ui/Button";
import { filteredUsers } from "../../shared/utils";
import cls from "./Layout.module.css";

export const Layout = () => {
  const { users, loading, isError } = useUsers();

  const [userName, setUserName] = useState("");
  const [showUserName, setShowUserName] = useState("");

  const debounceUserName = useMemo(() => {
    return mydebounce(setShowUserName, 1000);
  }, []);

  const showVisibleUsers = filteredUsers(users, showUserName);

  function handleName(name) {
    setUserName(name);
    debounceUserName(name);
  }

  function handleClear() {
    setUserName("");
    setShowUserName("");
  }

  function renderContent() {
    if (loading) return <div>loading...</div>;
    if (isError) return <div>Не можем подключиться к серверу</div>;

    return (
      <>
        <div className="text">Поиск по {showUserName}</div>
        <UserTable users={showVisibleUsers} />
        <div>
          <br />
          <LoadMoreButton />
        </div>
      </>
    );
  }

  return (
    <div className={cls.layoutWrapper}>
      <div className={cls.formInput}>
        <SearchInput userName={userName} handleName={handleName} />
        <Button onClick={handleClear}>Очистить</Button>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};
