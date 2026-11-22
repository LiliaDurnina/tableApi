import {} from "react";

import { useUsers } from "../../context/useUsers";
import { Button } from "../../shared/ui/Button";

export const LoadMoreButton = () => {
  const { setPage } = useUsers;
  return <Button onClick={setPage}> Загрузить ещё </Button>;
};
