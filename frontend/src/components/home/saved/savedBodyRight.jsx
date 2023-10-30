import SortSearchBar  from "./SortSearchBar";
import SavedHouses from "./savedHouses";
import Pagination from "../../common/pagination";

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


