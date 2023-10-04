import { useContext, useState } from "react";
import SearchBar from "../common/searchBar";
import HousesContext from "../../context/housesContext";
import HouseSearchBar from "../common/houseSearchBar";

function HomeSearchBar() {
 

  return (
    <div className="home__searchbar mx-auto">
      <HouseSearchBar />
    </div>
  );
}

export default HomeSearchBar;
