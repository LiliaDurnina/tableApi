import { useState } from "react";
import { SearchPanel } from "../../../features/SearchPanel";
import { TableContent } from "../TableContent";

export const UsersContent = () => {
  const [showUserName, setShowUserName] = useState("");
  console.log("UsersContent render");

  return (
    <>
      <SearchPanel setShowUserName={setShowUserName} />
      <TableContent showUserName={showUserName} />
    </>
  );
};

{
  /* <div>Поиск по {showUserName}</div>
      <UserTable users={showVisibleUsers} />
      <LoadMoreButton /> */
}
