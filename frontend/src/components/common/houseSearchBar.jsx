import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";

import SearchBar from "./searchBar.jsx";
import HousesContext from "../../context/housesContext.jsx";

function HouseSearchBar() {
  const { register, handleSubmit, reset } = useForm();
  const selectedValuesRef = useRef({});
  const { onHouseSearch } = useContext(HousesContext);

  const handleSelectedValue = (selectedValue) => {
    console.log(typeof selectedValue);
    if (typeof selectedValue !== "number") {
      selectedValue === "any"
        ? (selectedValuesRef.current = {
            ...selectedValuesRef.current,
            any: "any",
          })
        : (selectedValuesRef.current = {
            ...selectedValuesRef.current,
            type: selectedValue,
          });
      return;
    }
    if (selectedValue > 60000) {
      updateSelectedValues("max", selectedValue);
      return;
    }
    updateSelectedValues("min", selectedValue);
  };
  function updateSelectedValues(minMax, selectedValue) {
    selectedValuesRef.current[minMax]
      ? (selectedValuesRef.current[minMax] = selectedValue)
      : null;
    selectedValuesRef.current = {
      ...selectedValuesRef.current,
      [minMax]: selectedValue,
    };
  }
  const onData = (data) => {
    onHouseSearch(data.searchWord, selectedValuesRef.current);
    reset();
  };
  const onError = (error) => {
    console.log(error);
  };
  const searchBarObject = {
    register,
    placeholderText: "Andika hapa jina la eneo unalotaka kupanga...",
    getSelectedValue: handleSelectedValue,
    withDropDown: true,
    items: {
      item_1: [
        {
          id: 0,
          content: (
            <span>
              <i className="fas fa-cash"></i>kodi kuanzia
            </span>
          ),
        },
        { id: 1, value: "any", content: <span>yoyote</span> },
        { id: 2, value: 15000, content: <span>15000 Tsh</span> },
        { id: 3, value: 30000, content: <span>30000 Tsh</span> },
        { id: 4, value: 40000, content: <span>40000 Tsh</span> },
        { id: 5, value: 50000, content: <span>50000 Tsh</span> },
        { id: 6, value: 60000, content: <span>60000 Tsh</span> },
      ],
      item_2: [
        { id: 0, content: <span>kodi mwisho</span> },
        { id: 1, value: "any", content: <span>yoyote</span> },
        { id: 2, value: 80000, content: <span>80000 Tsh</span> },
        { id: 3, value: 90000, content: <span>90000 Tsh</span> },
        { id: 4, value: 140000, content: <span>140000 Tsh</span> },
        { id: 5, value: 150000, content: <span>150000 Tsh</span> },
        { id: 6, value: 160000, content: <span>160000 Tsh</span> },
      ],
      item_3: [
        {
          id: 0,
          content: (
            <span>
              <i className="fas fa-cash"></i>Aina Ya chumba
            </span>
          ),
        },
        { id: 1, value: "any", content: <span>yoyote</span> },
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
      ],
    },
  };
  return (
    <div className="home__searchbar-content">
      <SearchBar searchBarObject={searchBarObject} />
      <button
        className="btn btn--primary btn--shadow-none"
        onClick={handleSubmit(onData, onError)}
      >
        <i className="fas fa-search"></i> TAFUTA
      </button>
    </div>
  );
}

export default HouseSearchBar;
