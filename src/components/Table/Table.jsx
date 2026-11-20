import cls from "./Table.module.css";
export const Table = ({ users }) => {
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
      <tbody>{makeBody(users)}</tbody>
    </table>
  );
};

function makeBody(users) {
  console.log(users);
  const newBody = users.map((person, index) => {
    const date = new Date(person.registered.date);
    /* const formatDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`; */
    const formatDate = Intl.DateTimeFormat("default", {}).format(date);

    return (
      <tr key={index}>
        <td>{`${person.name.first} ${person.name.last}`}</td>
        <td>
          <img src={person.picture.large} alt="picture" />
        </td>

        <td>{person.location.city}</td>
        <td>{`${person.location.state} ${person.location.city}`}</td>
        <td>{person.email}</td>
        <td>{person.phone}</td>
        <td>{formatDate}</td>
      </tr>
    );
  });

  console.log("a", newBody);
  return newBody;
}
