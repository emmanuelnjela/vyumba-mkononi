import { useRef } from "react";

function RenderCurrentSelected({currentSelected, onShowDropdown}) {
  let currentDropdownRef = useRef();
  return (
    <div className="dropdown__current" ref={currentDropdownRef} onMouseOver={() => onShowDropdown()}>
      {currentSelected.content} <i className="fas fa-angle-down"></i>
    </div>
  );
}

export default RenderCurrentSelected