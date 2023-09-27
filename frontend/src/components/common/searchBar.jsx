// import AutoComplete from "../autocomplete";
import { useState } from "react";
import RenderDropDowns from "./renderComp/renderDropDowns";

function SearchBar({ searchBarObject }) {
  const { items, withDropDown, placeholderText, searchWord, onSearchWord, getSelectedValue } = searchBarObject;
  return (
    <div className="searchbar d-md-flex space-btn">
      <input type="text" value={searchWord} className="searchbar__input" onChange={onSearchWord} placeholder={placeholderText || ""} />
      <RenderDropDowns withDropDown={withDropDown} items={items} getSelectedValue={getSelectedValue} />
    </div>
  );
}

export default SearchBar;


