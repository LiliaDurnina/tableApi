import { memo, useCallback, useMemo, useState } from "react";
import { mydebounce } from "../../shared/libs";
import { Input } from "../../shared/ui/Input";
import { ButtonClear } from "../ButtonClear";
import cls from "./SearchPanel.module.css";

export const SearchPanel = memo(function SearchPanel({ setShowUserName }) {
  console.log("SearchPanel render");
  const debounceUserName = useMemo(() => mydebounce(setShowUserName, 1000), []);
  const [userName, setUserName] = useState("");
  function handleName(name) {
    setUserName(name);
    debounceUserName(name);
  }
  const handleClear = useCallback(() => {
    setUserName("");
    debounceUserName("");
  }, [debounceUserName]);

  return (
    <div className={cls.formInput}>
      <Input type="text" value={userName} onChange={handleName} placeholder="Введите имя" />
      <ButtonClear handleClear={handleClear} />
    </div>
  );
});
