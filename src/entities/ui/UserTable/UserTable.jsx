import { UserRows } from "../UserRows";
import cls from "./UserTable.module.css";
export const UserTable = ({ users }) => {
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
      <tbody>{UserRows(users)}</tbody>
    </table>
  );
};
