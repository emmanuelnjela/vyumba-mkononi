import SortSearchBar  from "./SortSearchBar";
import SavedHouses from "./savedHouses";

export function SavedBodyRight(props) {
  return (
    <div className="saved__body-right">
      <SortSearchBar />
      <SavedHouses {...props} />
    </div>
  );
}


