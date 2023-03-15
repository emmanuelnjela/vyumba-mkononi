import SearchBar from "../../common/searchBar";

function OverviewSearchbar() {
  const searchBarObject = {
    placeholderText: "Andika hapa jina la eneo unalotaka kupanga... mkoa, wilaya, kata au mtaa",
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
    <div className="overview__searchbar w-70 mx-auto">
      <h1 className="overview__searchbar-title text--center text--secondary">
        Njia Rahisi ya Kupata Vyumba Vya Kupanga
      </h1>
      <SearchBar searchBarObject={searchBarObject} />
      <button className="btn btn--primary overview__searchbar-btn">
        TAFUTA
      </button>
    </div>
  );
}

export default OverviewSearchbar;
