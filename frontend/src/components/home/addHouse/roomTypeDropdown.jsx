import { useContext } from "react";
import Dropdown from "../../common/dropdown";
import AddHouseInfoContext from "../../../context/addHouseInfo";

function RoomTypeDropdown() {
  const { onAddHouseInfo, defaultRoomType } = useContext(AddHouseInfoContext);
 const houseTypes = {apartment: "nyumba nzima", single: "chumba kimoja", double: "chumba na sebure", self: "chumba na choo"}
  const dropdownItems = [
    {
      id: 1,
      value: "default",
      content: <span>Aina ya chumba</span>,
    },
    {
      id: 2,
      value: "apartment",
      content: <span>Nyumba Nzima</span>,
    },
    {
      id: 3,
      value: "single",
      content: <span>Chumba Kimoja</span>,
    },
    {
      id: 4,
      value: "double",
      content: <span>chumba na sebure</span>,
    },
    { id: 5, value: "self", content: <span>chumba self</span> },
  ];
  const handleSelectedValue = (selectedValue) => {
    const e = {
      target: { name: "roomType", value: selectedValue },
    };
    onAddHouseInfo(e);
  };

  

  const defaultRoomTypeComp = dropdownItems.find(
    ({ value }) => value === defaultRoomType
  );
  return (
    <Dropdown
      items={dropdownItems}
      defaultSelectedValue={defaultRoomTypeComp}
      getSelectedValue={handleSelectedValue}
    />
  );
}

export default RoomTypeDropdown;
