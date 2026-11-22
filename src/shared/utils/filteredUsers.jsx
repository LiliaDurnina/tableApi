export function filteredUsers(users, pattern) {
  const p = pattern.trim().toLowerCase();
  if (!p) {
    return users;
  }
  const filterUser = users.filter((person) => {
    const name = `${person.name.first} ${person.name.last}`.toLowerCase();
    return name.includes(p);
  });
  return filterUser;
}
