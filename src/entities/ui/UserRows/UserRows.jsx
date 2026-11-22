import {} from "react";

export const UserRows = (users) => {
  console.log(users);

  const newBody = users.map((person, index) => {
    const date = new Date(person.registered.date);
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
};
