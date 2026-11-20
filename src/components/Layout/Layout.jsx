import { useEffect, useMemo, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Table } from "../Table";
import { filteredUsers } from "../utils";
import cls from "./Layout.module.css";

function mydebounce(func, ms) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
}

export const Layout = () => {
  const [users, setUsers] = useState([]);
  const [loading, isLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setUsers((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.log("ОШИБКА", error);
        setError(true);
      } finally {
        isLoading(false);
      }
    }
    fetchUsers();
  }, [page]);

  const [userName, setUserName] = useState("");
  const [showUserName, setShowUserName] = useState("");
  const debounceUserName = useMemo(() => {
    return mydebounce(setShowUserName, 1000);
  }, []);

  const showVisibleUsers = useMemo(() => {
    return filteredUsers(users, showUserName);
  }, [users, showUserName]);

  function handleName(name) {
    setUserName(name);
    debounceUserName(name);
  }

  function renderContent() {
    if (loading) return <div>loading...</div>;
    if (isError) return <div>Не можем подключиться к серверу</div>;
    return (
      <>
        <div className="text">Поиск по {showUserName}</div> <br /> <br />
        <Table users={showVisibleUsers} />
        <div>
          <br></br>
          <Button onClick={() => setPage(page + 1)}>Загрузить ещё</Button>
        </div>
      </>
    );
  }

  function handleClear() {
    setUserName("");
    setShowUserName("");
  }

  return (
    <div className={cls.layoutWrapper}>
      <div className={cls.formInput}>
        <Input username={userName} setUserName={handleName} placeholder="Введите имя" />
        <Button onClick={handleClear}>Очистить</Button>{" "}
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};
