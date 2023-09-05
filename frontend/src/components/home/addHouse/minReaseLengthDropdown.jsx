import { useContext } from "react";
import Dropdown from "../../common/dropdown";
import AddHouseInfoContext from "../../../context/addHouseInfo";

function MinReasesLengthDropdown() {
  const { onAddHouseInfo, defaultMinReaseLength } =
    useContext(AddHouseInfoContext);

  console.log(defaultMinReaseLength);
  const dropdownItems = [
    {
      id: 1,
      value: "default",
      content: <span>Miezi</span>,
    },
    {
      id: 2,
      value: "Mitatu",
      content: <span>Mitatu</span>,
    },
    {
      id: 3,
      value: "Minne",
      content: <span>Minne</span>,
    },
    {
      id: 4,
      value: "sita",
      content: <span>sita</span>,
    },
    { id: 5, value: "Nane", content: <span>Nane</span> },
  ];
  const handleSelectedValue = (selectedValue) => {
    const values = { Mitatu: 3, Minne: 4, sita: 6, Nane: 8 };
    const e = {
      target: { name: "minReaseLength", value: values[selectedValue] },
    };
    onAddHouseInfo(e);
  };
  const values = { 3: "Mitatu" , 4: "Minne" , 6: "sita" , 8: "Nane"  };
  const defaultMinReaseLengthComp = dropdownItems.find(
    ({ value }) => value === values[defaultMinReaseLength]);
  return (
    <Dropdown
      items={dropdownItems}
      defaultSelectedValue={defaultMinReaseLengthComp}
      getSelectedValue={handleSelectedValue}
    />
  );
}

export default MinReasesLengthDropdown;
