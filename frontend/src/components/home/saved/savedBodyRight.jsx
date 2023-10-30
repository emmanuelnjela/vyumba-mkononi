import SortSearchBar  from "./SortSearchBar.jsx";
import SavedHouses from "./savedHouses.jsx";
import Pagination from "../../common/pagination.jsx";

export function SavedBodyRight(props) {
  return (
    <div className="saved__body-right">
      <SortSearchBar register={props.register} onHouseSearch={props.onHouseSearch} />
      <Pagination
          items={props.houses}
          itemsPerPage={4}
          RenderItems={SavedHouses}
          {...props}
        />
      {/* <SavedHouses {...props} /> */}
    </div>
  );
}


