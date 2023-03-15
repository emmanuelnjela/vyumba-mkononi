import SearchBar from "../common/searchBar";

function HomeSearchBar() {
  const searchBarObject = {
    placeholderText: "Andika hapa jina la eneo unalotaka kupanga...",
    withDropDown: true,
    items: {
      item_1: [
        { id: 1, content: <span>KODI KUANZIA</span> },
        { id: 2, content: <span>YOYOTE</span> },
        { id: 3, content: <span>10000</span> },
        { id: 4, content: <span>20000</span> },
        { id: 5, content: <span>40000</span> },
      ],
      item_2: [
        { id: 1, content: <span>KODI MWISHO</span> },
        { id: 2, content: <span>YOYOTE</span> },
        { id: 3, content: <span>10000</span> },
        { id: 4, content: <span>20000</span> },
        { id: 5, content: <span>40000</span> },
      ],
    },
  };
  return (
    <div className="home__searchbar w-80 mx-auto">
      <SearchBar searchBarObject={searchBarObject} />
      <button className="btn btn--primary btn--shadow-none">
        <i className="fas fa-search"></i> TAFUTA
      </button>
    </div>
  );
}

export default HomeSearchBar