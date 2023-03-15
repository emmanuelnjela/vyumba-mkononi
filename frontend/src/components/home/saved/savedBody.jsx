import { useContext } from "react";
import { Link } from "react-router-dom";

import HousesContext from "../../../context/housesContext";
import { SavedBodyLeft } from "./savedBodyLeft";
import { SavedBodyRight } from "./savedBodyRight";

function SavedBody() {
  const housesContext = useContext(HousesContext);

  const { saved: houses, onUpdate } = housesContext;

  const timeItems = [{ id: 1, content: "Zilizowekwa Mapema" }];

  return (
    <div className="saved__body">
      <SavedBodyLeft timeItems={timeItems} />
      <SavedBodyRight
        houses={houses}
        onUpdate={onUpdate}
      />
    </div>
  );
}

export default SavedBody;
