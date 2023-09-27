import { useContext, useState } from "react";
import SearchBar from "./searchBar";
import HousesContext from "../../context/housesContext";
import UsersContext from "../../context/usersContext";
import { useLocation } from "react-router-dom";

function HouseSearchBar() {
  const [searchWord, setSearchWord] = useState("");
  const { onHouseSearch } = useContext(HousesContext);

  const handleSearchWord = (e) => {
    setSearchWord(e.target.value);
  };

  const searchBarObject = {
    searchWord,
    onSearchWord: handleSearchWord,
    placeholderText: "Andika hapa jina la eneo unalotaka kupanga...",
    withDropDown: true,
    items: {
      item_1: [
        { id: 1, content: <span>KODI KUANZIA</span> },
        { id: 2, content: <span>YOYOTE</span> },
        { id: 3, content: <span>10000</span> },
        { id: 4, content: <span>20000</span> },
        { id: 5, content: <span>30000</span> },
      ],
      item_2: [
        { id: 1, content: <span>KODI MWISHO</span> },
        { id: 2, content: <span>YOYOTE</span> },
        { id: 3, content: <span>40000</span> },
        { id: 4, content: <span>50000</span> },
        { id: 5, content: <span>60000</span> },
      ],
    },
  };
  return (
    <>
      <SearchBar searchBarObject={searchBarObject} />
      <button
        className="btn btn--primary btn--shadow-none"
        onClick={() => onHouseSearch(searchWord)}
      >
        <i className="fas fa-search"></i> TAFUTA
      </button>
    </>
  );
}

export default HouseSearchBar;
