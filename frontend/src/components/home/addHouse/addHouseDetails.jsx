import { useContext } from "react";

import AddHouseInputGroup from "./addHouseInputGroup.jsx";
import HousesInfoSelectContext from "../../../context/houseInfoSelectContext.jsx";

function AddHouseDetails() {
  const { roomTypeItems, minReaseLengthItems } = useContext(
    HousesInfoSelectContext
  );

  const inputGroupItems = [
    {
      id: 1,
      title: "Eneo",
      name: "location",
      placeholder: "Andika kinakopatikana",
      inputType: "text",
      rules: { required: "Tafadhali java eneo ambalo nyumba inapatikana" },
    },
    {
      id: 2,
      title: "Kodi inalipwa kwa miezi",
      placeholder: "Chagua Awamu za Ulipaji wa Kodi",
      name: "minReaseLength",
      inputType: "select",
      options: minReaseLengthItems,
      rules: { required: "Tafadhili jaza awamu za kulipa kodi" },
    },
    {
      id: 3,
      title: "Bei ya kodi kwa mwezi",
      name: "reasePerMonth",
      inputType: "text",
      placeholder: "Andika bei ya kodi kwa mwezi",
      rules: { required: "Tafadhali jaza bei ya kodi kwa mwezi" },
    },
    {
      id: 4,
      name: "roomType",
      title: "Aina ya chumba",
      placeholder: "Chagua aina ya chumba",
      inputType: "select",
      options: roomTypeItems,
      rules: { required: "Tafadhali jaza aina ya chumba" },
    },
    {
      id: 5,
      title: "Maelezo mafupi",
      name: "description",
      inputType: "textArea",
      placeholder: "Andika hapa maelezo mafupi kuihusu nyumba",
      rules: { required: "Tafadhali jaza maelezo mafupi kuihusu nyumba" },
    },
  ];
  return (
    <div className="add-house__details">
      {inputGroupItems.map((inputGroupItem) => {
        return (
          <AddHouseInputGroup key={inputGroupItem.id} {...inputGroupItem} />
        );
      })}
    </div>
  );
}

export default AddHouseDetails;
