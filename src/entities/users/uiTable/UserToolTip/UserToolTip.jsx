import "react";

export const UserToolTip = ({ person }) => {
  const [isToolTip, setToolTip] = useState(false);
  const refSetTimeout = useRef("");
  //console.log(users);

  function onMouseEnterHandler(index) {
    refSetTimeout.current = setTimeout(() => {
      setToolTip(index);
    }, 750);
  }

  function onMouseLeaveHandler() {
    clearTimeout(refSetTimeout.current);
    setToolTip({});
  }

  return (
    <td onMouseEnter={() => onMouseEnterHandler(person)} onMouseLeave={onMouseLeaveHandler}>
      <img src={person.picture.large} alt="picture" />
      {isToolTip && <div>{person.name}</div>}
    </td>
  );
};
