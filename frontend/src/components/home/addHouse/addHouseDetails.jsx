import AddHouseInputGroup from "./addHouseInputGroup";
import { addHouseInputGroupDatas } from "./addHouseInputGroupDatas";

function AddHouseDetails() {
  const inputGroupItems = addHouseInputGroupDatas();
  return (
    <div className="add-house__details">
      {inputGroupItems.map(({ id, title, placeholder, Component }) => {
        return (
          <AddHouseInputGroup
            key={id}
            title={title}
            placeholder={placeholder}
            Component={Component}
          />
        );
      })}
    </div>
  );
}

export default AddHouseDetails;

