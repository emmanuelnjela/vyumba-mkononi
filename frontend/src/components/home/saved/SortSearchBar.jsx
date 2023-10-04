import SearchBar from "../../common/searchBar";

function SortSearchBar({ register, onHouseSearch }) {
  const searchBarObject = {
    placeholderText: "Tafuta nyumba ulizo hifadhi",
    register,
  };
  return (
    <div className="sort__searchbar">
      <div className="saved__searchbar d-flex align-items-center c-gap-sm">
        <SearchBar searchBarObject={searchBarObject} />
        <button onClick={onHouseSearch} className="btn btn--primary">TAFUTA</button>
      </div>
    </div>
  );
}

export default SortSearchBar;
