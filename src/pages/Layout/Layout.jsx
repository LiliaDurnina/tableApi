import { useState } from "react";
import { useUsers } from "../../context/useUsers";
import { UserTable } from "../../entities/ui/UserTable";
import { LoadMoreButton } from "../../features/LoadMoreButton";
import { SearchPanel } from "../../features/SearchPanel";
import { filteredUsers } from "../../shared/utils";
import cls from "./Layout.module.css";

export const Layout = () => {
  const { users, loading, isError } = useUsers();

  const [showUserName, setShowUserName] = useState("");

  const showVisibleUsers = filteredUsers(users, showUserName);

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
      <SearchPanel setShowUserName={setShowUserName} />
      <div>{renderContent()}</div>
    </div>
  );
};
