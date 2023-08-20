import { useContext } from "react";
import Dropdown from "../../common/dropdown";
import AddHouseInfoContext from "../../../context/addHouseInfo";

function MinReasesLengthDropdown() {
    const {onAddHouseInfo} =  useContext(AddHouseInfoContext)
    const dropdownItems = [
        {
          id: 1,
          value: "default",
          content: <span>Miezi</span>
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
      const values = {"Mitatu": 3, "Minne": 4, "sita": 6, "Nane": 8}
        const e = {target: {name: "minReaseLength", value: values[selectedValue]}}
        onAddHouseInfo(e)
      }
    return (
        <Dropdown items={dropdownItems} getSelectedValue={handleSelectedValue} />
    )
}

export default MinReasesLengthDropdown