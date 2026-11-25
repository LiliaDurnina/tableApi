import "react";
import { useRef, useState } from "react";
import cls from "./UserToolTip.module.css";

export const UserToolTip = ({ person }) => {
  const [isToolTip, setToolTip] = useState(false);
  const refSetTimeout = useRef(null);
  //console.log(users);

  function onMouseEnterHandler() {
    refSetTimeout.current = setTimeout(() => {
      setToolTip(true);
    }, 750);
  }

  function onMouseLeaveHandler() {
    clearTimeout(refSetTimeout.current);
    refSetTimeout.current = null;
    setToolTip(false);
  }

  return (
    <td className={cls.cell} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <img src={person.picture.thumbnail} alt="picture" />
      <div className={`${cls.toolTip} ${isToolTip ? cls.visible : ""} `}>
        {isToolTip && <img src={person.picture.large} alt="picture" />}
      </div>
    </td>
  );
};
