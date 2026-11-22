import {} from "react";
export async function userApi() {
  const response = await fetch("https://randomuser.me/api/?results=5");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const data = await response.json();
  return data.results;
}
