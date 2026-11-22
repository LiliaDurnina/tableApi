import { useMemo, useState } from "react";
import { mydebounce } from "../../shared/libs";
import { Button } from "../../shared/ui/Button";
import { Input } from "../../shared/ui/Input";
import cls from "./SearchPanel.module.css";

export const SearchPanel = ({ setShowUserName }) => {
  const debounceUserName = useMemo(() => mydebounce(setShowUserName, 1000), []);
  const [userName, setUserName] = useState("");
  function handleName(name) {
    setUserName(name);
    debounceUserName(name);
  }

  function handleClear() {
    setUserName("");
    debounceUserName("");
  }
  return (
    <div className={cls.formInput}>
      <Input type="text" value={userName} onChange={handleName} placeholder="Введите имя" />
      <Button onClick={handleClear}>Очистить</Button>
    </div>
  );
};
