import { useContext } from "react";
import AddHouseInfoContext from "../../../context/addHouseInfo";

function AddHouseInputGroup({ title, placeholder,name, Component }) {
  const {onAddHouseInfo, houseInfo} = useContext(AddHouseInfoContext)
  

  return (
    <div className="add-house__input-group">
      <h6 className="add-house__input-group-label text--dark">{title}</h6>
      {!placeholder ? (
        Component
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={houseInfo[name]}
          className="add-house__input-group-input"
          onChange={onAddHouseInfo}
        />
      )}
    </div>
  );
}

export default AddHouseInputGroup;
