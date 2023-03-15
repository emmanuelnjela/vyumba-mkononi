import SearchBar from "../../common/searchBar";

function SortSearchBar() {
  const searchBarObject = {
    placeholderText: "Tafuta nyumba ulizo hifadhi",
  } 
  return (
    <div className="sort__searchbar">
      <div className="saved__searchbar d-flex align-items-center c-gap-sm">
        <SearchBar searchBarObject={searchBarObject}/>
        <button className="btn btn--primary">TAFUTA</button>
      </div>
    </div>
  );
}

export default SortSearchBar;
