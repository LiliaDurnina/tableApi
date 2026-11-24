import { useUsersState } from "../../../../context/useUsers";
import { filteredUsers } from "../../../../shared/utils";
import { UserBody } from "../UserBody";
import cls from "./UserTable.module.css";

export const UserTable = ({ showUserName }) => {
  console.log("UserTable render");
  const { users } = useUsersState();
  const showVisibleUsers = filteredUsers(users, showUserName);
  if (users.length === 0) {
    return <div>Соотвествий не найдено</div>;
  }
  return (
    <table className={cls.table}>
      <thead className={cls.thead}>
        <tr>
          <th>name</th>
          <th>picture</th>
          <th>city</th>
          <th>location</th>
          <th>email</th>
          <th>phone</th>
          <th>registered date</th>
        </tr>
      </thead>
      <tbody>{<UserBody users={showVisibleUsers} />}</tbody>
    </table>
  );
};
