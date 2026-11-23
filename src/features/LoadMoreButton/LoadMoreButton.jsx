import {} from "react";

import { useUsers } from "../../context/useUsers";
import { Button } from "../../shared/ui/Button";

export const LoadMoreButton = () => {
  const { loadMore } = useUsers();
  return <Button onClick={loadMore}> Загрузить ещё </Button>;
};
