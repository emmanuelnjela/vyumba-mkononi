// import AutoComplete from "../autocomplete";
import RenderDropDowns from "./renderComp/renderDropDowns";

function SearchBar({ searchBarObject }) {
  const { items, withDropDown, placeholderText } = searchBarObject;
  return (
    <div className="searchbar d-md-flex space-btn">
      {/* <AutoComplete /> */}
      <input type="text" className="searchbar__input" placeholder={placeholderText || ""} />
      <RenderDropDowns withDropDown={withDropDown} items={items} />
    </div>
  );
}

export default SearchBar;


