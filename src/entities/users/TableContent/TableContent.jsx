import "react";
import { LoadMoreButton } from "../../../features/LoadMoreButton/LoadMoreButton";
import { SearchLabel } from "../../../features/SearchLabel/SearchLabel";
import { UserTable } from "../uiTable/UserTable/UserTable";
import { useUsersState } from "../../../context/useUsers";

export const TableContent = ({ showUserName }) => {
  console.log("TableContent render");
  const { isLoading, isError } = useUsersState();
  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  if (isError) {
    return <div>Не можем подключиться к серверу</div>;
  }
  return (
    <>
      <SearchLabel showUserName={showUserName} />
      <br></br>
      <UserTable showUserName={showUserName} />
      <br></br>
      <LoadMoreButton />
    </>
  );
};
