import { useContext, useRef, useState } from "react";
import SearchBar from "./searchBar";
import HousesContext from "../../context/housesContext";
import UsersContext from "../../context/usersContext";
import { useLocation } from "react-router-dom";

function HouseSearchBar() {
  const [searchWord, setSearchWord] = useState("");
  const selectedValuesRef = useRef({});
  const { onHouseSearch } = useContext(HousesContext);

  const handleSearchWord = (e) => {
    setSearchWord(e.target.value);
  };
  const handleSelectedValue = (selectedValue) => {
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

  const searchBarObject = {
    searchWord,
    onSearchWord: handleSearchWord,
    placeholderText: "Andika hapa jina la eneo unalotaka kupanga...",
    getSelectedValue: handleSelectedValue,
    withDropDown: true,
    items: {
      item_1: [
        {
          id: 1,
          content: (
            <span>
              <i className="fas fa-cash"></i>KODI KUANZIA
            </span>
          ),
        },
        { id: 2, content: <span>YOYOTE</span> },
        { id: 3, value: 15000, content: <span>Tsh.15000</span> },
        { id: 4, value: 30000, content: <span>Tsh.30000</span> },
        { id: 5, value: 40000, content: <span>Tsh.40000</span> },
        { id: 6, value: 50000, content: <span>Tsh.50000</span> },
        { id: 7, value: 60000, content: <span>Tsh.60000</span> },
      ],
      item_2: [
        { id: 1, content: <span>KODI MWISHO</span> },
        { id: 2, content: <span>YOYOTE</span> },
        { id: 3, value: 80000, content: <span>Tsh.80000</span> },
        { id: 4, value: 90000, content: <span>Tsh.90000</span> },
        { id: 5, value: 140000, content: <span>Tsh.140000</span> },
        { id: 6, value: 150000, content: <span>Tsh.150000</span> },
        { id: 7, value: 160000, content: <span>Tsh.160000</span> },
      ],
    },
  };
  return (
    <>
      <SearchBar searchBarObject={searchBarObject} />
      <button
        className="btn btn--primary btn--shadow-none"
        onClick={() =>
          onHouseSearch(searchWord, setSearchWord, selectedValuesRef.current)
        }
      >
        <i className="fas fa-search"></i> TAFUTA
      </button>
    </>
  );
}

export default HouseSearchBar;
