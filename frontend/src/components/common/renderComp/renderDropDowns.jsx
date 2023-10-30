import Dropdown from "../dropdown.jsx";

function RenderDropDowns({ withDropDown, items, getSelectedValue }) {
  return (
    withDropDown && (
      <div className="dropdowns d-sm-flex space-btn">
        {Object.values(items).map((i, index) => (
          <Dropdown
            key={index}
            items={i}
            color="secondary"
            getSelectedValue={getSelectedValue}
          />
        ))}
      </div>
    )
  );
}

export default RenderDropDowns;
