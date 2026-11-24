import "react";
import { useState } from "react";
import { Input } from "../../shared/ui/Input";

export const FilterInput = () => {
  console.log("FilterInput render");
  const [userName, setUserName] = useState("");
  function handleName(name) {
    setUserName(name);
    /* debounceUserName(name); */
  }
  return <Input type="text" value={userName} onChange={handleName} placeholder="Введите имя" />;
};
