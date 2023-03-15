import Dropdown from "../dropdown";

function RenderDropDowns({ withDropDown, items }) {
  return (
    withDropDown && (
      <div className="dropdowns d-sm-flex space-btn">
        {Object.values(items).map((i, index) => (
          <Dropdown key={index} items={i} color="secondary" />
        ))}
      </div>
    )
  );
}

export default RenderDropDowns