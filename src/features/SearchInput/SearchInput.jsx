import { Input } from "../../shared/ui/Input";

export const SearchInput = ({ userName, handleName }) => {
  return <Input type="text" value={userName} onChange={handleName} placeholder="Введите имя" />;
};
