import "react";
import { memo } from "react";
import { Button } from "../../shared/ui/Button";

export const ButtonClear = memo(function ButtonClear({ handleClear }) {
  console.log("ButtonClear  render");
  return <Button onClick={handleClear}>Очистить</Button>;
});
