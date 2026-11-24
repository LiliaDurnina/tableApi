import { UserToolTip } from "../UserToolTip/UserToolTip";

export const UserBody = ({ users }) => {
  console.log("UserBody render");

  const newBody = users.map((person, index) => {
    //console.log(person);
    const date = new Date(person.registered.date);
    const formatDate = Intl.DateTimeFormat("default", {}).format(date);

    return (
      <tr key={index}>
        <td>{`${person.name.first} ${person.name.last}`}</td>
        <UserToolTip person={person} />
        <td>{person.location.city}</td>
        <td>{`${person.location.state} ${person.location.city}`}</td>
        <td>{person.email}</td>
        <td>{person.phone}</td>
        <td>{formatDate}</td>
      </tr>
    );
  });

  return newBody;
};
