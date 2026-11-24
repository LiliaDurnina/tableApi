import "react";

export async function userApi(page = 1, countUsers = 5) {
  const response = await fetch(`https://randomuser.me/api/?page=${page}&results=${countUsers}&seed=abc`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const data = await response.json();
  return data.results;
}
