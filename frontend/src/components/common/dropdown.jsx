import { useState } from "react";
import RenderCurrentSelected from "./renderComp/renderCurrentSelected";
import List from "./list";

/**
 *
 * @param props items, color
 * @returns dropdown view
 */
function Dropdown({ items, color, getSelectedValue, defaultSelectedValue }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [currentSelected, setCurrentSelected] = useState(
    defaultSelectedValue
      ? defaultSelectedValue
      :( items
      ? items.find((i) => i.id === 1)
      : {})
  );

  const handleShowDropdown = () => {
    setShowDropDown(true);
  };

  const handleItemClicked = (item) => {
    const currentSelectedItem = !item ? currentSelected : item;
    setCurrentSelected(currentSelectedItem);
    getSelectedValue(currentSelectedItem.value);
    handleHideDropdown();
  };

  const handleHideDropdown = () => setShowDropDown(false);

  return (
    <div
      className={`dropdown dropdown--${color || "none"}`}
      onMouseLeave={handleHideDropdown} // Added onMouseLeave event here
    >
      <RenderCurrentSelected
        currentSelected={currentSelected}
        onShowDropdown={handleShowDropdown}
      />
      <div
        className={`dropdown__list ${
          showDropDown ? "" : "dropdown__list--hide"
        }`}
      >
        <List
          items={items}
          onItemClicked={handleItemClicked}
          onHideDropdown={handleHideDropdown}
        />
      </div>
    </div>
  );
}

export default Dropdown;
