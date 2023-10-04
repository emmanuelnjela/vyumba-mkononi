import { useRef } from "react";

function List({ isInline, classes, items, onHideDropdown, onItemClicked = () => null}) {

  const listItemRef = useRef()
  return (
    <ul className={`list ${isInline ? "list--inline" : ""} ${classes || ""}`} onMouseLeave={onHideDropdown}>
      {items?.map((item) => (
        item.id != 0 &&
        <li
          key={item.id}
          ref={listItemRef}
          className={`list__item ${item.classes || ""}`}
          onClick={() => onItemClicked(item, listItemRef)}
        >
          {item.content}
        </li>
      ))}
    </ul>
  );
}

export default List;
